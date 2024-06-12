import FormComponent from "./FormComponent";

import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { useActionData, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

const metafieldFieldDetails = {
  namespace: "product_limit_app_number",
  key: "product_limit_number",
};

// export async function loader({ request }) {
//   const { admin } = await authenticate.admin(request);
//   const response = await admin.graphql(
//     `{
//         shop {
//           id
//           metafield(namespace: "${metafieldFieldDetails.namespace}",key: "${metafieldFieldDetails.key}") {
//             value
//           }
//         }
//       }`
//   );
//   const responseJson = await response.json();
//   const shopData = responseJson.data.shop.id;
//   console.log("shopData1");
//   console.log(shopData);
//   return json({
//     shopData,
//   });
// }
//const shopifyStoreID = useLoaderData();






//metafield updation function
export async function action({ request }) {
  const body = new URLSearchParams(await request.text());
  const inputValue = body.get("inputValue");
  
  const { admin } = await authenticate.admin(request);
  console.log("shopData3");
  console.log(inputValue);

  const shopifyStoreID = "gid://shopify/Shop/82674385172";
  const dynamicValue = inputValue || "15";
  const response = await admin.graphql(
    `mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
        metafieldsSet(metafields: $metafields) {
          metafields {
            key
            namespace
            value
            createdAt
            updatedAt
          }
          userErrors {
            field
            message
            code
          }
        }
      }`,
    {
      variables: {
        metafields: [
          {
            namespace: "product_limit_app_number",
            key: "product_limit_number",
            ownerId: shopifyStoreID,
            type: "number_integer",
            value: dynamicValue,
          },
        ],
      },
    }
  );

  const responseJson = await response.json();
  const metafieldValue = responseJson.data.metafieldsSet.metafields.value;
  return json({
    metafieldValue,
  });
}

export default function SetProductLimitData() {
  const metaValue = useActionData();

  useEffect(() => {
    if (metaValue) {
      shopify.toast.show("Changes Saved!", metaValue);
    }
  }, [metaValue]);

  return <FormComponent />;
}

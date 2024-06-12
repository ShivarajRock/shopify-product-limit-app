import FormComponent from "./FormComponent";

import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { useActionData, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";

const metafieldFieldDetails = {
  namespace: "product_limit_app",
  key: "product_limit_data",
};

export async function loader({ request }) {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `{
        shop {
          id
          metafield(namespace: "${metafieldFieldDetails.namespace}",key: "${metafieldFieldDetails.key}") {
            value
          }
        }
      }`
  );
  const responseJson = await response.json();
  const storeId = responseJson.data.shop.id;
  return json({
    storeId,
  });
}
//const shopifyStoreID = useLoaderData();

//metafield updation function
export async function action({ request }) {
  const body = new URLSearchParams(await request.text());
  const inputValue = body.get("inputValue");
  const toggleStatus = body.get("toggleState");
  const shopifyStoreID = body.get("storeIds");
  let functionStatus = false;

  const { admin } = await authenticate.admin(request);
  if (toggleStatus == "on") functionStatus = true;

  const productLimitData = {
    product_limit: inputValue,
    function_state: functionStatus,
  };

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
            namespace: metafieldFieldDetails.namespace,
            key: metafieldFieldDetails.key,
            ownerId: shopifyStoreID,
            type: "json",
            value: JSON.stringify(productLimitData),
          },
        ],
      },
    }
  );

  const responseJson = await response.json();
  const metafieldValue = responseJson.data.metafieldsSet.metafields?.value;

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

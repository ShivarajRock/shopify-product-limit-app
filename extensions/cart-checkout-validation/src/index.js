// @ts-check
// Use JSDoc annotations for type safety
/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionResult} FunctionResult
 */
// The @shopify/shopify_function package will use the default export as your function entrypoint
export function run(input) {
  let itemQuantity = 0;
  const cartLines = input.cart.lines;
  const productLimitData = JSON.parse(input.shop.metafield.value);
  const productLimitValue = productLimitData.product_limit;
  const productLimitStatus = productLimitData.function_state;
  const errors = [];

  if (productLimitStatus) {
    for (let i = 0; i < cartLines.length; i++) {
      let num = cartLines[i].quantity;
      if (num > productLimitValue) {
        itemQuantity = num;
        const error = {
          localizedMessage: `The max line item you can buy is ${productLimitValue}. Item Quantity: ${itemQuantity}`,
          target: "checkout",
        };
        errors.push(error);
        break;
      }
    }
  }

  return { errors };
}

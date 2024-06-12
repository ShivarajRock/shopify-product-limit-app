import {
  FormComponent_default
} from "/build/_shared/chunk-H4KHHHR6.js";
import {
  require_shopify
} from "/build/_shared/chunk-SU66BP3D.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  init_esm,
  useActionData
} from "/build/_shared/chunk-FEATCLUW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-WNSEV6QT.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/app.product-limit.jsx
init_remix_hmr();
var import_node = __toESM(require_node());
var import_shopify = __toESM(require_shopify());
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/app.product-limit.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/app.product-limit.jsx"
  );
  import.meta.hot.lastModified = "1697423221227.4907";
}
function SetProductLimitData() {
  _s();
  const metaValue = useActionData();
  (0, import_react2.useEffect)(() => {
    if (metaValue) {
      shopify.toast.show("Changes Saved!", metaValue);
    }
  }, [metaValue]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormComponent_default, {}, void 0, false, {
    fileName: "app/routes/app.product-limit.jsx",
    lineNumber: 110,
    columnNumber: 10
  }, this);
}
_s(SetProductLimitData, "EQTWOP4Pab402mj7FGYeHOJqCZQ=", false, function() {
  return [useActionData];
});
_c = SetProductLimitData;
var _c;
$RefreshReg$(_c, "SetProductLimitData");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SetProductLimitData as default
};
//# sourceMappingURL=/build/routes/app.product-limit-RERRWAWB.js.map

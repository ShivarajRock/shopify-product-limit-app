import {
  Form,
  init_esm,
  useLoaderData
} from "/build/_shared/chunk-FEATCLUW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-WNSEV6QT.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/FormComponent.jsx
init_remix_hmr();
var import_react = __toESM(require_react());
init_esm();
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/FormComponent.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/FormComponent.jsx"
  );
  import.meta.hot.lastModified = "1697423237726.2185";
}
var FormComponent = () => {
  _s();
  const [inputValue, setInputValue] = (0, import_react.useState)("");
  const [toggleState, setToggleState] = (0, import_react.useState)(false);
  const storeIdData = useLoaderData();
  const storeId = storeIdData.storeId;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { className: "form-container", method: "POST", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "inputField", className: "form-label", children: "Input Product Limit:" }, void 0, false, {
        fileName: "app/routes/FormComponent.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", id: "inputField", className: "form-input", name: "inputValue", value: inputValue, onChange: (e) => setInputValue(e.target.value) }, void 0, false, {
        fileName: "app/routes/FormComponent.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", id: "storeIdField", name: "storeIds", value: storeId }, void 0, false, {
        fileName: "app/routes/FormComponent.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/FormComponent.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "form-group", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "form-label", children: "Toggle Switch:" }, void 0, false, {
        fileName: "app/routes/FormComponent.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "toggle-switch", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", className: "toggle-switch-input", name: "toggleState", checked: toggleState || false, onChange: (e) => setToggleState(e.target.checked) }, void 0, false, {
          fileName: "app/routes/FormComponent.jsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "toggle-slider" }, void 0, false, {
          fileName: "app/routes/FormComponent.jsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/FormComponent.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/FormComponent.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "form-button", children: "Save" }, void 0, false, {
      fileName: "app/routes/FormComponent.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/FormComponent.jsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_s(FormComponent, "1DrZAYmizKrbGVF7Wo77/lwFdXU=", false, function() {
  return [useLoaderData];
});
_c = FormComponent;
var FormComponent_default = FormComponent;
var _c;
$RefreshReg$(_c, "FormComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  FormComponent_default
};
//# sourceMappingURL=/build/_shared/chunk-H4KHHHR6.js.map

import React, { useState } from "react";
import { Form } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";

const FormComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [toggleState, setToggleState] = useState(false);
  const storeIdData = useLoaderData();
  const storeId = storeIdData.storeId;

  return (
    <Form className="form-container" method="POST">
      <div className="form-group">
        <label htmlFor="inputField" className="form-label">
          Input Product Limit:
        </label>
        <input
          type="number"
          id="inputField"
          className="form-input"
          name="inputValue"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="hidden"
          id="storeIdField"
          name="storeIds"
          value={storeId}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Toggle Switch:</label>
        <label className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch-input"
            name="toggleState"
            checked={toggleState || false}
            onChange={(e) => setToggleState(e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
      </div>
      <button type="submit" className="form-button">
        Save
      </button>
    </Form>
  );
};

export default FormComponent;

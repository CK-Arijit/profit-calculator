import React, { useState } from "react";
import "./GstInput.css";

const GstInput = (props) => {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div>
      <select id={props.id} value={selectedValue} onChange={handleChange}>
        <option value="0.12">12%</option>
        <option value="0.18">18%</option>
        <option value="0.24">24%</option>
        <option value="0">Nil</option>
      </select>
    </div>
  );
};

export default GstInput;

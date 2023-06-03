import React, { useState } from "react";
import "./CurrencyInput.css";

function CurrencyInput(props) {
  const [amount, setAmount] = useState("");

  function formatCurrency(value) {
    // Format the value as currency (e.g. "1,000.00")
    return Number(value).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    });
  }

  function handleChange(e) {
    let value = e.target.value;
    value = value.replace(/[^\d.-]/g, ""); // remove non-numeric characters except dot and minus sign
    setAmount(value);
  }

  function handleBlur(e) {
    // Format the amount as currency on blur
    if (amount == 0 || amount == null) {
      setAmount("");
    } else {
      setAmount(formatCurrency(amount));
    }
  }

  return (
    <div>
      <input
        id={props.id}
        type="text"
        name="currency"
        value={amount}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default CurrencyInput;

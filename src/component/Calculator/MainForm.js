import CurrencyInput from "./CurrencyInput";
import GstInput from "./GstInput";
import Section from "../UI/Section";
import Card from "../UI/Card";
import Output from "./Output";
import React, { useState } from "react";
import "../UI/checkbox.css";
import CoreLogic from "./CoreLogic";

function MainForm() {
  const [excludingGst, setExcludingGst] = useState(false);
  const [checkboxClass, setCheckboxClass] = useState("toggle");
  const [profit, setProfit] = useState("NA");
  const [profitPercentage, setProfitPercentage] = useState("NA");

  const clickHandler = () => {
    let excGstCheck = document.getElementById("excGstCheckBox").checked;

    let purchasePrice = document.getElementById("purchasePrice").value;
    purchasePrice = parseFloat(purchasePrice.replace(/[₹,]/g, ""));

    let sellingPrice = document.getElementById("sellingPrice").value;
    sellingPrice = parseFloat(sellingPrice.replace(/[₹,]/g, ""));

    let purchaseGst = document.getElementById("purchaseGst").value;
    purchaseGst = parseFloat(purchaseGst);

    let sellGst = document.getElementById("sellGst").value;
    sellGst = parseFloat(sellGst);

    const dataMapping = {
      excGstCheck: excGstCheck,
      purchasePrice: purchasePrice,
      sellingPrice: sellingPrice,
      purchaseGst: purchaseGst,
      sellGst: sellGst,
    };
    const result = CoreLogic(dataMapping);
    console.log(result);
    setProfit(Math.round(result.profit, 2));
    setProfitPercentage(Math.round(result.profitPercent, 2));
  };

  const handleCheckboxChange = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setCheckboxClass("toggle checked");
    } else {
      setCheckboxClass("toggle");
    }
    setExcludingGst(e.target.checked);
  };

  return (
    <Card className="parentContainer">
      <Card className="childContainer">
        <Section className="topSec">
          <div name="confirmGst" className="flabel">
            Do you want to input purchase price excuding GST?
          </div>
          <div class={checkboxClass}>
            <input
              id="excGstCheckBox"
              type="checkbox"
              checked={excludingGst}
              onChange={handleCheckboxChange}
            />
          </div>
        </Section>

        {!excludingGst && (
          <Section className="secA">
            <div name="purchasePrice" className="flabel">
              Purchase Price(inc. GST)
            </div>
            <div className="currencyField">
              <CurrencyInput id="purchasePrice" />
            </div>
          </Section>
        )}

        {excludingGst && (
          <Section className="secA-a">
            <div name="purchasePrice" className="flabel">
              Purchase Price(exc. GST)
            </div>
            <div className="currencyField">
              <CurrencyInput id="purchasePrice" />
            </div>
          </Section>
        )}
        <Section className="secB">
          <div name="gst" className="flabel">
            GST paid while purchasing
          </div>
          <div className="picklistField">
            <GstInput id="purchaseGst" />
          </div>
        </Section>
        <Section className="secC">
          <div name="sellingePrice" className="flabel">
            Selling Price(inc. GST)
          </div>
          <div className="currencyField">
            <CurrencyInput id="sellingPrice" />
          </div>
        </Section>
        <Section className="secD">
          <div name="gst" className="flabel">
            GST collected while selling
          </div>
          <div className="picklistField">
            <GstInput id="sellGst" />
          </div>
        </Section>
        <button class="submitBtn" type="button" onClick={clickHandler}>
          Calculate
        </button>
      </Card>
      <Output profit={profit} profitPercent={profitPercentage}></Output>
    </Card>
  );
}

export default MainForm;

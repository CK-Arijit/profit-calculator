import Section from "../UI/Section";
import OutputContainer from "../UI/OutputContainer";
function Output(props) {
  // Format the value as currency (e.g. "1,000.00")
  let profit = props.profit;
  let profitPercent = props.profitPercent;
  let netGstPayable = props.netGstPayable;
  if (profit !== "NA") {
    profit = Number(props.profit).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    });
  }

  if (netGstPayable !== "NA") {
    netGstPayable = Number(props.netGstPayable).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    });
  }

  if (profitPercent !== "NA") {
    profitPercent = props.profitPercent + "%";
  }

  return (
    <OutputContainer>
      <Section className="secA">
        <div name="netProfit" className="flabel">
          Net Profit
        </div>
        <div className="fvalue" fieldType="text">
          {profit}
        </div>
      </Section>
      <Section className="secB">
        <div name="profitPercentage" className="flabel">
          Profit Percentage
        </div>
        <div className="fvalue" fieldType="text">
          {profitPercent}
        </div>
      </Section>
      <Section className="secC">
        <div name="netGstPayable" className="flabel">
          Net GST Payable
        </div>
        <div className="fvalue" fieldType="text">
          {netGstPayable}
        </div>
      </Section>
    </OutputContainer>
  );
}

export default Output;

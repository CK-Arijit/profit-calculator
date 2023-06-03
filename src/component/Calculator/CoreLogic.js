function CoreLogic(props) {
  const gst = {
    0.12: 0.8928571429,
    0.18: 0.8474576271,
    0.24: 0.8064516129,
    0: 0,
  };
  let excGstCheck = props.excGstCheck;
  let purchasePrice = props.purchasePrice;
  let sellingPrice = props.sellingPrice;
  let purchaseGst = props.purchaseGst;
  let sellGst = props.sellGst;
  let purchasePriceIncludingGst;
  let purchasePriceExcludingGst;
  let sellPriceIncludingGst;
  let sellPriceExcludingGst;
  let profit;

  if (excGstCheck) {
    purchasePriceExcludingGst = purchasePrice;
    purchasePriceIncludingGst =
      purchasePriceExcludingGst + purchaseGst * purchasePriceExcludingGst;
  } else {
    purchasePriceIncludingGst = purchasePrice;
    purchasePriceExcludingGst = gst[purchaseGst] * purchasePriceIncludingGst;
  }

  let gstPaid = purchasePriceIncludingGst - purchasePriceExcludingGst;

  sellPriceIncludingGst = sellingPrice;
  sellPriceExcludingGst = gst[sellGst] * sellPriceIncludingGst;

  let gstCollected = sellPriceIncludingGst - sellPriceExcludingGst;

  let netGstPayable = gstCollected - gstPaid;

  profit = sellPriceIncludingGst - netGstPayable - purchasePriceIncludingGst;

  let profitPercent = (profit / purchasePriceIncludingGst) * 100;

  console.log(profit);
  console.log(profitPercent);

  const result = {
    profit: profit,
    profitPercent: profitPercent,
  };
  return result;
}

export default CoreLogic;

//* Cash Register

function checkCashRegister(price, cash, cid) {
  //put an elephant in a refrigeration, we need 3 steps, so here we need 3 steps too
  //step1 do I need to give change ? so =>
  //1.1 figure out the value total of our cash in draw.
  var valueCid = cid
    .map(ele => Math.round(ele[1] * 100))
    .reduce((x, y) => x + y); // to fix the float numbers aren't accurate
  var shouldChange = Math.round(cash * 100 - price * 100);

  //step2 Shold I change ?
  // we don't need to change:

  var flag =
    shouldChange === valueCid
      ? (flag = "CLOSED")
      : shouldChange < 0 || valueCid < shouldChange
      ? (flag = "INSUFFICIENT_FUNDS")
      : "OPEN";

  //step3If so, how much should I give the change? And what denomination combination should I give
  //set a standard like the previous Roman Numberal practice.
  var deno = [
    ["ONE HUNDRED", 10000],
    ["TWENTY", 2000],
    ["TEN", 1000],
    ["FIVE", 500],
    ["ONE", 100],
    ["QUARTER", 25],
    ["DIME", 10],
    ["NICKEL", 5],
    ["PENNY", 1]
  ];
  var cidRev = cid.map(e => [e[0], Math.round(e[1] * 100)]).reverse();
  // [["ONE HUNDRED", 100],
  // ["TWENTY", 60],
  // ["TEN", 20],
  // ["FIVE", 55],
  // ["ONE", 90],
  // ["QUARTER", 4.25],
  // ["DIME", 3.1],
  // ["NICKEL", 2.05],
  // ["PENNY", 1.01]]

  //---> this snippet of code are the wantted object.
  var resultObj = {};
  resultObj.status = flag;
  resultObj.change = [];
  //--->
  //   return resultObj;
  if (flag == "CLOSED") {
    resultObj.change = cid;
    return resultObj;
  }
  if (flag === "OPEN") {
    for (let n in deno) {
      var temp = 0;
      while (shouldChange >= deno[n][1] && cidRev[n][1] > 0) {
        shouldChange -= deno[n][1];
        cidRev[n][1] -= deno[n][1];
        temp += deno[n][1];
      }
      if (temp !== 0) {
        resultObj.change.push([deno[n][0], temp / 100]);
      }
    }
  }
  if (resultObj.change.length > 0 && shouldChange > 0) {
    resultObj.status = "INSUFFICIENT_FUNDS";
    resultObj.change = [];
    return resultObj;
  } else {
    return resultObj;
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

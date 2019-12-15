//* Palindrome Checker

function palindrome(str) {
  // Good luck!
  let str1 = str.toLowerCase().replace(/[\W_]/g, "");
  let str2 = str
    .replace(/[\W_]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");
  return str1 === str2;
  console.log(strLst1 + strLst2);
}
function palindrome1(str) {
  let strLst = str
    .toLowerCase()
    .replace(/[\W_]/g, "")
    .split("");
  for (let n = 0, len = strLst.length - 1; n < len / 2; n++) {
    if (strLst[n] !== strLst[len - n]) {
      return false;
    }
  }
  return true;
}

//* Roman Numeral Converter
function convertToRoman(num) {
  let number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];
  let romanized = "";

  for (let i = 0; i < number.length; i++) {
    while (number[i] <= num) {
      romanized += roman[i];
      num -= number[i];
    }
  }
  return romanized;
}

convertToRoman(36);

//* Caesars Cipher
//introduce a method to creat a series of data.
function range(start, stop, step) {
  return Array.from(
    { length: stop - start / step + 1 },
    (_, i) => start + i * step
  );
}

let alphabet = range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map(x =>
  String.fromCharCode(x)
);

function rot13(str) {
  // LBH QVQ VG!
  let alphabet = range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map(x =>
    String.fromCharCode(x)
  );
  let resultStr = "";
  let strLst = str.toUpperCase().split("");
  for (let n in strLst) {
    // /[A-z]/.test(strLst[x])
    if (strLst[n].match(/[A-Z]/)) {
      let posi = alphabet.indexOf(strLst[n]);
      if (posi < 13) {
        posi = posi + 13;
      } else {
        posi = posi - 13;
      }
      resultStr += alphabet[posi];
    } else {
      resultStr += strLst[n];
    }
  }
  return resultStr;
}
function rot13a(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}
rot13("LBH QVQ VG");

//*Telephone Number Validator
function telephoneCheck(str) {
  // Good luck!
  let regEx = /^[1]?[\s\-]?(\(\d{3}\)|\d{3})[\s\-]?(\d{3})[\s\-]?(\d{4})$/;
  return regEx.test(str);
}

//*Cash Register
var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;

  // Transform CID array into drawer object
  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  // Handle exact change
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // Handle obvious insufficient funds
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Loop through the denomination array
  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;
    // While there is still money of this type in the drawer
    // And while the denomination is larger than the change remaining
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      // Round change to the nearest hundreth deals with precision errors
      change = Math.round(change * 100) / 100;
    }
    // Add this denomination to the output only if any was used.
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc; // Return the current change_arr
  }, []); // Initial value of empty array for reduce

  // If there are no elements in change_arr or we have leftover change, return
  // the string "Insufficient Funds"
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // Here is your change, ma'am.
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}

function repeatStringNumTimes(str, num) {
  let str1 = "";
  while (num > 0) {
    str1 = str1 + str;
    num--;
  }
  return str1;
}

//reduction
function repeatStringNumTimes1(str, num) {
  if (num < 0) {
    return "";
  } else if (num == 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

// JS Ternary
function repeatStringNumTimes2(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

// Arry
// I used an array method, I would say it was a beginner way to do it.

function repeatStringNumTimes3(str, num) {
  var strArray = [];

  for (let i = 0; i < num; i++) {
    strArray.push(str);
  }
  return strArray.join("");
}

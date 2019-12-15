//* Sum All Numbers in a Range

function sumAll(arr) {
  var temp = arr.sort((a, b) => a - b);
  var start = temp[0];
  var sum = 0;
  while (start <= temp[1]) {
    sum += start;
    start++;
  }
  return sum;
}

sumAll([1, 4]);

function sumAll1(arr) {
  var max = Math.max(...arr);
  var min = Math.min(...arr);
  var sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

function sumAll2([first, last]) {
  const step = first - last < 0 ? 1 : -1;
  return first !== last ? first + sumAll2([first + step, last]) : first;
}

//* Diff Two Arrays
function diffArray(arr1, arr2) {
  var newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) < 0) {
      newArr.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) < 0) {
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}

function diffArray1(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

function diffArray2(arr1, arr2) {
  function diff(a, b) {
    return a.filter(item => b.indexOf(item) === -1);
  }
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//*Seek and Destroy
var destroyer = function(arr, ...arg) {
  return arr.filter(e => !arg.includes(e));
};

function destroyer1(arr) {
  var argumentsObj = Array.prototype.slice.call(arguments);
  //! The other arguments are put an array by using Array.prototype.slice.call(arguments).  the slice() method is used by an array to copy an array, but because arguments is not really an array(it’s an array-like object), you can’t do arguments.slice(1).So we use Array.prototype.slice.call(arguments, 1) to force arguments to use the slice method, as if it is an array.
  //Create an array of arguments using Array.prototype.slice.call() and store it in the variable args. We’ll use this to check against arr.

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < argumentsObj.length; j++) {
      if (arr[i] == argumentsObj[j]) {
        delete arr[i];
      }
    }
  }
  //   Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to args. This second loop will iterate through args .

  // Within the second loop create an if statement, checking strictly === that the current val of arr[i] is equal to args[j].
  // If the value at the current index is equal in both arrays, use delete to remove it from arr.
  return arr.filter(Boolean);
  //Outside of the nested loops: return the modified array using the Boolean object as a filter for any null's created by the delete operator.
}

function destroyer2(arr) {
  var argumentsObj = Array.from(arguments).slice(1);
  return arr.filter(e => !argumentsObj.includes(e));
}

//*Wherefore art thou
function whatIsInAName(aaa, bbb) {
  var keys = Object.keys(bbb);
  return aaa.filter(function(obj) {
    for (let i = 0; i < keys.length; i++) {
      if (!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== bbb[keys[i]]) {
        return false;
      }
    }
    return true;
  });
}

function whatIsInAName1(aaa, bbb) {
  var keys = Object.keys(bbb);
  return aaa.filter(function(obj) {
    return keys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === bbb[key];
    });
  });
}

//*  Spinal Tap Case
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str
    .toLowerCase()
    .split(/\s|_/)
    .join("-");
}

function spinalCase1(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str
    .split(/\s|_|(?=[A-Z])/) //! 正则表达式中?=和?:和?!的理解https://blog.csdn.net/csm0912/article/details/81206848
    .join("-")
    .toLowerCase();
}

spinalCase("This Is Spinal Tap");

//* Pig Latin
//! /[aeiou]$/i.test(str)
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

function translatePigLatin1(str) {
  var regExNV = /^[^aeiou]+/gi;
  var temp = str.match(regExNV);
  //none vowel words:
  return temp !== null
    ? str
        .replace(temp, "")
        .concat(temp)
        .concat("ay")
    : str.concat("way");
}

function translatePigLatin2(str) {
  let pigLatin = "";
  let regExV = /[aeiou]/gi;
  if (str.charAt(0).match(regExV)) {
    pigLatin = str + "way";
  } else if (str.match(regExV) === null) {
    pigLatin = str + "ay";
  } else {
    var vowelIdx = str.indexOf(str.match(regExV)[0]);
    pigLatin = str.substring(vowelIdx) + str.substring(0, vowelIdx) + "ay";
  }
  return pigLatin;
}
translatePigLatin("consonant");

//* Search and Replace
function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  let tempLst = str.split(" ");
  let indx = tempLst.indexOf(before);
  let strLst = tempLst.slice(0, indx).concat(after, tempLst.slice(indx + 1));
  return (str = strLst.join(" "));
}

function myReplace1(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }

  return str.replace(before, after);
}

//*  DNA Pairing
function pairElement(str) {
  let tempLst = str.split("");
  let result = [];
  for (let i = 0; i < tempLst.length; i++) {
    if (tempLst[i] === "A") {
      result.push(["A", "T"]);
    } else if (tempLst[i] === "T") {
      result.push(["T", "A"]);
    } else if (tempLst[i] === "G") {
      result.push(["G", "C"]);
    } else if (tempLst[i] === "C") {
      result.push(["C", "G"]);
    }
  }
  return result;
}

function pairElement2(str) {
  let tempLst = str.split("");
  let result = [];
  for (let i = 0; i < tempLst.length; i++) {
    tempLst[i] === "A"
      ? result.push(["A", "T"])
      : tempLst[i] === "T"
      ? result.push(["T", "A"])
      : tempLst[i] === "G"
      ? result.push(["G", "C"])
      : tempLst[i] === "C"
      ? result.push(["C", "G"])
      : console.log("haha");
  }
  return result;
}

function pairElement1(str) {
  function ensort(item) {
    switch (item) {
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      case "C":
        return ["C", "G"];
      case "G":
        return ["G", "C"];
    }
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(ensort(str[i]));
  }
  return result;
}

function pairElement3(str) {
  let dict = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  return str.split("").map(item => [item, dict[item]]);
}
//* Missing letters
function fearNotLetter(str) {
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let start = str.charAt(0);
  let end = str.charAt(str.length - 1);
  let target = alpha.slice(alpha.indexOf(start), alpha.indexOf(end) + 1);
  let input = str.split("");
  let result;
  if (target.length == input.length) {
    return undefined;
  } else {
    for (let i = 0; i < target.length; i++) {
      if (input.indexOf(target[i]) <= 0) {
        result = target[i];
      }
    }
  }
  return result;
}

function fearNotLetter1(str) {
  let alpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let start = str.charAt(0);
  let end = str.charAt(str.length - 1);
  let target = alpha.slice(alpha.indexOf(start), alpha.indexOf(end) + 1);
  let input = str.split("");
  let result;
  if (target.length == input.length) {
    return undefined;
  } else {
    return target.filter(item => !input.includes(item));
  }
}

function fearNotLetter2(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1); //? String.fromCharCode(num)
    }
  }
  return undefined;
}

// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.
function fearNotLetter3(str) {
  var compare = str.charCodeAt(0),
    missing;

  str.split("").map(function(letter, index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

function fearNotLetter4(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

function fearNotLetter5(str) {
  var allChars = "";
  var notChars = new RegExp("[^" + str + "]", "g");

  for (var i = 0; allChars[allChars.length - 1] !== str[str.length - 1]; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars)
    ? allChars.match(notChars).join("")
    : undefined;
}

//* Sorted Union
function uniteUnique(...args) {
  var argsArr = Array.prototype.slice.call(args);
  var resultArr;
  resultArr = argsArr.reduce(function(arr1, arr2) {
    return arr1.concat(arr2.filter(e => !arr1.includes(e)));
  });
  return resultArr;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

function uniteUnique1(...args) {
  //concat whole arguments into one single array
  var whole = [];
  var i = 0;
  while (args[i]) {
    whole = whole.concat(args[i]);
    i++;
  }
  //exclude repeated items:
  uniqueArray = whole.filter(function(item, pos) {
    return whole.indexOf(item) == pos;
  });
  return uniqueArray;
}

function uniteUnique2() {
  let result = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (result.indexOf(arguments[i][j]) < 0) {
        result.push(arguments[i][j]);
      }
    }
  }
  return result;
}

//* Convert HTML Entities
function convertHTML(str) {
  // &colon;&rpar;
  let strLst = str.split("");
  for (let i = 0; i < strLst.length; i++) {
    switch (strLst[i]) {
      case "&":
        strLst[i] = "&amp;";
        break;
      case "<":
        strLst[i] = "&lt;";
        break;
      case ">":
        strLst[i] = "&gt;";
        break;
      case "'":
        strLst[i] = "&apos;";
        break;
      case '"':
        strLst[i] = "&quot;";
        break;
    }
  }
  return (str = strLst.join(""));
}

function convertHTML1(str) {
  let hform = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.replace(/[&<>\"']/g, match => hform[match]);
}

function convertHTML2(str) {
  // &colon;&rpar;
  let strLst = str.split("");
  for (let i = 0; i < strLst.length; i++) {
    strLst[i] == "&"
      ? (strLst[i] = "&amp;")
      : strLst[i] == "<"
      ? (strLst[i] = "&lt;")
      : strLst[i] == ">"
      ? (strLst[i] = "&gt;")
      : strLst[i] == "'"
      ? (strLst[i] = "&apos;")
      : strLst[i] == '"'
      ? (strLst[i] = "&quot;")
      : (strLst[i] = strLst[i]);
  }
  return (str = strLst.join(""));
}

function convertHTML3(str) {
  let hform = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  return str
    .split("")
    .map(function(e) {
      if (hform[e]) {
        return hform[e];
      } else {
        return e;
      }
    }) //map(e => hform[e] || e)
    .join("");
}

//*Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  function fibSequence(num) {
    return num <= 1 ? 1 : fibSequence(num - 2) + fibSequence(num - 1);
  }
  var lst = [];
  var i = 0;
  while (fibSequence(i) <= num) {
    lst.push(fibSequence(i));
    i++;
  }
  // while (num >= 1) {
  //   lst.push(fibSequence(num));
  //   num--;
  // }
  var oddLst = lst.filter(a => a % 2 !== 0);
  var result = oddLst.reduce(function(a, b) {
    return a + b;
  }, 0);
  return result;
}

function sumFibs1(num) {
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;
  const arrFib = [1, 1];
  let nexFib = 0;
  while ((nexFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nexFib);
  }
  return arrFib.filter(a => a % 2 !== 0).reduce((a, b) => a + b);
}

sumFibs(4);

//* Sum All Primes
function sumPrimes(num) {
  let primeLst = [];

  for (let j = 2; j <= num; j++) {
    primeLst.push(j);
  }

  return primeLst.filter(e => isPrime1(e)).reduce((a, b) => a + b);
}

function isPrime(number) {
  if (number == 1) {
    return false;
  } else if (number == 2) {
    return true;
  } else {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}
// 在一般领域，对正整数n，如果用2到\sqrt{n}之间的所有整数去除，均无法整除，则n为质数。 质数大于等于2 不能被它本身和1以外的数整除
function isPrime1(num) {
  if (num <= 3) {
    return num > 1;
  } else {
    let sq = Math.sqrt(num);
    for (let i = 2; i <= sq; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}

function sumPrimes1(num) {
  //! step 1 Use Array.from() to generate a sequence of numbers up to and including num. Combine with .slice() to slice off first two indices [0, 1] since all prime numbers must be greater than 1.
  let arr = Array.from(
    {
      length: num + 1
    },
    (v, k) => k
  ).slice(2);
  // step 2
  let onlyPrimes = arr.filter(n => {
    let m = n - 1;
    while (m > 1 && m >= Math.sqrt(n)) {
      if (n % m === 0) return false;
      m--;
    }
    return true;
  });
  // step 3
  return onlyPrimes.reduce((a, b) => a + b);
}

//* Smallest Common Multipl

//!fool way:
function smallestCommons(arr) {
  function multipleArr(num) {
    return Array.from(
      {
        length: 10000
      },
      (v, k) => k * num
    );
  }

  function divideLst(arr, step) {
    let start = Math.min(arr[0], arr[1]);
    let end = Math.max(arr[0], arr[1]);
    return Array.from(
      {
        length: (end - start) / step + 1
      },
      (_, i) => start + i * step
    );
  }
  var lst1 = multipleArr(arr[0]);
  var lst2 = multipleArr(arr[1]);
  var divider = divideLst(arr, 1);
  var multLst = [];
  for (let i = 0; i < lst1.length; i++) {
    if (lst2.indexOf(lst1[i]) > 0) {
      multLst.push(lst1[i]);
    }
  }
  for (let x = 0; x < multLst.length; x++) {
    for (let y = 0; y < divider.length; y++) {
      if (multLst[x] % divider[y] !== 0) {
        delete multLst[x];
      }
    }
  }
  return multLst.filter(Boolean)[0];
}

//Hint
function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }

  // can use reduce() in place of this block
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;

  function gcd(x, y) {
    // Implements the Euclidean Algorithm
    if (y === 0) return x;
    else return gcd(y, x % y);
  }
}

//* Drop it

function dropElements(arr, func) {
  // filter out array items which is asociated with the function
  let firstNum = arr.filter(item => func(item));
  //if no item fullfill the function,return[]
  if (firstNum.length == 0) {
    return [];
  } else {
    //figure out the index of this number
    let idx = arr.indexOf(firstNum[0]);
    //return the answer
    return arr.slice(idx);
  }
}

dropElements([1, 2, 3], function(n) {
  return n < 3;
});

function dropElements1(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }

  return arr;
}

function dropElements2(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift(arr[0]);
  }
  return arr;
}

function dropElements3(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}

function dropElements4(arr, func) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(i + 1)) {
      temp = i;
      break;
    } else {
      temp = arr.length;
    }
  }
  return arr.slice(temp);
}

//*Steamroller

function steamrollArray(arr) {
  let newArr = [];
  //check if an array is an array or not.
  //iterate the arr which is passed in
  // apparently for loop can not meet my require that automatically loop through all kinds of arr
  //so, I should use recursion method,first of all we mk another function
  let flatten = function(arg) {
    if (!Array.isArray(arg)) {
      newArr.push(arg);
    } // recursion, first set a destination , other condition will recall and execute the function again
    else {
      // for (let a = 0; a < arg.length; a++)
      for (let a in arg) {
        flatten(arg[a]);
      }
    }
  };
  arr.forEach(e => flatten(e));
  return newArr;
}

function steamrollArray1(arr) {
  //receive arr[1, [2], [3, [[4]]]] as arguments(1,[2],[3,[[4]]]),so we can concat them
  //into [1,2,3,[[4]]]
  let flatArr = [].concat(...arr);
  //then if there's some elements in the flat array are arrays, we will recurse this function again
  return flatArr.some(Array.isArray) ? steamrollArray1(flatArr) : flatArr;
  // return flatArr
}

function steamrollArray2(arr) {
  while (arr.some(Array.isArray)) {
    arr = arr.flat();
  }
  return arr;
}

function steamrollArray3(arr) {
  return arr.flat(Infinity);
}

//* Binary Agents
function binaryAgent(str) {
  //turn the binary strings into array
  let bin = str.split(" ");
  //then transform those binary to dicimal
  let dic = bin.map(ele => parseInt(ele, 2));
  //then translate these dicmals to characters
  let strLst = dic.map(ele => String.fromCharCode(ele));
  // return str
  return strLst.join("");
}
function binaryAgent1(str) {
  let bin = str.split(" ");
  return bin
    .map(e => parseInt(e, 2))
    .map(e => String.fromCharCode(e))
    .join("");
}

//* Everything Be True
function truthCheck(collection, pre) {
  let flag = true;
  //iterate the given array of objects;
  for (let n in collection) {
    if (!collection[n][pre]) {
      flag = false;
      break;
    }
  }
  return flag;
}

function truthCheck1(collection, pre) {
  //array.every()
  return collection.every(e => e.hasOwnProperty(pre) && e[pre]);
}
function truthCheck2(collection, pre) {
  //array.every()
  return collection.every(e => e[pre]);
}

//*Arguments Optional
function addTogether() {
  //Create an aray that slices our arguments on each param
  let para = [].slice.call(arguments);
  //Check if EVERY PARAM PART is a number by iterating through with a function and if it isn't return undefined
  if (!para.every(e => typeof e === "number")) {
    return undefined;
  }
  //If array has two values add them together
  if (para.length > 1) {
    return para[0] + para[1];
  } else {
    //Store the first paramater
    let temp1 = para[0];
    //Store a function that will take in the SECOND PARAMATER and using RCURSION call itself to add the values
    function askAnotherPara(temp2) {
      return addTogether(temp1, temp2);
    }
    return askAnotherPara;
  }

  //return the value of above
  // return para;
}

function addTogether2() {
  let para = Array.from(arguments);
  if (!para.every(e => typeof e === "number")) {
    return undefined;
  }
  if (para.length > 1) {
    return para[0] + para[1];
  } else {
    let temp1 = para[0];
    return temp2 => {
      if (typeof temp2 === "number") {
        return temp1 + temp2;
      } else {
        return undefined;
      }
    };
  }
}
addTogether(2, 3);

//*Make a Person
var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;
  this.getFullName = function() {
    return fullName;
  };
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };
  this.setFirstName = function(first) {
    let temp1 = fullName.split(" ");
    temp1[0] = first;
    fullName = temp1.join(" ");
  };
  this.setLastName = function(last) {
    fullName = fullname.split(" ")[0] + " " + last; //easy way
  };
  this.setFullName = function(firstAndLast1) {
    fullName = firstAndLast1;
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();

//* Map the Debris
function orbitalPeriod(arr) {
  var before = Array.from(arr);
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  function getT(obj) {
    var T = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj["avgAlt"], 3) / GM)
    );
    return T;
  }
  for (let n in before) {
    var temp = getT(before[n]);
    delete before[n]["avgAlt"];
    before[n].orbitalPeriod = temp;
  }

  return before;
}
function orbitalPeriod1(arr) {
  var before = Array.from(arr);
  var after = [];
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  function getT(obj) {
    var T = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj["avgAlt"], 3) / GM)
    );
    delete obj["avgAlt"];
    obj.orbitalPeriod = T;
    return obj;
  }
  for (let n in before) {
    after.push(getT(before[n]));
  }

  return after;
}
function orbitalPeriod2(arr) {
  var before = Array.from(arr);
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  function getT(obj) {
    var T = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj["avgAlt"], 3) / GM)
    );
    delete obj["avgAlt"];
    obj.orbitalPeriod = T;
    return obj;
  }
  return before.map(getT);
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

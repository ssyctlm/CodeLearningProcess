function confirmEnding(str, target) {
  return str.slice(-target.length) == target;
}

//Solution 2 (Click to Show/Hide)
// (using Regular Expression)

function confirmEnding2(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  let re = new RegExp(target + "$", "i");

  return re.test(str);
}

console.log(confirmEnding("Bastian", "n"));

//! RegExp :constructor of the regular expression object new RegExp(pattern[, flags])

//! RegExp.prototype.test()

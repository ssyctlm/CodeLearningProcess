// the global variable
var fixedValue = 4;

function incrementer() {
  // Add your code below this line
  var temper = fixedValue;
  //   console.log(temper);
  temper++;
  return temper;
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4

//* 05
function incrementer(par) {
  // Add your code below this line
  var temper = par + 1;
  return temper;
  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4

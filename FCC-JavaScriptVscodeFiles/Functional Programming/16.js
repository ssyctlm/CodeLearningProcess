//* Use Higher-Order Functions map, filter, or reduce to Solve a Complex ProblemPassed


const squareList = (arr) => {
    // only change code below this line
    return arr.filter(e => Number.isInteger(e) && e >= 0).map(e => e * e);
    // only change code above this line
};

// test your code
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);



//? Note: several method to judge a number is a integer or decimal
//? 1.  if(num%1 === 0){ }
//? 2.  if(Math.round(num) === num){}
// if(Math.floor(num)===num){}
// if(Math.ceil(num)===num){}
// if(Math.ceil(num) === Math.floor(num)){}
//? 3.  if(Number.isInteger(num)){}
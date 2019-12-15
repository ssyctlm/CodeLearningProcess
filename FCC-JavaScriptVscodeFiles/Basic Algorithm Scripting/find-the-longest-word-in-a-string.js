function findLongestWordLength(str) {
  let arr1 = str.split(" ");
  let criteria = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].length > criteria) {
      criteria = arr1[i].length;
    }
  }
  return criteria;
}

// JS Reduce 253
// JS Reduce Made Easy 337
// JS Math Max 245
function findLongestWordLength1(str) {
  let arr1 = str.split(" ");
  let lengthArr = [];

  for (let i = 0; i < arr1.length; i++) {
    lengthArr.push(arr1[i].length);
  }
  return Math.max(...lengthArr);
}

function findLongestWordLength2(str) {
  let arr1 = str.split(" ");
  let lengthArr = [];

  for (let i = 0; i < arr1.length; i++) {
    lengthArr.push(arr1[i].length);
  }
  return Math.max.apply(null, lengthArr);
}

// function findLongestWordLength3(str) {
//   let arr1 = str.split(" ");
//   return Math.max.apply(
//     null,
//     arr1.reduce(item => {
//       item.length;
//     })
//   );
// }

function findLongestWordLength3(str) {
  let arr1 = str.split(" ");
  return Math.max.apply(
    null,
    arr1.map((item) => {
      return item.length;
    })
  );
}

//! Explaination of reduce method
//! Reduce method is designed for REDUCE an array into an SINGULAR OBJECT(num, string , array, object)

//! Example:
const numbers = [1, -1, 2, 3];

// accumulator = 0 , currentValue = 1 => accumulator = 1;
// accumulator = 1 , currentValue = -1 => accumulator = 0;
// accumulator = 0 , currentValue = 2 => accumulator = 2;
// accumulator = 2 , currentValue = 3 => accumulator = 5;


const initalSumValue = 0; //if you don't assign inital value in the reduce method, the first element of the array will be the inital value which will callback the function 1 times less.

// accumulator = 1 , currentValue = -1 => accumulator = 0;
// accumulator = 0 , currentValue = 2 => accumulator = 2;
// accumulator = 2 , currentValue = 3 => accumulator = 5;


const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, initalSumValue);
console.log(sum);
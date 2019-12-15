function findElement(arr, func) {
  for (let n = 0; n < arr.length; n++) {
    if (func(arr[n])) {
      console.log(func(arr[n]));
      return arr[n];
    }
  }
  return undefined;
}

//arr.find(func)
function findElement1(arr, func) {
  return arr.find(func);
}

//arr.map(callbackFunc) && arr.indexof()

function findElement2(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}

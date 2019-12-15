function factorialize(num) {
  let temp = [];
  let result = 1;
  while (num > 0) {
    temp.push(num);
    num--;
  }
  for (let i = 0; i < temp.length; i++) {
    result *= temp[i];
  }
  return result;
}

//===============
function factorialize1(num) {
  for (var product = 1; num > 0; num--) {
    product *= num;
  }
  return product;
}

//==========
//!!!!!!!!
//Recursion
function factorialize1(num) {
  let result1 = 1;
  if (num > 0) {
    result1 = num * factorialize(num - 1);
  }
  return result1;
}

function factorialize2(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

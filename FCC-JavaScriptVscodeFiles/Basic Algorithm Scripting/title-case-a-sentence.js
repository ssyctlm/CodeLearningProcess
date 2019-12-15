function titleCase(str) {
  let lst = str.toLowerCase().split(" ");

  return lst
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");

  // return result.join(" ");
}

// advanced - regEx

function titleCase1(str) {
  return str.replace(/(^|\s)\S/g, char => char.toUpperCase());
}

//spread
function titleCase2(str) {
  function capitalize(first, ...others) {
    return first.toUpperCase() + others.join("");
  }
  let arr1 = str.split(" ");
  // for (let i = 0; i < arr1.length; i++) {
  //   capitalize(arr1[i]);
  //   console.log(arr1[i]);
  // }
  arr1.map(([first, ...rest]) => first.toUpperCase() + rest.join(""));

  return arr1.join(" ");
}

let firstUpperCase = ([first, ...rest]) => first.toUpperCase() + rest.join("");

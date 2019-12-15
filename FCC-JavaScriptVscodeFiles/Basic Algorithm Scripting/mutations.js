function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2.charAt(i)) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);


function mutation1(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}
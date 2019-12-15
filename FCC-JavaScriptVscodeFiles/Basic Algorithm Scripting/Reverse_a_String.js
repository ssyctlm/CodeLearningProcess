function reverseString(str) {
  let temp = [];
  for (let i = 0; i < str.length; i++) {
    temp.unshift(str[i]);
  }

  return (str = temp.join(""));
}

//================================
//!!!!!!!!!!!!!!!!!!!!!!!!!!
// 3 IMPORTANT Methods
// str.split()
// arr.reverse()
// arr.join()
//!!!!!!!!!!!!!!!!!!!!!!!!!!
//================================

function reverseString1(str) {
  temp = str.split("");
  temp.reverse();
  return (str = temp.join(""));
}

reverseString("hello");

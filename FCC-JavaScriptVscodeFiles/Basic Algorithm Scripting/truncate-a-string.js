function truncateString(string, num) {
  // if(num>string.length){
  //     return string
  // }
  // else{return string.slice(0,num) + "..."};

  return string.length > num ? string.slice(0, num) + "..." : string;
}

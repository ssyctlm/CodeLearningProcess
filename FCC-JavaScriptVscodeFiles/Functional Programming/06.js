// the global variable
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(arr, bookName) {
  var arr1 = arr.slice();
  arr1.push(bookName);
  return arr1;

  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(arr, bookName) {
  var arr1 = arr.slice();
  var book_index = arr1.indexOf(bookName);
  if (book_index >= 0) {
    arr1.splice(book_index, 1);
    return arr1;

    // Add your code above this line
  }
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(bookList);

//* Sort an Array Alphabetically using the sort Method

function alphabeticalOrder(arr) {
    // Add your code below this line
    return arr.sort()

    // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


//!------------------EXAMPLE-------------------------
function ascendingOrder(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
    return arr.sort(function (a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']

//!---------------------------------------------------


//* Return a Sorted Array Without Changing the Original Array
var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Add your code below this line

    return arr.slice().sort((a, b) => a - b)

    // Add your code above this line
}
nonMutatingSort(globalArray);

function nonMutatingSort1(arr) {
    // Add your code below this line
    return [].concat(arr).sort(function (a, b) {
        return a - b;
    });
    // Add your code above this line
}


//!(remember that slice and concat return a new array), then run the sort method.
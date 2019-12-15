//*Remove Elements from an Array Using slice Instead of splice
function nonMutatingSplice(cities) {
    // Add your code below this line
    // return cities.splice(3);
    return cities.slice(0, 3);
    // return cities.slice(0, 3).concat(cities.slice(4))
    // Add your code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);


//* Combine Two Arrays Using the concat Method

function nonMutatingConcat(original, attach) {
    // Add your code below this line
    return original.concat(attach);

    // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);


//* Add Elements to the End of an Array Using concat Instead of push
function nonMutatingPush(original, newItem) {
    // Add your code below this line
    return original.concat(newItem);

    // Add your code above this line
}
var first = [1, 2, 3];
var second = 6;
nonMutatingPush(first, second);
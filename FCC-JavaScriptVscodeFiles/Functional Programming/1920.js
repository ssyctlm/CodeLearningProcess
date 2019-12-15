//*Split a String into an Array Using the split MethodPassed
function splitify(str) {
    // Add your code below this line
    return str.split(/\W/)

    // Add your code above this line
}
splitify("Hello World,I-am code");

//*Combine an Array into a String Using the join Method
function sentensify(str) {
    // Add your code below this line
    return str.split(/\W/).join(" ")

    // Add your code above this line
}
sentensify("May-the-force-be-with-you");
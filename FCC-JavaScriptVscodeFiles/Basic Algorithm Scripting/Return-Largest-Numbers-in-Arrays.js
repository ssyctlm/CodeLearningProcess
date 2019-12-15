function largestOfFour(arr) {
    let maxGroup = [];
    for (let m = 0; m < 4; m++) {
        maxGroup.push(Math.max.apply(null, arr[m]))
    }
    return maxGroup;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);


// advanced solution
function largestOfFour2(arr) {
    let pickBig = function (anArr) {
        return Math.max.apply(null, anArr);
    }
    return arr.map(pickBig);

}

largestOfFour2([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);


function largestOfFour3(arr) {

    return arr.map((subArr) => {
        return Math.max.apply(null, subArr)
    });

}
function chunkArrayInGroups(arr, size) {
    let arr1 = [];

    for (let i = 0; i < arr.length;) {
        console.log(arr)
        arr1.push(arr.splice(0, size))
        console.log(arr)
    }
    return arr1;
}


function chunkArrayInGroups1(arr, size) {
    let arr1 = [];

    for (let i = 0; i < arr.length; i += size) {
        console.log(arr);
        arr1.push(arr.slice(i, i + size));
        console.log(arr);
    }
    return arr1;
}


function chunkArrayInGroups2(arr, size) {
    // Break it up.
    var newArr = [];
    var i = 0;

    while (i < arr.length) {
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr;
}


function chunkArrayInGroups3(arr, size) {
    var temp = [];
    if (arr.length <= size) {
        return [arr]
    } else {
        return [arr.slice(0, size)].concat(chunkArrayInGroups3(arr.slice(size), size));
    }

}


function chunkArrayInGroups4(arr, size) {
    // Break it up.
    var mArr = [];

    function newChunks(arr, size, mArr) {
        if (arr.length > 0) {
            mArr.push(arr.splice(0, size));
            newChunks(arr, size, mArr);
        }

    }
    newChunks(arr, size, mArr);
    return mArr;
}
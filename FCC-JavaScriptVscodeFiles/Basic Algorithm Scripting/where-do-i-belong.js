function getIndexToIns(arr, num) {
    let n = 0
    arr.sort((a, b) => {
        return a - b
    }); //! sort method


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return n = i;
        }
    }
    console.log(n)
    // return n == 0 ? arr.length : n;
    return arr.length;
}
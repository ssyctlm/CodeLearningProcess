function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let temparr2 = arr2.slice(); //! copy an array
    let temparr1 = arr1.slice().reverse();
    for (let i = 0; i < temparr1.length; i++) {
        temparr2.splice(n, 0, temparr1[i]);

    }
    console.log(arr1)
    console.log(arr2)
    return temparr2;
}


function frankenSplice1(arr1, arr2, n) {
    // It's alive. It's alive!
    let temparr2 = arr2.slice(); //! copy an array

    for (let i = 0; i < temparr1.length; i++) {
        temparr2.splice(n, 0, temparr1[i]);
        n++;
    }

    return temparr2;
}


function frankenSplice2(arr1, arr2, n) {
    // It's alive. It's alive!
    let temparr2 = arr2.slice();
    temparr2.splice(n, 0, ...arr1)
    console.log(arr1)
    console.log(arr2)
    return temparr2;
}
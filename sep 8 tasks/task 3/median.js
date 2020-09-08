(function (arr1, arr2) {
    var mergeArr = [];
    mergeArr = arr1.concat(arr2).sort((a, b) => a - b);
    var n = mergeArr.length;
    console.log((n % 2 === 0 ? (mergeArr[n / 2] + mergeArr[(n / 2) - 1]) / 2 : mergeArr[n / 2]));
})([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
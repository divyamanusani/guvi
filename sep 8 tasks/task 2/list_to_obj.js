var arr = ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr) {
    console.log(arr[0]);
    var arr_obj = {};
    var n = arr.length;
    for (i = 0; i < arr.length / 2; i++, n--) {
        arr_obj[arr[i]] = arr[n - 1];
    }


    return arr_obj;
}

console.log(transformFirstAndLast(arr));
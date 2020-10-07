// chunk, reduce, filter, find, sum
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var strArr = ['blue', 'pink', 'green', 'white', 'yellow'];
//chunk function
var chunkArrFunc = function (originalArr, chunkLen) {
    var chunkArr = [];
    for (var i = 0; i < originalArr.length; i = i + chunkLen) {
        var newArr = [];
        for (var j = i; j < chunkLen + i; j++) {
            if (originalArr[j] !== undefined) {
                newArr.push(originalArr[j]);
            }
        }
        chunkArr.push(newArr);
    }
    return chunkArr;
};
console.log("Num chunkArr= ", chunkArrFunc(arr, 5));
console.log("Str chunkArr=", chunkArrFunc(strArr, 3));
//Reduce function
var reduce = function (arr, reduceFun, tot) {
    if (tot === void 0) { tot = arr[0]; }
    var sum = tot;
    for (var i = 1; i < arr.length; i++) {
        sum = reduceFun(sum, arr[i]);
    }
    return sum;
};
console.log("Reduce of add sum arr :" + arr + " = " + reduce(arr, function (tot, curr) { return tot + curr; }));
//filter
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];
var filteredArr = function (arr, filterFunc) {
    var filterArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (filterFunc(arr[i])) {
            filterArr.push(arr[i]);
        }
    }
    return filterArr;
};
console.log('filtered arr=');
console.log(filteredArr(users, function (user) { return user.active; }));
//find Arr
var persons = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
];
var findArrFunc = function (arr, findFunc) {
    for (var i = 0; i < arr.length; i++) {
        if (findFunc(arr[i])) {
            var obj = arr[i];
            return obj;
        }
    }
};
console.log('FindArr = ');
console.log(findArrFunc(persons, function (person) { return person.age < 50; }));
//Sum function
var sum = function (total, arr) {
    for (var i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
};
console.log("Sum of elements :" + arr + " = " + sum(0, arr));

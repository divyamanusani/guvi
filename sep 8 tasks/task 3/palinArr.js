var strArr = ['nitin', 'ramesh', 'divyvid', 'sunil'];

var pal_Arr = [];
for (i = 0; i < strArr.length; i++) {
    (function (str) {
        var revStr = str.split('').reverse().join('');
        
        if (revStr === str)
            pal_Arr.push(str);
    })(strArr[i]);
}
console.log(pal_Arr);

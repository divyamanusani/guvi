var strArr = ['nitin', 'ramesh', 'divyvid', 'sunil','xyzzyx'];

let filter_str=((str)=>str.split('').reverse().join('')===str);
var pal_Arr = strArr.filter(filter_str);

console.log(pal_Arr);

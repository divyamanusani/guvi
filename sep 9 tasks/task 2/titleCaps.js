var sArr = ['i love chocoLates', 'this luks crazzy', 'what a pathetiC situatIon!', 'piZza'];

var titleCapsArr = [];
var str_Arry=[];
sArr.forEach((str) => {
    str = str.toLowerCase().split(' ');
    str_Arry=[];
    str.forEach((str_Arr) => {
        str_Arry.push(str_Arr.charAt(0).toUpperCase() + str_Arr.slice(1));
    });
    titleCapsArr.push(str_Arry.join(' '));
});

console.log(titleCapsArr);









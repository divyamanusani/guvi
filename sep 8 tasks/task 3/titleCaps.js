var sArr = ['i love chocoLates', 'this luks crazzy', 'what a pathetiC situatIon!', 'piZza'];

var titleCapsArr = [];

for (i = 0; i < sArr.length; i++) {
    (function (str) {
        str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        titleCapsArr.push(str.join(' '));
    })(sArr[i]);
}

console.log(titleCapsArr);


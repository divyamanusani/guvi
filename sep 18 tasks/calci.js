
function display(val) {
    document.getElementById("calciInput").value += val;
}

function solve() {
    let a = document.getElementById("calciInput").value;
    let val = eval(a);
    document.getElementById("calciInput").value = val;
}

function reset() {
    document.getElementById("calciInput").value = "";
}

function createEle(ele, className) {
    var t = document.createElement(ele);
    if (className) {
        t.setAttribute('class', className);
    }
    return t;
}

function attrSet(valueArr, funcArr) {
    var tr = createEle('tr');
    for (var i = 0; i < 4; i++) {
        var td = createEle('td');
        var inp = createEle('input');
        inp.setAttribute('type', 'button');
        inp.setAttribute('value', valueArr[i]);
        inp.setAttribute('onclick', funcArr[i]);

        td.append(inp);
        tr.append(td);
    }
    return tr;
}

var row = createEle('div', 'row');
var h1 = createEle('h1');
h1.innerHTML = "Calculator";
var table = createEle('table');

var tr1 = createEle('tr');
var tdfirst1 = createEle('td');
var tdfirst2 = createEle('td');
tdfirst1.setAttribute('colspan', '3');

var inputText = createEle('input');
inputText.setAttribute('type', 'text');
inputText.setAttribute('name', 'operation');
inputText.setAttribute('id', 'calciInput');


var inputc = createEle('input');
inputc.setAttribute('type', 'button');
inputc.setAttribute('value', 'C');
inputc.setAttribute('onclick', 'reset()');

var tr = [];

tr[0] = attrSet(['1', '2', '3', '/'], ["display('1')", "display('2')", "display('3')", "display(' / ')"]);
tr[1] = attrSet(['4', '5', '6', '-'], ["display('4')", "display('5')", "display('6')", "display(' - ')"]);
tr[2] = attrSet(['7', '8', '9', '+'], ["display('7')", "display('8')", "display('9')", "display(' + ')"]);
tr[3] = attrSet(['.', '0', '=', '*'], ["display('.')", "display('0')", "solve()", "display(' * ')"]);


table.append(tr1, ...tr);
tdfirst1.append(inputText);
tdfirst2.append(inputc);
tr1.append(tdfirst1, tdfirst2);

row.append(h1, table);
document.body.append(row);






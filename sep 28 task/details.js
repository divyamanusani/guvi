var count = 1;
var typeArr = [];
function addVariant() {
    var container = createEle('div', 'container');
    container.setAttribute('style', 'margin-top:50px;')
    for (var i = 0; i < 2; i++) {
        var row = createEle('div', 'row');
        var col1 = createEle('div', 'col-md-4');
        col1.innerHTML = i === 0 ? 'Type' : 'Values';
        var col2 = createEle('div', 'col-md-8');
        if (i === 0)
            col2.innerHTML = `<input type='text' id='typeid${count}' name='typename${count}'>`;
        else
            col2.innerHTML = `<input type='text' id='valueid${count}' name='valuename${count++}'>`;
        row.append(col1, col2);
        container.append(row);
    }

    document.body.append(container);
}

function createEle(ele, className) {
    var k = document.createElement(ele);
    k.setAttribute('class', className);
    return k;
}

var obj = [];
var addOnprice = 'addOnPrice';
var price = 20;
function generate() {
    var typeArr = [];
    var values = [];
    var varientDetails = [];
    for (var i = 1; i < count; i++) {
        typeArr.push(document.getElementById(`typeid${i}`).value);
        values.push(document.getElementById(`valueid${i}`).value);
    }

    var typeValues = [];

    for (var i = 0; i < values.length; i++) {
        typeValues[i] = values[i].split(',');
    }
    console.log(typeValues);

    // for (var i = 0; i < values1.length; i++) {
    //     for (var j = 0; j < values2.length; j++) {
    //         for (var k = 0; k < values3.length; k++) {
    //             var val = {};
    //             val[typeArr[0]] = values1[i];
    //             val[typeArr[1]] = values2[j];
    //             val[typeArr[2]] = values3[k];
    //             val[addOnprice] = price += 10;
    //             varientDetails.push(val);
    //         }
    //     }
    // }

    //console.log('varientDetails=', varientDetails);

}
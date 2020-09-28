var container = createEle('div', 'container');
var form = createEle('form', 'form-horizontal');
form.setAttribute('name', 'myForm');
form.setAttribute('method', 'POST');
// Name, Address, Pincode
var forArr = ['firstname', 'lastname', 'address', 'pin', 'state'];
var innerArr = ['First Name', 'Last Name', 'Address', 'PinCode', 'State'];
var nameArr = ['Frstname', 'name', 'Address', 'pincode', 'State'];
var placeArr = ['Enter First Name', 'Enter Last Name', 'Enter Address', 'Enter PinCode', 'Enter State'];
var typeArr = ['text', 'text', 'text', 'number', 'text']
for (var i = 0; i < 5; i++) {
    var div = createEle('div', 'form-group');
    var label = createEle('label', 'control-label col-md-4');

    label.setAttribute('for', forArr[i]);
    label.innerHTML = innerArr[i];
    var div2 = createEle('div', 'col-md-8');
    var input = createEle('input', 'form-control input-lg');
    setAttr(input, {
        'type': typeArr[i],
        'name': nameArr[i],
        'id': forArr[i],
        'placeholder': placeArr[i],
    });
    div2.appendChild(input);
    div.append(label, div2);
    form.append(div);
}


//radio buttons
var div = createEle('div', 'form-group');
var label = createEle('label', 'control-label col-md-4');
label.innerHTML = 'Gender';
var div2 = createEle('div', 'col-md-8');
for (var i = 0; i < 2; i++) {
    var input = document.createElement('input');
    setAttr(input, {
        'type': 'radio',
        'name': 'gender',
        'value': (i === 0) ? 'Male' : 'Female',
    });
    var label1 = document.createElement('label');
    label1.innerHTML = (i === 0) ? 'Male  ' : 'Female  ';
    var br = document.createElement('br');
    div2.append(input, label1, br);

}
div.append(label, div2);
form.append(div);


//select Country
var valueArr = ['Select-Country', 'India', 'Pakisthan', 'Afghanistan', 'Bangladesh', 'UK'];
var div = createEle('div', 'form-group');
var label = createEle('label', 'control-label col-md-4');
label.innerHTML = "Country";
var div2 = createEle('div', 'col-md-8');
var select = createEle('select', 'form-control input-lg');
setAttr(select, {
    'name': 'countryRegion',
    'id': 'country',
});
for (var i = 0; i < 6; i++) {
    var option = document.createElement('option');
    option.setAttribute('value', valueArr[i]);
    option.innerHTML = valueArr[i];
    select.appendChild(option);
}
div2.appendChild(select);
div.append(label, div2);
form.append(div);

//Foods checkboxes
var foodArr = ['Idli', 'Vada', 'Dosa', 'Pavbhaji', 'Pongal', 'Puri', 'Chapathi', 'Tomato Rice'];
var div = createEle('div', 'form-group');
var label = createEle('label', 'control-label col-md-4');
label.innerHTML = 'Foods you love.<br>Select atleast 2 foods';
var div2 = createEle('div', 'col-md-8');
for (var i = 0; i < 8; i++) {
    var label1 = document.createElement('label');
    label1.innerHTML = `<input type='checkbox' value="${foodArr[i]}">${foodArr[i]}`;
    div2.append(label1);
}
div.append(label, div2);
form.append(div);

//submit button
var div = createEle('div', 'form-group');
var label = createEle('label', 'control-label col-md-8');
var input = document.createElement('input');
setAttr(input, {
    'type': 'button',
    'class': 'btn btn-primary input-lg',
    'value': "Submit",
    'onclick': 'getDetails()',
});

div.appendChild(label);
label.appendChild(input);
form.append(div);

container.appendChild(form);
document.body.append(container);

//setting attributes to elements.
function setAttr(ele, attr) {
    for (var j in attr) {
        ele.setAttribute(j, attr[j]);
    }
}

// creating element and adding classNmae
function createEle(ele, classNam) {
    var k = document.createElement(ele);
    k.setAttribute('class', classNam);
    return k;
}

function getDetails() {
    if (validationForm()) {

        let nameVal = document.getElementById('firstname').value;
        let lastnameVal = document.getElementById('lastname').value;
        let addr = document.getElementById('address').value;
        let pin = document.getElementById('pin').value;
        let gender = document.querySelector('input[type="radio"]:checked').value;
        let check = document.querySelectorAll('input[type="checkbox"]:checked');
        let foods = [];
        for (var i = 0; i < check.length; i++) {
            foods.push(check[i].value);
        }
        let state = document.getElementById('state').value;
        let country = document.getElementById('country').value;
        var table = document.createElement('table');
        table.setAttribute('border', '1');
        var heading = ['FirstName', 'LastName', 'Address', 'Pincode', 'Gender', 'Foods', 'State', 'Country'];
        var tabledata = [nameVal, lastnameVal, addr, pin, gender, foods.join(), state, country];
        for (var i = 0; i < 8; i++) {
            var tr = document.createElement('tr');
            var th = document.createElement('th');
            th.innerHTML = heading[i];
            var td = document.createElement('td');
            td.innerHTML = tabledata[i];

            table.append(tr);
            tr.append(th, td);

        }
        document.body.append(table);
    }
}

function validationForm() {

    if (document.myForm.Frstname.value == "") {
        alert("Please provide your first name!");
        document.myForm.Frstname.focus();
        return false;
    }

    if (document.myForm.name.value == "") {
        alert("Please provide your last name!");
        document.myForm.name.focus();
        return false;
    }

    if (document.myForm.Address.value == "") {
        alert("Please provide your address!");
        document.myForm.Address.focus();
        return false;
    }

    if (document.myForm.pincode.value == "" || document.myForm.pincode.value.length !== 6) {
        alert("Please provide 6-digit pincode!");
        document.myForm.pincode.focus();
        return false;
    }

    var radios = document.getElementsByName("gender");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;
    }

    if (!formValid) {
        alert("Must select gender!");
        return formValid;
    };

    var check = document.querySelectorAll('input[type="checkbox"]:checked');
    if (check.length < 2)
        alert('Please select atleast 2 foods');

    if (document.myForm.State.value == "") {
        alert("Please provide your State!");
        document.myForm.State.focus();
        return false;
    }

    if (document.myForm.countryRegion.value == "Select-Country") {
        alert("Please select your country!");
        document.myForm.countryRegion.focus();
        return false;
    }
    return true;
}
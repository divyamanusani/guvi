function getDetails() {
    if (validationForm()) {

        let nameVal = document.getElementById('firstname').value;
        let lastnameVal = document.getElementById('lastname').value;
        let addr = document.getElementById('address').value;
        let pin = document.getElementById('pin').value;
        let gender = document.querySelector('input[type="radio"]:checked').value;
        // let check = document.getElementsByClassName('checkbox');
        // console.log(check);
        // // var foods=[];
        // // for(var i=0;i<check.length;i++){
        // //     if(check[i].checked){
        // //         foods.push(check[i].value);
        // //     }
        // // }
        let state = document.getElementById('state').value;
        let country = document.getElementById('country').value;
        var table = document.createElement('table');
        table.setAttribute('border', '1');
        var heading = ['FirstName', 'LastName', 'Address', 'Pincode', 'Gender', 'State', 'Country'];
        var tabledata = [nameVal, lastnameVal, addr, pin, gender,state, country];
        for (var i = 0; i < 7; i++) {
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




    if (document.myForm.State.value == "") {
        alert("Please provide your State!");
        document.myForm.State.focus();
        return false;
    }

    if (document.myForm.countryRegion.value == "0") {
        alert("Please select your country!");
        document.myForm.countryRegion.focus();
        return false;
    }
    return true;
}
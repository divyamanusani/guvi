// create post
//read get
//update put/patch
//delete delete

var isEdit = false;
var userDataList = [];

async function getUsers() {
    var userReq = await fetch('https://5f7b044f40abc60016472b2c.mockapi.io/formUsers');
    var userData = await userReq.json();
    console.log(userData);
    userDataList = userData;
    fillData(userData);
}

function fillData(userData) {
    document.getElementById('userTable').innerHTML =
        `<tr>
        <th>Name</th>
        <th>Address</th>
        <th>Gender</th>
        <th>Country</th>
        <th>State</th>
        <th>City</th>
        <th>Email</th>
        <th>Foods</th>
        <th>Color</th>
        <th>Marital-Status</th>
    </tr>`;

    userData.forEach((user) => {
        var tr = document.createElement('tr');
        var tdName = document.createElement('td');
        var tdAddr = document.createElement('td');
        var tdGender = document.createElement('td');
        var tdCountry = document.createElement('td');
        var tdState = document.createElement('td');
        var tdCity = document.createElement('td');
        var tdemail = document.createElement('td');
        var tdFood = document.createElement('td');
        var tdColor = document.createElement('td');
        var tdmaritalStatus = document.createElement('td');
        var tdEditCol = document.createElement('td');
        var tdDelCol = document.createElement('td');
        var tdEdit = document.createElement('button');
        tdEdit.innerHTML = 'Edit';
        var tdDel = document.createElement('button');
        tdDel.innerHTML = 'Delete';
        tdEdit.setAttribute('onclick', `editRow(${user.id})`);
        tdDel.setAttribute('onclick', `delRow(${user.id})`);
        tdName.innerHTML = user.fullname;
        tdAddr.innerHTML = user.address;
        tdGender.innerHTML = user.gender;
        tdCountry.innerHTML = user.country;
        tdState.innerHTML = user.state;
        tdCity.innerText = user.city;
        tdemail.innerHTML = user.email;
        tdFood.innerHTML = user.food;
        tdColor.innerHTML = user.color;
        tdmaritalStatus.innerHTML = user.maritalStatus;
        tdEditCol.appendChild(tdEdit);
        tdDelCol.appendChild(tdDel);
        tr.append(tdName, tdAddr, tdGender, tdCountry, tdState, tdCity, tdemail, tdFood, tdColor, tdmaritalStatus, tdEditCol, tdDelCol);
        document.getElementById('userTable').appendChild(tr);
    });

}

function editRow(id) {
    console.log(id);
    isEdit = true;
    var i;
    userDataList.forEach((user, index) => {
        console.log(user.id);
        if (id == user.id) {
            selectedRow = user.id;
            i = index;
        }
    });


    var obj = {
        'fullname': 'fullname',
        'address': 'addr',
        'city': 'city',
        'color': 'color',
        'state': 'state',
        'country': 'country',
        'email': 'email',
        'maritalStatus': 'MaritalStatus',

    }

    for (var key in obj) {
        document.getElementById(obj[key]).value = userDataList[i][key];
        console.log(userDataList[i][key]);
    }

}

async function delRow(id){
    var deleteRowId=id;
    var postReq = await fetch('https://5f7b044f40abc60016472b2c.mockapi.io/formUsers/' + deleteRowId, {
        method: "DELETE",
    })
    getUsers();
}


async function addData() {
    let check = document.querySelectorAll('input[type="checkbox"]:checked');
    let foods = [];
    for (var i = 0; i < check.length; i++) {
        foods.push(check[i].value);
    }
    var data = {
        fullname: document.getElementById('fullname').value,
        address: document.getElementById('addr').value,
        city: document.getElementById('city').value,
        color: document.getElementById('color').value,
        state: document.getElementById('state').value,
        country: document.getElementById('country').value,
        email: document.getElementById('email').value,
        food: foods.join(),
        gender: document.querySelector('input[type="radio"]:checked').value,
        maritalStatus: document.getElementById('MaritalStatus').value,
    }

    if (isEdit) {
        var postReq = await fetch('https://5f7b044f40abc60016472b2c.mockapi.io/formUsers/' + selectedRow, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

    } else {
        var postReq = await fetch('https://5f7b044f40abc60016472b2c.mockapi.io/formUsers', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    var postData = await postReq.json();
    console.log('postDATA=', postData);
    isEdit = false;
    getUsers();

}

getUsers();

























































































































































// function getDetails() {
//     if (validationForm()) {

//         let nameVal = document.getElementById('firstname').value;
//         let lastnameVal = document.getElementById('lastname').value;
//         let addr = document.getElementById('address').value;
//         let pin = document.getElementById('pin').value;
//         let gender = document.querySelector('input[type="radio"]:checked').value;
//         let check = document.querySelectorAll('input[type="checkbox"]:checked');
//         let foods = [];
//         for (var i = 0; i < check.length; i++) {
//             foods.push(check[i].value);
//         }
//         let state = document.getElementById('state').value;
//         let country = document.getElementById('country').value;
//         var table = document.createElement('table');
//         table.setAttribute('border', '1');
//         var heading = ['FirstName', 'LastName', 'Address', 'Pincode', 'Gender', 'Foods', 'State', 'Country'];
//         var tabledata = [nameVal, lastnameVal, addr, pin, gender, foods.join(), state, country];
//         for (var i = 0; i < 8; i++) {
//             var tr = document.createElement('tr');
//             var th = document.createElement('th');
//             th.innerHTML = heading[i];
//             var td = document.createElement('td');
//             td.innerHTML = tabledata[i];

//             table.append(tr);
//             tr.append(th, td);

//         }
//         document.body.append(table);
//     }
// }

// function validationForm() {

//     if (document.myForm.Frstname.value == "") {
//         alert("Please provide your first name!");
//         document.myForm.Frstname.focus();
//         return false;
//     }

//     if (document.myForm.name.value == "") {
//         alert("Please provide your address!");
//         document.myForm.name.focus();
//         return false;
//     }

//     if (document.myForm.Address.value == "") {
//         alert("Please provide your address 2!");
//         document.myForm.Address.focus();
//         return false;
//     }

//     if (document.myForm.pincode.value == "" || document.myForm.pincode.value.length !== 6) {
//         alert("Please provide 6-digit pincode!");
//         document.myForm.pincode.focus();
//         return false;
//     }

//     var radios = document.getElementsByName("gender");
//     var formValid = false;

//     var i = 0;
//     while (!formValid && i < radios.length) {
//         if (radios[i].checked) formValid = true;
//         i++;
//     }

//     if (!formValid) {
//         alert("Must select gender!");
//         return formValid;
//     };

//     var check = document.querySelectorAll('input[type="checkbox"]:checked');
//     if (check.length < 2)
//         alert('Please select atleast 2 foods');

//     if (document.myForm.State.value == "") {
//         alert("Please provide your State!");
//         document.myForm.State.focus();
//         return false;
//     }

//     if (document.myForm.countryRegion.value == "Select-Country") {
//         alert("Please select your country!");
//         document.myForm.countryRegion.focus();
//         return false;
//     }
//     var stateValues = ['Select-State', 'AndhraPradesh', 'Assam', 'ArunachalPradesh', 'Bihar', 
// 'Goa', 'Gujarat', 'JammuAndKashmir', 'Jharkhand', 'WestBengal', 'Karnataka', 'Kerala','MadhyaPradesh',
//  'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland','Orissa', 'Punjab', 'Rajasthan', 'Sikkim', 
//  'TamilNadu', 'Tripura', 'Uttaranchal', 'UttarPradesh', 'Haryana', 'HimachalPradesh','Chhattisgarh',

//  'Balochistan', 'Khyber Pakhtunkhwa', 'PunjabPakisthan', 'Sindh',

//  'NewSouthWales', 'Queensland', 'NorthernTerritory', 'WesternAustralia', 'SouthAustralia', 'Victoria', 
//  'theAustralianCapitalTerritory', 'Tasmania'
// ];


//     return true;
// }





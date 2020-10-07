// create
//read
//update
//delete

async function getUsers() {
    var userReq = await fetch('https://5f7b044f40abc60016472b2c.mockapi.io/users');
    var userData = await userReq.json();
    console.log(userData);
    fillData(userData);
}

getUsers();

function fillData(userData) {
    userData.forEach(ele => {
        var tr = document.createElement('tr');

        for(var i=0;i<10;i++){
            var td[0] = document.createElement('td');
            tdName.innerHTML = ele.name;
        }
        
    }


}

// [
//     {
//       "fname": "divya",
//       "lname": "m",
//       "address": "strretno123",
//       "gender": "female",
//       "country": "India",
//       "state": "andhra",
//       "city": "Tirupati",
//       "email": "d@gmail.com",
//       "food": "idli",
//       "color": "blue",
//       "maritalStatus": "married"
//     }
//   ]

























































































































































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





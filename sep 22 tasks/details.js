function getDetails() {
    if (validationForm()) {

        let nameVal = document.getElementById('fullname').value;
        let emailVal = document.getElementById('email').value;

        //let genderArr = [];
        let dob = document.getElementById('dob').value;

        // genderArr = document.getElementsByName('gender');
        // for (i = 0; i < genderArr.length; i++) {
        //     if (genderArr[i].checked) {
        //        var gender = genderArr[i].labels[i].innerText;
        //     }
        // }
        document.getElementById('comment').style.display = 'block';
        document.getElementById('comment').innerHTML = 
        'FullName:   '+nameVal+'<br>'+
        'EmailId:   '+emailVal+'<br>'+
        'date of birth:   '+dob;
    }
}

function validationForm() {

    if (document.myForm.fullname.value == "") {
        alert("Please provide your name!");
        document.myForm.fullname.focus();
        return false;
    }

    if (document.myForm.Email.value == "") {
        alert("Please provide your Email!");
        document.myForm.Email.focus();
        return false;
    }

    if (document.myForm.passwrd.value == "") {
        alert("Please provide your password!");
        document.myForm.passwrd.focus();
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

    if (document.myForm.dateofbirth.value == "") {
        alert("Please provide your date of birth!");
        document.myForm.dateofbirth.focus();
        return false;
    }


    return true;
}
function myfun() {
  if (validationForm()) {
    alert('Thanks for submitting the form succesfully.');
  }
}

function validationForm() {

  if (document.myForm.fname.value == "") {
    alert("Please provide your name!");
    document.myForm.fname.focus();
    return false;
  }

  if (document.myForm.addr1.value == "") {
    alert("Please provide your Address!");
    document.myForm.addr1.focus();
    return false;
  }

  if (document.myForm.mycity.value == "") {
    alert("Please provide your City!");
    document.myForm.mycity.focus();
    return false;
  }

  if (document.myForm.stateregion.value == "") {
    alert("Please provide your City!");
    document.myForm.stateregion.focus();
    return false;
  }

  if (document.myForm.postalcode.value == "" || isNaN(document.myForm.postalcode.value) ||
    document.myForm.postalcode.value.length !== 5) {

    alert("Please provide a zip in the format #####.");
    document.myForm.postalcode.focus();
    return false;
  }


  if (document.myForm.country.value == "0") {
    alert("Please select your country!");
    return false;
  }

  if (document.myForm.mymobile.value.length !== 10) {
    alert("Please submit your 10 digit mobile number");
    return false;
  }


  if (document.myForm.myemail.value == "") {
    alert("Please provide your Email!");
    document.myForm.myemail.focus();
    return false;
  }

  return true;
}


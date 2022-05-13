var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

var mail = document.getElementById("mail");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");

var alphaNumericFormat = /([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/;
var alphaFormat = /^[a-zA-Z ]+$/;


var pageOneCheck1 = 0;
var pageOneCheck2 = 0;
var pageOneCheck3 = 0;
var pageOneCheck4 = 0;
var pageOneCheck5 = 0;


function validateEmail() {

    if (!mail.value.length) {
        document.getElementById("mailerr").innerHTML = "This field is neccessary";
        document.getElementById("mail").style.border = "2px solid red";
        pageOneCheck1 = 0;
        return false;
    }
    else if (alphaNumericFormat.test(mail.value) == false) {
        document.getElementById("mailerr").innerHTML = "sword";
        var fname = document.getElementById("fname");
        var lname = document.getElementById("lname");
        
        var alphaNumericFormat = /([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/;
        var alphaFormat = /^[a-zA-Z ]+$/;
        
        
        var pageOneCheck1 = 0;
        var pageOneCheck2 = 0;
        var pageOneCheck3 = 0;
        var pageOneCheck4 = 0;

    }

}

function validateFname() {

    if (!fname.value.length) {
        document.getElementById("fname").style.border = "2px solid red";
        document.getElementById("fnameerr").innerHTML = "This field is neccessary";
        pageOneCheck2 = 0;

        return false;
    }
    else if (alphaFormat.test(fname.value) == false) {
        document.getElementById("fname").style.border = "2px solid red";
        document.getElementById("fnameerr").innerHTML = "First Name must be only alphabets ";
        pageOneCheck2 = 0;
        return false;
    }
    else if (fname.value.length < 2) {
        document.getElementById("fname").style.border = "2px solid red";
        document.getElementById("fnameerr").innerHTML = "First Name cannot be too short";
        pageOneCheck2 = 0;

        return false;
    }
    else {
        document.getElementById("fnameerr").innerHTML = " ";
        document.getElementById("fname").style.border = "2px solid green";
        pageOneCheck2 = 1;

    }
}

function validateLname() {

    if (lname.value.length == 0) {
        document.getElementById("lnameerr").innerHTML = " ";
        document.getElementById("lname").style.border = "2px solid green";
        pageOneCheck3 = 1;


    }
    else if (alphaFormat.test(lname.value) == false) {
        document.getElementById("lnameerr").innerHTML = "Last Name must be only alphabets ";
        document.getElementById("lname").style.border = "2px solid red";
        pageOneCheck3 = 0;

        return false;
    }
    else {
        document.getElementById("lnameerr").innerHTML = " ";
        document.getElementById("lname").style.border = "2px solid green";
        pageOneCheck3 = 1;

    }
}

function validatePsw() {
    if (!password.value.length) {
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("pswerr").innerHTML = "This field is neccessary";
        pageOneCheck4 = 0;

        return false;
    }
    else {
        document.getElementById("pswerr").innerHTML = " ";
        document.getElementById("password").style.border = "2px solid green";
        pageOneCheck4 = 1;

    }
}

function validateCpsw() {
    if (!confirmPassword.value.length) {
        document.getElementById("confirmPassword").style.border = "2px solid red";
        document.getElementById("cpswerr").innerHTML = "Please Re-Enter the password";
        pageOneCheck5 = 0;

        return false;
    }
    else if (password.value != confirmPassword.value) {
        document.getElementById("cpswerr").innerHTML = "Passwords did not match";
        document.getElementById("confirmPassword").style.border = "2px solid red";
        pageOneCheck5 = 0;

        return false;

    }
    else {
        document.getElementById("cpswerr").innerHTML = " ";
        document.getElementById("confirmPassword").style.border = "2px solid green";
        pageOneCheck5 = 1;

    }
}

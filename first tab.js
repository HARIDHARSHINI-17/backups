var currentTab = 0; // first tab
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";//previous and next button
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n)//display correct step indicator
}//... and adds the "active" class to the current step:

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";// Hide the current tab
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    //end of form then it gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i,z,a,b,c, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
 z = document.getElementById("firstname");
 a = document.getElementById("email");
 b = document.getElementById("password");
 c = document.getElementById("confirm-password");//... and adds the "active" class to the current step:
	if(z.value.trim()=='')
    {
	    setError(z,"Username should contain only characters,numbers,underscore,dot and hypen")
	}
	else if(z.value.trim().length<5||z.value.trim().length>15)
	{
		setError(z,'Username must be 5 to 18 characters long.');
	}
	else
	{
		setSuccess(z,'Valid username');
	}
  if(a.value.trim()=='')
	{
		setError(a,'Email cannot be blank');
	}
	else if(!isEmail(a.value))
	{
		setError(a,"Not a valid Email ID");
	}
	else
	{
		setSuccess(a,'Valid email');
	}
	if(b.value.trim()=='')
    {
    	setError(b,'Password cannot be blank');
    }
    else if(!isPassword(b.value))
    {
    	setError(b,'Not a valid Password');
    }
    else
    {
    	setSuccess(b,"Valid password");
    }
}
function setError(element,errorMessage)
{
	const parent=element.parentElement;
	parent.classList.add('error');
	if(parent.classList.contains('success'))
	{
		parent.classList.remove('success');
	}
	const message=parent.querySelector('p3');
	message.textContent=errorMessage;
}
function setSuccess(element,successMessage)
{
	const parent=element.parentElement;
	parent.classList.add('success');
	if(parent.classList.contains('error'))
	{
		parent.classList.remove('error');
	}
	const message=parent.querySelector('p3');
	message.textContent=successMessage;
}
function isUserName(z)
{
	const zPattern = /^[a-zA-Z0-9\._-]+$/;
	return zPattern.test(z);
}
function isEmail(a)
{
	const aPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return aPattern.test(a);
}
function isPassword(b)
{
	const bPattern =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return bPattern.test(b);
}
function isConfirmPassword(c)
{
	const cPattern =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return cPattern.test(c);
}
function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }//... and adds the "active" class to the current step:
  x[n].className += " active";
 }
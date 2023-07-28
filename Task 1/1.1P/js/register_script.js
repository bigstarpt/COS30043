function validate() {
	var username = document.getElementById("username").value;
	var Email1 = document.getElementById("Email1").value;
	var CEmail= document.getElementById("CEmail").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var dayOB = document.getElementById("dayOB").value;
	var monthOB = document.getElementById("monthOB").value;
	var yearOB = document.getElementById("yearOB").value;
	var textarea = document.getElementById("textarea").value;

	var genderM = document.getElementById("genderM").checked;
	var genderF = document.getElementById("genderF").checked;
	var yespizza = document.getElementById("yespizza").checked;
	var nopizza = document.getElementById("nopizza").checked;

	/*these vars are used to validate the checkbox list in favpizza div*/
	var margherita = document.getElementById("margherita").checked;
	var bbq = document.getElementById("bbq").checked;
	var hawaiian = document.getElementById("hawaiian").checked;
	var neapolitan = document.getElementById("neapolitan").checked;
	var pepperoni = document.getElementById("pepperoni").checked;

	var errMsg = "";					/* stores the error message */
	var result = true;					/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;		/* regular expression for letters and spaces only */

	/*the following if functions checks if all fields are filled in*/
	if (username == "") {
		errMsg += "Username needs to be filled in.\n";
	}
	if (Email1 == "") {
		errMsg += "Email needs to be filled in.\n";
	}
	if (CEmail == "") {
		errMsg += "Confirm email needs to be filled in.\n";
	}
	if (pwd1 == "") {
		errMsg += "Password needs to be filled in.\n";
	}
	if (pwd2 == "") {
		errMsg += "Retype password needs to be filled in.\n";
	}
	if (dayOB == "0") {
		errMsg += "Please select day of birth.\n";
	}
	if (monthOB == "0") {
		errMsg += "Please select month of birth.\n";
	}
	if (yearOB == "0") {
		errMsg += "Please select year of birth.\n";
	}


	/*this if function validates if either one is ticked*/
	if ((genderM == "") && (genderF == "")) {
		errMsg += "Gender must be selected.\n";
	}
	/*this if function validates if either one is ticked*/
	if ((yespizza =="") && (nopizza== "")) {
		errMsg += "You must choose between yes or no.\n";
	}


	/*if yes pizza is ticked show error msg if text area is not answered*/
	if ((yespizza == true) && (textarea == "Write your answer here...")) {
		errMsg += "You must write your answer.\n";
	}

	if (yespizza == true) { //if yes is ticked, one more should be ticked on the checkbox list. If not, send an error message//
		if (margherita == false && bbq == false && hawaiian == false && neapolitan == false && pepperoni == false) {
			errMsg += "You must at least tick one or more from the pizza list you love.\n";
		}
	}

	/*the following if functions checks if all fields are valid and correct*/
	/*this checks if email and confirm email is the same*/
	if (Email1 != CEmail) {
		errMsg += "Email and re-type email does not match.\n";
	}

	/*this checks if password and re-type password is the same*/
	if (pwd1 != pwd2) {
		errMsg += "Password and re-type password does not match.\n";
	}

	/*this checks in password and re-type password are both 8 characters long*/
	if (((pwd1) .length <8) && ((pwd2) .length <8)) {
		errMsg += "Password must be at least 8 characters long.\n";
	}

	/*this if function shows error message if there's an error or missing field in form*/
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}

/*showdiv, hidediv, init function toggles the favpizza id when yes pizza is ticked*/
function showdiv() { /*showdiv functions is applied when yes is clicked on "Would you like to tell us..."*/
	var favpizza = document.getElementById("favpizza");
	favpizza.style.display = 'inline';
}

function hidediv() { /*hidediv function is applied when no is clicked on "Would you like to tell us.."*/
	var favpizza = document.getElementById("favpizza");
	favpizza.style.display = "none";
}


/* link HTML elements to corresponding event function */
function init () {

/* link the variables to the HTML elements */
  var registerF = document.getElementById("registerF");
	/* assigns functions to corresponding events */
  registerF.onsubmit = validate;

 /*links the showdiv and hidediv functions*/
	var yespizza = document.getElementById("yespizza");
	var nopizza = document.getElementById("nopizza");
	/*during the onclick event, showdiv or hidediv function apply*/
	yespizza.onclick = showdiv;
	nopizza.onclick = hidediv;

	var favpizza = document.getElementById("favpizza");
	favpizza.style.display = "none";
}

/* execute the initialisation function once the window*/
window.onload = init;


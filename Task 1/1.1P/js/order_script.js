function validate(){
	/*the following are set up variables for function validation*/
	/*variables for radio inputs on order.html form*/
	var pickup = document.getElementById("PUM").checked;
	var delivery = document.getElementById("DM").checked;
	var payon = document.getElementById("POPU").checked;
	var online = document.getElementById("OLN").checked;
	var visa = document.getElementById("visa").checked;
	var master = document.getElementById("master").checked;
	var american = document.getElementById("american").checked;

	/*variables for delivery address */
	var dlvadd = document.getElementById("dlvadd").value;
	var suburb1 = document.getElementById("suburb1").value;
	var state1= document.getElementById("state1").value;
	var zipc1 = document.getElementById("zipc1").value;

	/*variables for billing address*/
	var blngadd = document.getElementById("blng").value;
	var suburb2 = document.getElementById("suburb2").value;
	var state2 = document.getElementById("state2").value;
	var zipc2 = document.getElementById("zipc2").value;

	var phone = document.getElementById("phno").value;
	var email = document.getElementById("Email2").value;

	/*variables for credit card information*/	
	var cardname = document.getElementById("cname").value;
	var cnmbr = document.getElementById("cnmbr").value;
	var monthEXP = document.getElementById("MNTEXP").value;
	var yearEXP = document.getElementById("YEXP").value;
	var cvv = document.getElementById("cvv").value;
	
	
	/*variables for setting error messages and results*/
	var errMsg = "";
	var result = true;
	var pattern = /^[0-9A-Za-z]+$/;

	/*the following if statements corresponds to the variables stated above*/

	/*the following if functions  applies neither pickup or delivery is checked*/
	if ((pickup == "") && (delivery == "")) {
		errMsg += "Please choose receiving method.\n"; //if neither is checked, error message will be received//
	}

	//If pick up is ticked, the error message if neither pay on pick up nor online is ticked will pop up when submitted//
	//this is so that error message will only be received if pickup is ticked//
	if(pickup == true){
		if ((payon == "") && (online == "")){
			errMsg += "Please choose payment method.\n";
		}
	}
	//if delivery is ticked an error message will pop up if none of the fields from the delivery address were filled//
	if(delivery == true){
		if (dlvadd == "") {
			errMsg += "Please fill in your home address.\n";
		}
		if (suburb1 == "") {
			errMsg += "Please fill in your home address suburb.\n";
		}
		if (state1 == "") {
			errMsg += "Please fill in your home address state.\n";
		}
		if (zipc1 == "") {
			errMsg += "Please fill in your home address zip code.\n";
		}
	}
	//this error message will show for either pickup or delivery option in none of the fields in the billing address were field in, an 
	if (blng == "") {
		errMsg += "Please fill in your billing address.\n";
	}
	if (suburb2 == "") {
		errMsg += "Please fill in your billing address suburb.\n";
	}
	if (state2 == "") {
		errMsg += "Please fill in your billing address state.\n";
	}
	if (zipc2 == "") {
		errMsg += "Please fill in your billing address zip code.\n";
	}
	//error messages will show if phone number is not filld in// 
	if (phone == "") {
		errMsg += "Please fill in your phone number.\n";
	}
	//error message will show if email for receipt is not filled in//
	if (email == "") {
		errMsg += "Please fill in Email for receipt.\n";
	}
	//if online payment is selected or if in delivery method, an error message will show up if none of the fields for credit card information are not filled in//
	if(online == true) {
		if (cardname == "") {
			errMsg += "Please fill in your card name.\n";
		}
		if (cnmbr == "") {
			errMsg += "Please fill in your card number.\n";
		}
		if (monthEXP== "0") {
			errMsg += "Please select your credit card's month expiry.\n";
		}
		if (yearEXP == "0") {
			errMsg += "Please select your credit card's year of expiry.\n";
		}
		if (cvv == "") {
			errMsg += "Please fill in your CVV.\n";
		}

		//if  cvv or pin number is not equal to 3, error message will show up//
		if ((cvv.length !=3) || (isNaN(cvv))) {
		errMsg += "CVV must be 3 digit long .\n";
		}
		//if none of the credit card type where chosen an error message will show up//
		if ((visa == "") && (master == "") && (american == "")) {
		errMsg += "Please choose credit card type.\n";
		}
	}
	//this check if visa and master card's credit card number lenght is equal to 16,
	 //if not, error message will show up//
	if(visa == true || master == true) {
		if (cnmbr.length != 16) {
			errMsg += "Card number must be 16 digits long.\n";
		}
	} else if (american == true) { //this check if american express card's credit card number lenght is equal to 15, 
		//if not, error message will show up//
		if (cnmbr.length != 15) {
			errMsg += "Card number must be 15 digits long.\n";
		}
	}
	//if both zip codes are not equal to 4 digits long, error message will show up
	if((zipc1.length != 4) && (zipc2.length != 4)){
		errMsg += "Zip code must be 4 digit long.\n";
	}
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}
//This is to autofill billing address, if 'same as billing address is ticked'//
//this copies the values in delivery address fields// 
function FillBillingAdd(){
	var SameAsDeliveryAdd = document.getElementById("SameAsDeliveryAdd");
	var dlvadd = document.getElementById("dlvadd");
	var suburb1 = document.getElementById("suburb1");
	var state1= document.getElementById("state1");
	var zipc1 = document.getElementById("zipc1");
	
	/*variables for billing address*/
	var blngadd = document.getElementById("blng");
	var suburb2 = document.getElementById("suburb2");
	var state2 = document.getElementById("state2");
	var zipc2 = document.getElementById("zipc2");
	
	if (SameAsDeliveryAdd.checked){ //if same as delivery address is ticked before filling in delivery address, error message will show up//
		if (dlvadd.value == "" && suburb1.value == "" && state1.value == "" && zipc1.value == "") { 
			alert("Please fill in delivery address first.");
			SameAsDeliveryAdd.checked = false; //after error message, the checkbox will be unchecked//
		} else{
			blngadd.value = dlvadd.value;
			suburb2.value = suburb1.value;
			state2.value = state1.value;
			zipc2.value = zipc1.value;
		}

	} 
	
}
/* this functions to either display or show inline divs in which will be linked in the init function*/
/*this will link pickup variable from the Pick up method option with id="PUM" method during onclick event*/
function pickupdivs() {
	var deliveryAddress = document.getElementById("deliveryA");
	deliveryAddress.style.display = "none";

	var payment = document.getElementById("payment");
	payment.style.display = "inline";

	var same= document.getElementById("same");
	same.style.display = "none";
}

/*this will link deliver variable in the init function (if delivery method option with id="PUM" is selected during the onclick event*/
function deliverydivs() {
	var deliveryAddress = document.getElementById("deliveryA");
	deliveryAddress.style.display = "inline";

	var payment = document.getElementById("payment");
	payment.style.display = "none";

	var onlineM = document.getElementById("onlineM");
	onlineM.style.display = "inline";

	var same = document.getElementById("same");
	same.style.display = "inline";
}

/*this function is to hide and/or show online payment option*/

/*if pay on pick up is selected from the payment method, 
online credit card information  will be hidden*/
function HideOnlineMtd(){
	var onlineM = document.getElementById("onlineM");
	onlineM.style.display = "none";
}
/*if online is selected on payment method, online method/ online credit card information will be shown*/
function ShowOnlineMtd() {
	var onlineM = document.getElementById("onlineM");
	onlineM.style.display = "inline";
}


/* link HTML elements to corresponding event function */
function init(){
	/*this link order.html form to corresponding function*/
	var order = document.getElementById("order");
	order.onsubmit = validate;

	/*variable for Pick up method or delivery method option using their IDs*/
	var pickup = document.getElementById("PUM");
	var delivery = document.getElementById("DM");
	/*during the onclick event, pickupdivs or deliverydivs function apply*/
	pickup.onclick = pickupdivs;
	delivery.onclick = deliverydivs;

	/*this var removes delivery address information on initial load of page because pick up method is the chosen default*/
	var deliveryAddress = document.getElementById("deliveryA");
	deliveryAddress.style.display = "none";
	
	/*this var removes 'Same as delivery address' question on the initial load of page due to pick up method being the default selected option*/
	var same = document.getElementById("same");
	same.style.display = "none";

	/*links the HideOnlineMtd and ShowOnlineMtd*/
	var payonPU = document.getElementById("POPU");
	var online = document.getElementById("OLN");

	/*during the onclick event, HideOnlineMtd or ShowOnlineMtd function apply*/
	payonPU.onclick = HideOnlineMtd;
	online.onclick = ShowOnlineMtd;
	

}
/* execute the initialisation function once the window*/
 window.onload = init;
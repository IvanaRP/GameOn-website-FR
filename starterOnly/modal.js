function editNav() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }
  
  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const formData = document.querySelectorAll(".formData");
  


  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // launch modal form
  function launchModal() {
	modalbg.style.display = "block";
  }

	// #1 fermer la modale - Ajouter la fonctionnalité au bouton (x)
  document.getElementById("closeform").addEventListener("click",function(){
	modalbg.style.display = "none";
  });

	//#2 Implémenter entrées du formulaire
	//  #3 Ajouter validation ou messages d'erreur

//Get element by ID add listener 
document.getElementById("submitForm").addEventListener ("submit" , function (e) {

	//add variables from id
	let first = document.getElementById("first")
	let last = document.getElementById("last")
	let email =document.getElementById("email")
	let checkbox = document.getElementById("checkbox1")
	let mailformat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
	let date = document.getElementById("birthdate")
	let numberOfGames = document.getElementById("quantity")
	let location1 = document.getElementById("location1")
	let location2 = document.getElementById("location2")
	let location3 = document.getElementById("location3")
	let location4 = document.getElementById("location4")
	let location5 = document.getElementById("location5")
	let location6 = document.getElementById("location6")

	let firstError = document.getElementById("first-error")
	let lastError = document.getElementById("last-error")
	let emailError = document.getElementById("email-error")
	let birthdateError = document.getElementById("birthdate-error")
	let quantityError = document.getElementById("quantity-error")
	let locationError = document.getElementById("location-error")
	let checkboxError = document.getElementById("checkbox-error")


	let formFirst = document.getElementById("formFirst");
	let formLast = document.getElementById("formLast");
	let formEmail = document.getElementById("formEmail");
	let formBirthdate = document.getElementById("formBirthdate");
	let formQuantity = document.getElementById("formQuantity");
	let formLocation = document.getElementById("formLocation");
	let formCheckbox = document.getElementById("formCheckbox");

	let messageSubmit = document.getElementById("messageSubmit");

	let btnCLoseForm = document.getElementById("buttonCloseForm");

	let buttonSubmit = document.getElementById("buttonSubmit");


	
	/*conditin IF ELSE for FIRST name input*/
	// first name should not be EMPTY , LESS THEN 2 CHARACTERS or an SPACE character
	
	if (first.value == "" || first.value.length < 2) {
		e.preventDefault();//stop form from submitting
		firstError.style.display = "inline-block"
		return false;

	} else  if (/\s/.test(first.value)){ //stop form from submitting if there is space 
		e.preventDefault();//stop form from submitting
		firstError.style.display = "inline-block"
		return false;
	}
	else {
		firstError.style.display = "none"
	}
	
	/*conditin IF ELSE for LAST name input*/
	if (last.value == "" || last.value.length < 2) {
		e.preventDefault();//stop form from submitting
		lastError.style.display = "inline-block"
		return false;

	} else  if (/\s/.test(last.value)){ //stop form from submitting if there is space 
		e.preventDefault();//stop form from submitting
		lastError.style.display = "inline-block"
		return false;
	}
	 else {
		lastError.style.display = "none"
	}


	
	/*conditin IF ELSE for EMAIL input*/
	if (!email.value.match(mailformat)){
		e.preventDefault();//stop form from submitting
		emailError.style.display = "inline-block"
		return false;
	} else {
		emailError.style.display = "none"
	}

	/*conditin IF ELSE for DATE input*/
	if (date.value == "") {
		e.preventDefault();//stop form from submitting
		birthdateError.style.display = "inline-block"
		return false;
	}   else {
		birthdateError.style.display = "none"
	}


	/*conditin IF ELSE for 	QUANTITY input if its empty or if its not a number = send error message*/
	if (numberOfGames.value ==  "" || NaN ) {
		e.preventDefault();//stop form from submitting
		quantityError.style.display = "inline-block"
		return false;
	}  else {
		quantityError.style.display = "none"
	}

	/*conditin IF ELSE for LOCATION input - if one is cheched than ok*/
	if (location1.checked || location2.checked || location3.checked || location4.checked|| location5.checked || location6.checked ) {
		locationError.style.display = "none"
	}  else {
		e.preventDefault();//stop form from submitting
		locationError.style.display = "inline-block";
		return false;
	}


    /* #4 Ajouter confirmation quand envoie réussi*/
	// Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
	if (checkbox.checked) {
		e.preventDefault();//stop form from submitting
		// alert("Merci ! Votre réservation a été reçue.")
	
		formFirst.style.display = "none";
		formLast.style.display = "none";
		formEmail.style.display = "none";
		formBirthdate.style.display = "none";
		formQuantity.style.display = "none";
		formLocation.style.display = "none";
		formCheckbox.style.display = "none";
		messageSubmit.style.display = "flex";

		buttonSubmit.style.display = "none";
		btnCLoseForm.style.display = "flex";

		checkboxError.style.display = "none"


			// #1 fermer la modale - Ajouter la fonctionnalité au bouton (x)
			btnCLoseForm.addEventListener("click",function(){
				modalbg.style.display = "none";
			  });

		return true;
	}   else {
		e.preventDefault();//stop form from submitting
		checkboxError.style.display = "inline-block";
		return false;
	}




});


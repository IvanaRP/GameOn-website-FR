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
	let error1 = document.getElementById("error1")
	let error2 = document.getElementById("error2")
	let error3 = document.getElementById("error3")
	let error4 = document.getElementById("error4")
	let error5 = document.getElementById("error5")
	let error6 = document.getElementById("error6")
	let error7 = document.getElementById("error7")

	// Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
	/*conditin IF ELSE for FIRST name input*/
	if (first.value == "" || first.value.lenght < 2) {
		e.preventDefault();//stop form from submitting
		error1.style.display = "inline-block"
		return false;
	} else {
		error1.style.display = "none"
	}


	/*conditin IF ELSE for LAST name input*/
	if (last.value == "" || last.value.lenght < 2) {
		e.preventDefault();//stop form from submitting
		error2.style.display = "inline-block"
		return false;
	}  else {
		error2.style.display = "none"
	}
	
	
	/*conditin IF ELSE for EMAIL input*/
	if (!email.value.match(mailformat)){
		e.preventDefault();//stop form from submitting
		error3.style.display = "inline-block"
		return false;
	} else {
		error3.style.display = "none"
	}

	/*conditin IF ELSE for DATE input*/
	if (date.value == "") {
		e.preventDefault();//stop form from submitting
		error4.style.display = "inline-block"
		return false;
	}   else {
		error4.style.display = "none"
	}


	/*conditin IF ELSE for 	QUANTITY input if its empty or if its not a number = send error message*/
	if (numberOfGames.value ==  "" || NaN ) {
		e.preventDefault();//stop form from submitting
		error5.style.display = "inline-block"
		return false;
	}  else {
		error5.style.display = "none"
	}

	/*conditin IF ELSE for LOCATION input - if one is cheched than ok*/
	if (location1.checked || location2.checked || location3.checked || location4.checked|| location5.checked || location6.checked ) {
		error6.style.display = "none"
	}  else {
		e.preventDefault();//stop form from submitting
		error6.style.display = "inline-block";
		return false;
	}


    /* #4 Ajouter confirmation quand envoie réussi*/
	// Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
	if (checkbox.checked) {
		alert("Merci ! Votre réservation a été reçue.")
		error7.style.display = "none"
		return true;
	}   else {
		e.preventDefault();//stop form from submitting
		error7.style.display = "inline-block";
		return false;
	}

});


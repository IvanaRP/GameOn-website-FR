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


  
  //#1 Fermer la modale Ajouter la fonctionnalité au bouton (x)
  //	Close modal on x button

/* 
   1.find close X in html
   2. add Id=  closeform
   3. get element by Id
   4. add listener=  so it does something on CLICK
   5. add funcion - in this case CLOSEMODAL
   6.add style.display none on bground
   7.modalbg=bground is already defined in DOM constat element

*/   

document.getElementById("closeform").addEventListener("click",function(closeModal){
	modalbg.style.display = "none";
  });

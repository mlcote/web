
/* ====== Cookie management ====== */ 
const setCookie = (cname, cvalue, exdays) => {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	const expiration = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expiration + ";path=/;SameSite=None;Secure;";
}

const getCookie = (name) => {
	const value = "; " + document.cookie;
	const parts = value.split("; " + name + "=");
	if (parts.length == 2) { return parts.pop().split(";").shift(); } else { return ""; }
}

/* ====== Formulaire - put in seperate js? ====== */ 
const validerFormulaire = () => {

	/* Va chercher le formulaire */
	const form = document.forms["formulaire"];

	/* Mets les réponses en cookie pour garder les infos après avoir soumis le formulaire */
	const joursCookie = 2;
	setCookie("prenom", form.prenom.value, joursCookie);
	setCookie("nom", form.nom.value, joursCookie);
	setCookie("telephone", form.telephone.value, joursCookie);
	setCookie("courriel", form.courriel.value, joursCookie);
	setCookie("street1", form.street1.value, joursCookie);
	setCookie("street2", form.street2.value, joursCookie);
	setCookie("ville", form.ville.value, joursCookie);
	setCookie("province", form.province.value, joursCookie);
	setCookie("codepostal", form.codepostal.value, joursCookie);
	setCookie("instructions", form.instructions.value, joursCookie);

	/* Remets les valeurs - inutile? */
	// prepopuleFormulaire();

	/* ------ Textes ------  */
	/* Prénom */
	let str = form.prenom.value;
	let regex = RegExp('^([A-Za-zÀ-ÖØ-öø-ÿ_\\s\\-]*)$');
	if (str.match(regex) || str === "") {
		document.querySelector("#prenom").classList.remove("invalide");
	} else {
		document.querySelector("#prenom").classList.add("invalide");
	}
	/* Nom */
	str = form.nom.value;
	if (str.match(regex) || str === "") {
		document.querySelector("#nom").classList.remove("invalide");
	} else {
		document.querySelector("#nom").classList.add("invalide");
	}
	/* Rue 1 */
	str = form.street1.value;
	if (str.match(regex) || str === "") {
		document.querySelector("#street1").classList.remove("invalide");
	} else {
		document.querySelector("#street1").classList.add("invalide");
	}
	/* Rue 2 */
	str = form.street2.value;
	if (str.match(regex) || str === "") {
		document.querySelector("#street2").classList.remove("invalide");
	} else {
		document.querySelector("#street2").classList.add("invalide");
	}
	/* Ville */
	str = form.ville.value;
	if (str.match(regex) || str === "") {
		document.querySelector("#ville").classList.remove("invalide");
	} else {
		document.querySelector("#ville").classList.add("invalide");
	}
	/* Instructions */
	str = form.instructions.value;
	if (str.match(regex) || str === "") {
		document.querySelector("#instructions").classList.remove("invalide");
	} else {
		document.querySelector("#instructions").classList.add("invalide");
	}

	/* ------ Spécifiques ------  */
	/* Téléphone */
	str = form.telephone.value;
	regex = RegExp('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$');
	if (str.match(regex) || str === "") {
		document.querySelector("#telephone").classList.remove("invalide");
	} else {
		document.querySelector("#telephone").classList.add("invalide");
	}
	/* Courriel */
	str = form.courriel.value;
	regex = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$');
	if (str.match(regex) || str === "") {
		document.querySelector("#courriel").classList.remove("invalide");
	} else {
		document.querySelector("#courriel").classList.add("invalide");
	}
	/* Code postal canadien */
	str = form.codepostal.value;
	regex = RegExp('[ABCEGHJ-NPRSTVXYabceghj-nprstv-z][0-9][ABCEGHJ-NPRSTV-Zabceghj-nprstv-z] [0-9][ABCEGHJ-NPRSTV-Zabceghj-nprstv-z][0-9]');
	if (str.match(regex) || str === "") {
		document.querySelector("#codepostal").classList.remove("invalide");
	} else {
		document.querySelector("#codepostal").classList.add("invalide");
	}

	// validerChamp(str, regex, inputId);

}

/* Doesn't seem to work - 405 not allowed */
// const validerChamp = (str = "", regex, inputId) => {
// 	if (str.match(regex) || str === "") {
// 		document.querySelector(inputId).classList.remove("invalide");
// 	} else {
// 		document.querySelector(inputId).classList.add("invalide");
// 	}
// }

/* Remets les valeurs dans le formulaire \ partir des cookies */
const prepopuleFormulaire = () => {
	const formArray = ["prenom", "nom", "telephone", "courriel", "street1", "street2", "ville", "codepostal", "instructions"]

	/* Cleaner */
	formArray.forEach(champ => {
		document.querySelector(`#${champ}`).value = getCookie(champ);
	})

	/* Works */
	// for (let i = 0; i < formArray.length; i++) {
	// 	document.querySelector(`#${formArray[i]}`).value = getCookie(formArray[i]);
	// }

	/* Province*/
	document.querySelector("#province").value = getCookie("province");
}

prepopuleFormulaire();

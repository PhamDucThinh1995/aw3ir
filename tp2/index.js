function validation() {
    if (document.getElementById("nom").value.length < 5){
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 caracteres";
        document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
    }
    else if (document.getElementById("prénom").value.length < 5) {
        cument.getElementById("error").innerHTML = "Le prenom doit contenir au moins 5 caracteres";
        document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
    }
    else if (document.getElementById("datedenaissance").value.length < 8) {
        document.getElementById("error").innerHTML = "La date doit contenir au moins 8 caracteres";
        document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
    }
    else if (document.getElementById("adresse").value.length < 5) {
        document.getElementById("error").innerHTML = "L'adresse doit contenir au moins 5 caracteres";
        document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
    }
    else if (document.getElementById("email").value.length < 5) {
        document.getElementById("error").innerHTML = "L'email doit contenir au moins 5 caracteres";
        document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
    }
    else if(document.getElementById("email").value.includes("@")==0){
        document.getElementById("error").innerHTML = "L'email ne valide pas";
        document.getElementById("error").style.display = "initial";
		document.getElementById("resultat").style.display = "none";
    }
    else    {
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.getElementById("prénom").value;
        document.getElementById("error").style.display = "none";
		document.getElementById("resultat").style.display = "initial";
    }
}

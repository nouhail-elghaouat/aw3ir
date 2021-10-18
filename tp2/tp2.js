function validation() {

  document.getElementById("Resultat").setAttribute("hidden", 'hiden');
  document.getElementById("error").setAttribute("hidden", 'hiden');

  if (document.getElementById("Nom").value.length < 5) {
      document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 carateres";
      document.getElementById("error").removeAttribute('hidden');
  }
  else if ( document.getElementById("Nom").value.length > 20 ) {
      document.getElementById("error").innerHTML = "Le nom doit contenir au max 20 carateres";
      document.getElementById("error").removeAttribute('hidden');
  }

  else if (document.getElementById("Prenom").value.length < 5) {
      document.getElementById("error").innerHTML = "Le prenom doit contenir au moins 5 carateres";
      document.getElementById("error").removeAttribute('hidden');
  }
  else if ( document.getElementById("Prenom").value.length > 20 ) {
      document.getElementById("error").innerHTML = "Le prenom doit contenir au max 20 carateres";
      document.getElementById("error").removeAttribute('hidden');
  }


  else if (document.getElementById("Adresse").value.length < 5 ) {
      document.getElementById("error").innerHTML = "L'adresse doit contenir au moins 5 carateres";
      document.getElementById("error").removeAttribute('hidden');
  }
  else if ( document.getElementById("Adresse").value.length > 20 ) {
      document.getElementById("error").innerHTML = "L'adresse doit contenir au max 50 carateres";
      document.getElementById("error").removeAttribute('hidden');
  }
 

  else if (document.getElementById("Email").value.length < 5) {
      document.getElementById("error").innerHTML = "Le mail doit contenir au moins 5 carateres";
      document.getElementById("error").removeAttribute('hidden');
  }
  else if(validateEmail(document.getElementById("Email").value) == false){
      document.getElementById("error").innerHTML = "mail non valide";
      document.getElementById("error").removeAttribute('hidden');
  }
  else if ( document.getElementById("Adresse").value.length > 30 ) {
      document.getElementById("error").innerHTML = "L'adresse doit contenir au max 30 carateres";
      document.getElementById("error").removeAttribute('hidden');
  }


  else 
  document.getElementById("Resultat").innerHTML = "Bienvenue au club " + document.getElementById("Nom").value + " " + document.getElementById("Prenom").value;
  document.getElementById("Resultat").removeAttribute('hidden');   
     

  }

  function validateEmail(Email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(Email).toLowerCase());
  }
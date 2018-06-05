function faireChoix() {
  var nb = Number.parseInt(prompt("Veuillez choisir un nombre entre 1, 2 et 3."));

  switch(nb) {
      case 1:
          alert("Merci");
          break;
      case 2:
          alert("Bonjour");
          break;
      case 3:
          alert("Au revoir");
          break;
      default:
          alert("Pardon, que voulez-vous?");
  }
}

for (var i = 0; i < 10; i++) {
  var p = prompt("Ajouter du contenu à votre histoire \n Il vous reste " + (10 - i) + " essaie(s).");
  document.getElementById("p"+ (i+1)).innerHTML = p;
}

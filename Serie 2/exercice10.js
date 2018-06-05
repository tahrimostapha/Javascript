function somme(){
  var sum = 0;
  for(var i = 0; i < 3; i++){
    var nb = parseInt(prompt("Veuillez saisir un nombre à additionner"));
    sum += nb;
  }
  alert("La somme de ces nombres est "+sum);
}

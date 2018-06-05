function calculMoyenne(){
  var sum = 0;
  var cpt = 0;
  var avg;
  var nb = Number.parseInt(prompt("Veuillez saisir un nombre."));
  while(!Number.isInteger(nb)){
    alert("Saisie incorrecte!");
    nb = Number.parseInt(prompt("Veuillez saisir un nombre."));
  }
  while(nb >= 0){
    sum += nb;
    cpt++;
    nb = Number.parseInt(prompt("Veuillez saisir un nombre."));
    while(!Number.isInteger(nb)){
      alert("Saisie incorrecte!");
      nb = Number.parseInt(prompt("Veuillez saisir un nombre."));
    }
  }
  if(sum != 0){
    avg = (sum/cpt);
    alert("La moyenne de ces nombres est "+avg);
  }else{
    alert("La moyenne n'a pas pu se faire!");
  }
}

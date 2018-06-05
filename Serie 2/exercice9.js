function testWhile(){
  var content = prompt("Veuillez saisir une chaîne de caractère contenant la lettre 'p'.");
  while(!content.includes("p")){
    alert("Saisie incorrecte!");
    content = prompt("Veuillez saisir une chaîne de caractère contenant la lettre 'p'.");
  }
  alert("Merci :D");
}

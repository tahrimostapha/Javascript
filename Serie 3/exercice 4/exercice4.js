var input_nom = document.getElementById("nom");
var input_prenom = document.getElementById("prenom");
var input_ville = document.getElementById("ville");
document.getElementsByName("button")[0].addEventListener("click", clear);

function clear(){
  input_nom.value = "";
  input_prenom.value = "";
  input_ville.value = "";
}

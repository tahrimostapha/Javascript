var input = document.getElementById("nom");
input.addEventListener("input", affiche);

function affiche(){
  alert(input.value);
}

let text = document.getElementById("texte");
let green = document.getElementsByClassName("color green")[0];
let red = document.getElementsByClassName("color red")[0];
let blue = document.getElementsByClassName("color blue")[0];

green.addEventListener("click",function(){
  text.style.color = "green";
});
red.addEventListener("click",function(){
  text.style.color = "red";
});
blue.addEventListener("click",function(){
  text.style.color = "blue";
});

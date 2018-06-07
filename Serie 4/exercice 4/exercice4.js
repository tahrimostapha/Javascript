let mdp = document.getElementById("motdepasse");
let confirm = document.getElementById("confirmation");
let button = document.getElementsByName("button")[0];
button.addEventListener("click", function(){
  if(mdp.value != confirm.value){
    mdp.style.borderColor = "red";
    confirm.style.borderColor = "red";
  }else{
    mdp.style.borderColor = "green";
    confirm.style.borderColor = "green";
  }
});

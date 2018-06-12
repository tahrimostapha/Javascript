var toGuess;
var min = 20;
var max = 80;
var cpt = 1;
var usedNumber = [];

function random(){
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function Game(){
  toGuess = random();
  let input = Number(prompt("Veuillez introduire une valeur comprise entre "+min+" et "+max+"."));
  while(input != toGuess){
    if(!(Number.isInteger(input)) || !(input >= min && input <= max)){
      alert("Saisie incorrecte. Recommencez!");
      input = Number(prompt("Veuillez introduire une valeur comprise entre "+min+" et "+max+"."));
    }else{
      if(input < toGuess){
        alert("C'est plus!");
      }else {
        alert("C'est moins!");
      }
      cpt++;
      input = Number(prompt("Veuillez introduire une valeur comprise entre "+min+" et "+max+"."));
    }
  }
  alert("C'est juste tu as trouvé en "+cpt+" coups");
}

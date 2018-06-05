function calculIMC(){
  var imc;
  var poids = Number.parseFloat(prompt("Veuillez saisir un poids(en kg)."));
  var taille = Number.parseFloat(prompt("Veuillez saisir une taille(en m)."));
  while(Number.isNaN(poids) || Number.isNaN(taille)){
    alert("Saisie incorrecte!");
    poids = Number.parseInt(prompt("Veuillez saisir un poids(en kg)."));
    taille = Number.parseInt(prompt("Veuillez saisir une taille(en m)."));
  }
  imc = poids/(Math.pow(taille,2));

  if(imc < 16.5){
    alert("dénutrition ou famine");
  }else if(imc >= 16.5 && imc < 18.5){
    alert("maigreur");
  }else if(imc >= 18.5 && imc < 25){
    alert("corpulence normale");
  }else if(imc >= 25 && imc < 30){
    alert("surpoids");
  }else if(imc >= 30 && imc < 35){
    alert("obésité modérée");
  }else if(imc >= 35 && imc < 40){
    alert("obésité sévère");
  }else {
    alert("obésité morbide");
  }
}

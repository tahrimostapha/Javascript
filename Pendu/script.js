var gameOver = false;
var dictionnary = ["Bonjour","BeCode","Mufasa","Lovelace"];
var toGuess;
var proposition = [];
var usedLetter = [];
var cptFailedTry = 0;

init();

// Initialise les tableaux "toGuess" et "proposition"
function init(){
  toGuess = dictionnary[random()].toUpperCase().split("");
  initProposition();
}

// Crée une valeur aléatoire pour la séléction dans le dictionnaire
function random(){
  return Math.floor(Math.random()*Math.floor(dictionnary.length));
}

// Définit le nombre d'éléments vide dans "proposition", selon le mot qui se trouve dans "toGuess".
function initProposition(){
  for(let i = 0; i < toGuess.length; i++){
    proposition.push("");
  }
}

// Fonction principal du jeu.
var Game = function(){
  while (!gameOver) {
    let input = askingPlayer();
    while((!Number.isNaN(Number(input)) || !(input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90)) || (input.length != toGuess.length && input.length != 1)){
      alert("Saisie incorrecte. Recommencez!");
      input = askingPlayer();
    }
    if(input.length == 1){
      fill(input);
      gameOver = isEqual(proposition);
    }else{
      gameOver = isEqual(input.split(""));
    }
  }
  alert("Félicitation! Vous avez finalement trouvé le mot :D ");
};

// Demande une donnée au joueur afin de la stocker.
function askingPlayer(){
  return prompt("Veuillez saisir votre réponse au pendu : \n" +
                  "Lettre(s) déjà découverte : "+actualGuessedLetter()+"\n"+
                  "Lettre(s) déjà utilisée(s) : "+actualUsedLetter()+"\n"+
                  "Tentative(s) ratée(s) : "+cptFailedTry).toUpperCase();
}

// Crée l'affichage pour les lettres trouvées du mot.
function actualGuessedLetter(){
  let result = "";
  for(let i = 0; i < proposition.length; i++){
    if(proposition[i] == ""){
      result += "[_]";
    }else{
      result += "["+proposition[i]+"]";
    }
    if(i < (proposition.length - 1)){
      result += ", ";
    }
  }
  return result;
}

// Crée l'affichage pour les lettres utilisées.
function actualUsedLetter(){
  let result = "";
  for(let i = 0; i < usedLetter.length; i++){
    result += "["+usedLetter[i]+"]";
    if(i < (usedLetter.length - 1)){
      result += ", ";
    }
  }
  return result;
}

// S'occupe de mettre à jour les tableaux et/ou le compteur d'essai.
function fill(letter){
  let found = false;
  if(!exist(letter)){
    for(let i = 0; i < toGuess.length; i++){
      if(toGuess[i] == letter){
        found = true;
        proposition[i] = letter;
      }
    }
    if(!found){
      cptFailedTry++;
    }
    usedLetter.push(letter);
  }else{
    alert("Vous avez déjà utilisé cette lettre!");
  }
}

// Compare deux tableaux sur base de leurs éléments.
function isEqual(array){
  let i = 0;
  while(i < toGuess.length){
    if(toGuess[i] != array[i]){
      return false;
    }
    i++;
  }
  return true;
}

// Vérifie si la lettre a déjà été utilisée.
function exist(letter){
  let i = 0;
  while(i < usedLetter.length){
    if(letter == usedLetter[i]){
      return true;
    }
    i++;
  }
  return false;
}

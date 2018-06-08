/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
  return texte.length;
}
var remplaceECar = function (texte) {
  let i = 0;
  let c = texte.charAt(i);
  // Recherche de l'index ---
  while(c != "e" && c != "E"){
    i++;
    c = texte.charAt(i);
  }
  //---
  return texte.substring(0, i) + " " + texte.substring(i+1);
}
var concatString = function (texte1, texte2) {
  return texte1+texte2;
}
var afficherCar5 = function (texte) {
  return texte.charAt(4);
}
var afficher9Car = function (texte) {
  return texte.substring(0,9);
}
var majusculeString = function (texte) {
  return texte.toUpperCase();
}
var minusculeString = function (texte) {
  return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
  return texte.trim();
}
var IsString = function (texte) {
  return (typeof(texte) == "string");
}

var AfficherExtensionString = function (texte) {
  return texte.split('.').pop();
}
var NombreEspaceString = function (texte) {
  return texte.match((/\s/g)||[]).length;
}
var InverseString = function (texte) {
  if (texte === "") // This is the terminal case that will end the recursion
    return "";

  else
    return InverseString(texte.substr(1)) + texte.charAt(0);
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
  let result = 1;
  for(let i = 0; i < y; i++){
    result *= x;
  }
  return result;
}
var valeurAbsolue = function (nombre) {
  if(nombre < 0){
    nombre*=-1;
  }
  return nombre;
}
var valeurAbsolueArray = function (array) {
  for(let i = 0; i < array.length; i++){
    array[i] = valeurAbsolue(array[i]);
  }
  return array;
}
var sufaceCercle = function (rayon) {
  return Math.ceil(Math.PI*calculPuissance(rayon,2));
}
var hypothenuse = function (ab, ac) {
  return Math.sqrt(calculPuissance(ab,2)+calculPuissance(ac,2))
}
var calculIMC = function (poids, taille) {
  console.log((poids/(Math.pow(taille,2))).toFixed(2));
  return Number.parseFloat((poids/(Math.pow(taille,2))).toFixed(2));
}

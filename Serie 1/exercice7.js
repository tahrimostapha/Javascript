function Magie(){
  var size = Number.parseInt(prompt("Veuillez entrer une pointure."));
  var compute = ((size*2)+5)*50;
  var birthYear = Number.parseInt(prompt("Veuillez entrer une année de naissance."));
  return(compute-birthYear)+1766;
}

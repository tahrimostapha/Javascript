var tab = [-2,1,4];

function additionne(x){
  return x+2;
}

function affiche(){
  alert("L'addition de "+tab[0]+" à 2 vaut "+additionne(tab[0]));
  alert("L'addition de "+tab[tab.length-1]+" à 2 vaut "+additionne(tab[tab.length-1]));
}

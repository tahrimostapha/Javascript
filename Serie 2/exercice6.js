var tab = [-2,1,4];

function additionne(x){
  if(x < 0){
    return "Nombre négatif!!";
  }else{
    return x-2;
  }
}

function affiche(){
  alert("La soustraction de "+tab[0]+" par 2 vaut "+additionne(tab[0]));
  alert("La soustraction de "+tab[tab.length-1]+" par 2 vaut "+additionne(tab[tab.length-1]));
}

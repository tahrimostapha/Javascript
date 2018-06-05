var b = 2;
var a = b++;
affiche(a,b); // 2
a=++b;
affiche(a,b); // 4
a=b--;
affiche(a,b); // 4
a=--b;
affiche(a,b); // 2
a+=b++;
affiche(a,b); // 4
a=1; a+=++b;
affiche(a,b); // 5
a=1; a-=b++;
affiche(a,b); // -3
a=1; a-=++b;
affiche(a,b); // -5
a=1; a+=b--;
affiche(a,b); // 7
a=1; a+=--b;
affiche(a,b); // 5

function affiche(a,b){
  alert("La valeur de a est "+a+ " et la valeur de b est "+b);
}

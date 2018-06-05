function jourDeLaSemaine(){
  for(var i = 0; i < 7; i++){
    switch (((new Date().getDay())+i)%7) {
      case 0:
          alert("Dimanche");
          break;
      case 1:
          alert("Lundi");
          break;
      case 2:
          alert("Mardi");
          break;
      case 3:
          alert("Mercredi");
          break;
      case 4:
          alert("Jeudi");
          break;
      case 5:
          alert("Vendredi");
          break;
      case 6:
          alert("Samedi");
    }
  }
}

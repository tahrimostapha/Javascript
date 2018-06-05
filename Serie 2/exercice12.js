function conversionTemperature(){
  var opt = Number.parseInt(prompt("Menu : \n"+
                                    "0. Fin du programme\n"+
                                    "1. De Celcius vers Fahrenheit\n"+
                                    "2. De Celcius vers Kelvin\n"+
                                    "3. De Fahrenheit ver Celcius\n"+
                                    "4. De Fahrenheit vers Kelvin\n"+
                                    "5. De Kelvin vers Celcius\n"+
                                    "6. De Kelvin vers Fahrenheit\n"));

    switch (opt) {
      case 0: alert("Vous avez choisi de quitter le programme");
        break;
      case 1: deCelciusVersFahrenheit();
        break;
      case 2: deCelciusVersKelvin();
        break;
      case 3: deFahrenheitVersCelcius();
        break;
      case 4: deFahrenheitVersKelvin();
        break;
      case 5: deKelvinVersCelcius();
        break;
      case 6: deKelvinVersFahrenheit();
        break;
      default: alert("Fin du programme pour cause d'une mauvaise option");
    }
}

function deCelciusVersFahrenheit(){
  var tmp = Number.parseInt(prompt("Veuillez saisir la température à convertir."));
  alert("La conversion en degré Fahrenheit donne "+((tmp * (9/5)) + 32)+" °F");
}

function deCelciusVersKelvin(){
  var tmp = Number.parseInt(prompt("Veuillez saisir la température à convertir."));
  alert("La conversion en degré Kelvin donne "+(tmp + 273.15)+" K");
}

function deFahrenheitVersCelcius(){
  var tmp = Number.parseInt(prompt("Veuillez saisir la température à convertir."));
  alert("La conversion en degré Celcius donne "+((tmp - 32) / (9/5))+" °C");
}

function deFahrenheitVersKelvin(){
  var tmp = Number.parseInt(prompt("Veuillez saisir la température à convertir."));
  alert("La conversion en degré Kelvin donne "+(((tmp - 32) * (5/9)) + 273.15)+" K");
}

function deKelvinVersCelcius(){
  var tmp = Number.parseInt(prompt("Veuillez saisir la température à convertir."));
  alert("La conversion en degré Celcius donne "+(tmp - 273.15)+" °C");
}

function deKelvinVersFahrenheit(){
  var tmp = Number.parseInt(prompt("Veuillez saisir la température à convertir."));
  alert("La conversion en degré Fahrenheit donne "+((tmp * (9/5)) - 459.67)+" °F");
}

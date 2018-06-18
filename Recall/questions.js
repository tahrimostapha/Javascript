var selectElementsStartingWithA = function(array) {
  let i = 0;
  while(i < array.length){
      if(array[i].charAt(0) != 'a'){
        array.splice(i,1);
      }else{
        i++;
      }
    }
    return array;
}

var selectElementsStartingWithVowel = function(array) {
  let i = 0;
  while(i < array.length){
    let element = array[i].charAt(0);
    if(element != "a" && element != "e" &&
    element != "i" && element != "o" &&
    element != "u" && element != "y"){
      array.splice(i,1);
    }else{
      i++;
    }
  }
  return array;
}

var removeNullElements = function(array) {
  let i = 0;
  while(i < array.length){
      if(array[i] == null){
        array.splice(i,1);
      }else{
        i++;
      }
    }
    return array;
}

var removeNullAndFalseElements = function(array) {
  let i = 0;
  while(i < array.length){
      if(array[i] == null || array[i] === false){
        array.splice(i,1);
      }else{
        i++;
      }
    }
    return array;
}

var reverseWordsInArray = function(array) {
    for(let i = 0; i < array.length; i++){
      array[i] = array[i].split("").reverse().join("");
    }
    return array;
}

var everyPossiblePair = function(array) {
    let everyPossiblePair = [];
    array.sort();
    for(let i = 0; i < array.length; i++){
      for(let j = i+1; j < array.length; j++){
        everyPossiblePair.push([array[i],array[j]]);
      }
    }
    return everyPossiblePair;
}

var allElementsExceptFirstThree = function(array) {
    return array.splice(3,array.length-3);
}

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
}

var sortByLastLetter = function(array) {
  array.sort(function(a, b) {

    if (a[a.length - 1] > b[b.length - 1])
        return 1;
    else if (a[a.length - 1] < b[b.length - 1])
        return -1;

    return 0;

  });
    return array;
}

var getFirstHalf = function(string) {
    return string.substring(0,3);
}

var makeNegative = function(number) {
    return (number < 0)?number:-number;
}

var numberOfPalindromes = function(array) {
  let cpt = 0;
    for(let i = 0; i < array.length; i++){
      let isPal = true;
      let j = 0;
      let s = array[i];
      let length = s.length;
      while(isPal && j < Math.floor(length/2)){
        if(s.charAt(j) != s.charAt(length - j - 1)){
          isPal = false;
        }else{
          j++;
        }
      }
      if(isPal){
        cpt++;
      }
    }
    return cpt;
}

var shortestWord = function(array) {
    let found = 0;
    for(let i = 1; i < array.length; i++){
      if(array[i].length < array[found].length){
        found = i;
      }
    }
    return array[found];
}

var longestWord = function(array) {
  let found = 0;
  for(let i = 1; i < array.length; i++){
    if(array[i].length > array[found].length){
      found = i;
    }
  }
  return array[found];
}

var sumNumbers = function(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
      sum += array[i];
    }
    return sum;
}

var repeatElements = function(array) {
    let length = array.length;
    for(let i = 0; i < length; i++){
      array.push(array[i]);
    }
    return array;
}

var stringToNumber = function(string) {
    return Number(string);
}

var calculateAverage = function(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return (array.length > 0 && sum > 0)?(sum/array.length):console.error();
}

var getElementsUntilGreaterThanFive = function(array) {
  let i = 0;
  let found = false;
  while(!found && i < array.length){
      if(array[i] > 5){
        found = true;
        array.splice(i,array.length-i);
      }else{
        i++;
      }
    }
    return array;
}

var convertArrayToObject = function(array) {
  let obj = {};
  for(let i = 0; i < array.length; i++){
    obj[array[i]] = array[++i];
  }
    return obj;
}

var getAllLetters = function(array) {
    let letters = [];
    for(let i = 0; i < array.length; i++){
      let word = array[i].split("");
      for(let j = 0; j < word.length; j++){
        if(letters.indexOf(word[j]) == -1){
          letters.push(word[j]);
        }
      }
    }
    letters.sort();
    return letters;
}

var swapKeysAndValues = function(object) {
    let obj = {};
    let keys = Object.keys(object);
    let values = Object.values(object);
    for(let i = 0; i < values.length; i++){
      obj[values[i]] = keys[i];
    }
    return obj;
}

var sumKeysAndValues = function(object) {
  let sum = 0;
  let keys = Object.keys(object);
  let values = Object.values(object);
  for(let i = 0; i < values.length; i++){
    sum += Number(keys[i]) + Number(values[i]);
  }
  return sum;
}

var removeCapitals = function(string) {
    let result = string.split(" ");
    for(let i = 0; i < result.length; i++){
      let separetedLetters = result[i].split("");
      let j = 0;
      while(j < separetedLetters.length){
        if(separetedLetters[j].charCodeAt(0) >= 65 && separetedLetters[j].charCodeAt(0) <= 90){
          separetedLetters.shift();
        }else{
          j++;
        }
      }
      result[i] = separetedLetters.join("");
    }
    return result.join(" ");
}

var roundUp = function(number) {
    return Math.ceil(number);
}

var formatDateNicely = function(date) {
    return date.toLocaleDateString();
}

var getDomainName = function(string) {
    let start = string.indexOf("@") + 1;
    let end = string.indexOf(".com");
    return string.substring(start,end);
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  let splChars = "*|,\":<>[]{}`\';()@&$#%";
  let i = 0;
  let found = false;
  while(!found && i < string.length) {
    if (splChars.indexOf(string.charAt(i)) != -1){
      found = true;
    }else{
      i++;
    }
  }
  return found;
}

var squareRoot = function(number) {
    return Math.sqrt(number);
}

var factorial = function(number) {
    let result = 1;
    for(let i = number; i > 0; i--){
      result *= i;
    }
    return result;
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L"
    ,"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let positions = [];
    for(let i = 0; i < array.length; i++){
      positions.push(alphabet.indexOf(array[i].toUpperCase())+1);
    }
    return positions;
}

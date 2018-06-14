// Exercice : PNJ (Personnage non-joueur)
let Character = {
  name: "Merchander",
  age: 25,
  items_to_give: ["Épée", "Hache", "Sceptre"],
  toString: function() {
    console.log("name : " + name);
    console.log("age : " + age);
    console.log("items_to_give : " + items_to_give)
  },
  giveItem: function() {
    let random = Math.floor(Math.random() * Math.floor(items_to_give.length));
    return items_to_give[random];
  }
};

//Exercice : Shop
let Épée = {
  title: "",
  physic: 0,
  magic: 0,
  minLevel: 0,
  available: true
};
let Hache = {
  title: "",
  physic: 0,
  magic: 0,
  minLevel: 0,
  available: false
};
let Sceptre = {
  title: "",
  physic: 0,
  magic: 0,
  minLevel: 10,
  available: true
};

let items_to_sell = [Épée, Hache, Sceptre];

let listObjects = function(){
  console.log("items_to_sell : "+items_to_sell);
};

let listAvailableObjects = function(){
  let list = "";
  items_to_sell.forEach(function(element){
    if(element.available == true){
      list += element;
    }
  });
  console.log(list);
};

let listTenthLvlObjects = function(){
  let list = "";
  items_to_sell.forEach(function(element){
    if(element.minLevel == 10){
      list += element;
    }
  });
  console.log(list);
};

//Exercice : Personnage
let Weapon = {
  name : "Épée",
  damage : 5
};

let MainCharacter = {
    name : "Mordecai",
    level : 10,
    life  : 100,
    weapon : Weapon,
    attack : function(){
      console.log(name+" attaque avec l'arme "+weapon[name]+" les dégâts sont "+level*weapon[damage]);
    }
};

/*// Ceci est un commentaire
// console.log("toto");

// string

let myVar = "ma variable";
// let permet de modifier la valeur plus tard
const myVar2 = "ma variable 2";
// const ne permet pas de changer la valeur de la variable

myVar = "variable qui change";
// console.log(myVar);

// boolean
let isTrue = true;
let isFalse = false;

// console.log(isTrue);

// number and operator
let number = 1;
let number2 = 2;
// console.log(number, number2);

// template string, littéraux de gabarits et concat

let test = "test" + myVar + "value";
let test2 = `test ${myVar}`;
// littéraux de gabarit avec le $
// console.log(typeof test2);

// Conditions

if (number === 10) {
  console.log("la condition est validée");
} else if (number <= 10) {
  console.log("je passe là");
} else {
  console.log("condition pas valide");
}

// Array

let array = [1, 2, 4];
console.log(array[2]);

// Objet

const objet = {
  age: 36,
  title: "Ma description",
};
console.log(objet.title, objet.age);

// Boucle : while, for, foreach

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// array.forEach((item) => {
//   console.log(item);
// });

// Functions

const myFunction = (item) => {
  console.log(item);
};

myFunction("toto");
myFunction("tata");

const calcul = (nb1, nb2) => {
  return nb1 + nb2;
};

let result = calcul(4, 5);
console.log(result);

// interaction DOM Document Object Model
// Propriété, evenement, méthode

console.log(document.body);

// selectors
let header = document.querySelector("header");
console.log(header);

let grids = document.querySelectorAll(".grid");
console.log(grids);

grids.forEach((grid) => {
  grid.classList.add("titi");
  console.log(grid);
});

// evenement les plus courants

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM entièrement chargé et analysé");
});

header.addEventListener("mousseenter", (e) => {
  console.log("souris entre");
});

// Insertion dom et navigation dans le dom

let header = document.querySelector("header");
let div = document.createElement("div");
div.classList.add("top");
div.innerHTML = "<span>Top zone</span>";
header.append(div);
// inséré dans la nav;
header.parentNode.append(div);
// inséré dans le footer
console.log(header.nextElementSibling);

Fin de la théorie*/

// Fonction du thème
const menuMobil = () => {
  const btn = document.querySelector("burger");
  const header = document.querySelector("header");

  btn.addEventListener("click", () => {
    console.log("click");
  });
};

menuMobil();

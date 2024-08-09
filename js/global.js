// console.log("le script est chargé");
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

/* Menu mobil */

const menuMobil = () => {
  // console.log("menuMobil function called");
  const btn = document.querySelector(".burger");
  // console.log(document.querySelector(".burger"));
  const header = document.querySelector(".header");
  // console.log(document.querySelector(".header"));
  const links = document.querySelectorAll(".navbar a");

  // console.log(btn, header, links);

  //  Click sur le menu burger en version mobile
  btn.addEventListener("click", () => {
    header.classList.toggle("show-nav");
    if (header.classList.contains("show-nav")) {
      console.log("Show the nav");
    } else {
      console.log("hide the nav (burger click)");
    }
  });

  // Click sur les liens du menu
  links.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("show-nav");
      console.log("hide the nav (link click)");
    });
  });
};
menuMobil();

/* Portfolio */

const tabsFilters = () => {
  const tabs = document.querySelectorAll(".portfolio-filters a");
  const projects = document.querySelectorAll(".portfolio .card");

  //va permettre de reset le click de la link a 0
  const resetActivelinks = () => {
    tabs.forEach((element) => {
      element.classList.remove("active");
    });
  };

  // Fonction de call back

  const showProjects = (element) => {
    console.log(element);
    projects.forEach((project) => {
      let filter = project.getAttribute("data-category");
      // comparaison si différent entre le filter et la catégorie
      if (element === "all") {
        project.parentNode.classList.remove("hide");
        return;
        // le return arrête l'action ici si element est bien égal à "all"
      }

      // if (filter !== element) {
      //   project.parentNode.classList.add("hide");
      // } else {
      //   project.parentNode.classList.remove("hide");
      // }

      // Option avec opérateurs ternaire :
      filter !== element
        ? project.parentNode.classList.add("hide")
        : project.parentNode.classList.remove("hide");

      // console.log(project);
    });
  };
  // Si lélément ne correspond à la catégorie cliquée l'élément sera hide
  tabs.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      let filter = element.getAttribute("data-filter");
      console.log(filter);
      // La catégorie cliquée est envoyée dans la fonction callback showProjects et l'élement sur lequel il à été cliquée sera récupéré par la const showProjects qui comparera le filter et l'element
      showProjects(filter);
      resetActivelinks();
      element.classList.add("active");
    });
  });
};
tabsFilters();

/* Modal du portefolio */

document.addEventListener("DOMContentLoaded", () => {
  const showProjectsDetails = () => {
    // console.log("showProjectsDetails function call");
    const links = document.querySelectorAll(".card_link");
    const modals = document.querySelectorAll(".modal");
    const btns = document.querySelectorAll(".modal_close");

    // console.log("links", links);
    // console.log("modals", modals);
    // console.log("close Buttons", btns);

    const hideModals = () => {
      console.log("hideModals function call");
      modals.forEach((modal) => {
        modal.classList.remove("show");
        console.log("Modal Hidden");
      });
    };

    links.forEach((element) => {
      element.addEventListener("click", (event) => {
        event.preventDefault();
        hideModals(); // Hide all modals before showing the selected one
        const modalId = element.dataset.id;
        const modal = document.querySelector(`#${modalId}`);
        if (modal) {
          modal.classList.add("show");
          console.log(`Showing modal: ${modalId}`);
        } else {
          console.error(`Modal with id ${modalId} not found.`);
        }
      });
    });

    btns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        hideModals();
      });
    });

    // Ferme la modal en cliquant n'importe où sur l'écran
    modals.forEach((modal) => {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          hideModals();
        }
      });
    });
  };

  showProjectsDetails();
});

// Effet d'apparition

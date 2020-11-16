"use strict";

const navLine = [...document.querySelectorAll(".line")];
const navColor = [...document.querySelectorAll(".nav__text--link")];
const subpages = [...document.querySelectorAll(".subpages")];

let projectBox = [...document.querySelectorAll(".projectsBox")];
let imgMobile = [...document.querySelectorAll(".imgM")];
let imgDesk = [...document.querySelectorAll(".imgD")];

// NAV SCROLL LISTENER
window.addEventListener("scroll", () => {
  for (let [subpage, className] of subpages.entries()) {
    let { y: hY } = className.getBoundingClientRect();
    hY <= 200 && hY >= 0 ? navChanges(subpage) : null;
  }
});
// NAV CLICK LISTENER
for (let [nav] of navColor.entries()) {
  navColor[nav].addEventListener("click", function () {
    navChanges(nav);
  });
}
//NAV  COLOR CHANGER
function navChanges(navData) {
  for (let [navData] of navColor.entries()) {
    navColor[navData].classList.remove("active__color");
    navLine[navData].classList.remove("active__line");
  }
  navColor[navData].classList.add("active__color");
  navLine[navData].classList.add("active__line");
}

// HOVER PROJECTS
//MOUSEOVER
for (let [numImg] of projectBox.entries()) {
  projectBox[numImg].addEventListener("mouseover", function () {
    imgMobile[numImg].src = `./landscapes/${numImg + 1}mg.gif`;
    imgDesk[numImg].src = `./landscapes/${numImg + 1}dg.gif`;
  });
}
//MOUSEOUT
for (let [numImg] of projectBox.entries()) {
  projectBox[numImg].addEventListener("mouseout", function () {
    imgMobile[numImg].src = `./landscapes/${numImg + 1}m.png`;
    imgDesk[numImg].src = `./landscapes/${numImg + 1}d.png`;
  });
}
//SWITCH BUTTON WEBSITE / APPS
let switch1 = document.querySelector(".switch__buttons--span1");
let switch2 = document.querySelector(".switch__buttons--span2");

let pApp = document.querySelector(".projects__app");
let pWeb = document.querySelector(".projects__web");

switch1.addEventListener("click", function () {
  switch2.style.color = "#8f8f90";
  switch1.style.color = "#fff";

  pWeb.style.display = "flex";
  pApp.style.display = "none";
});

switch2.addEventListener("click", function () {
  switch1.style.color = "#8f8f90";
  switch2.style.color = "#fff";

  pWeb.style.display = "none";
  pApp.style.display = "flex";
});

// for (let btn of switchB) {
//   btn.addEventListener("click", function () {
//     for (let btnAll of switchB) {
//       btnAll.classList.remove("active__switch");
//     }
//     btn.classList.toggle("active__switch");

//     console.log(pApp.currentStyle);
//   });
// }

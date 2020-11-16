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
  switch1.style.fontSize = "1rem";
  switch2.style.fontSize = ".9rem";

  pApp.style.visibility = "hidden";
  pApp.style.opacity = "0";
  setTimeout(() => {
    pApp.style.display = "none";

    setTimeout(() => {
      pWeb.style.visibility = "visible";
      pWeb.style.opacity = "1";
    }, 100);
    pWeb.style.display = "flex";
  }, 150);
});

switch2.addEventListener("click", function () {
  switch1.style.color = "#8f8f90";
  switch2.style.color = "#fff";
  switch1.style.fontSize = "0.9rem";
  switch2.style.fontSize = "1rem";

  pWeb.style.visibility = "hidden";
  pWeb.style.opacity = "0";
  setTimeout(() => {
    pWeb.style.display = "none";

    setTimeout(() => {
      pApp.style.visibility = "visible";
      pApp.style.opacity = "1";
    }, 100);
    pApp.style.display = "flex";
  }, 150);
});

//footer
let currentYear = document.querySelector(".current_year");
let time = new Date().getFullYear();
currentYear.innerText = time;

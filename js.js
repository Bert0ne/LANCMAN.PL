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

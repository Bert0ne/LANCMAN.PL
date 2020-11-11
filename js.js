"use strict";

const navLine = [...document.querySelectorAll(".line")];
const navColor = [...document.querySelectorAll(".nav__text--link")];
const about = document.querySelector(".about");
const projects = document.querySelector(".projects");
const contact = document.querySelector(".contact");

// NAV SCROLL LISTENER
window.addEventListener("scroll", () => {
  let heightY = window.scrollY;
  console.log(contact.offsetTop);
});
// NAV CLICK LISTENER
for (let [i] of navColor.entries()) {
  navColor[i].addEventListener("click", function () {
    navChanges(i);
  });
}
function navChanges(i) {
  for (let [i] of navColor.entries()) {
    navColor[i].classList.remove("active__color");
    navLine[i].classList.remove("active__line");
  }
  navColor[i].classList.add("active__color");
  navLine[i].classList.add("active__line");
}

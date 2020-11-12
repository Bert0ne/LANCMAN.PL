"use strict";

const navLine = [...document.querySelectorAll(".line")];
const navColor = [...document.querySelectorAll(".nav__text--link")];
const subpages = [...document.querySelectorAll(".subpages")];

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

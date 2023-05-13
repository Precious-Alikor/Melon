const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelector(".nav-links");
const menu = document.querySelectorAll(".menu");
const answer = document.querySelectorAll(".answer");
const navMenuMob = document.querySelector(".nav-menu-mob");

// navigation
// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
//   navLinks.classList.toggle("active");
// });
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenuMob.classList.toggle("active");
});

//options
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function () {
    menu[i].classList.toggle("active");
    answer[i].classList.toggle("active");
  });
}

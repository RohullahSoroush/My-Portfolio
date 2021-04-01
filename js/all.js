const hamburgerBtn = document.querySelector(".btn-nav");
const s = document.querySelector(".btn-nav span");
const navigationMenu = document.querySelector(".navigation__background");
const headerBtn = document.querySelector(".about-me-btn");
const mainContainer = document.querySelector(".container");
const headerContainer = document.querySelector(".header");
const pageScroll = document.querySelector(".page-scroll");
const FormSubmitBtn = document.querySelector(".form__submit");
// const option = document.querySelector(".option");

// HEADER ABOUT-ME-BUTTON
headerBtn.addEventListener("click", function () {
  if (headerBtn.classList.contains("animate__bounceInRight")) {
    headerBtn.classList.remove("animate__bounceInRight", "animate__delay-1s");
    headerBtn.classList.add("animate__tada");
  } else if (headerBtn.classList.contains("animate__tada")) {
    headerBtn.classList.remove("animate__tada");
    headerBtn.classList.add("animate__tada");
  }
});

//CONTACT FORM SUBMIT BUTTON
FormSubmitBtn.addEventListener("click", function () {
  FormSubmitBtn.classList.add("animate__tada");
});

// MENU HAMBURGER OPEN AND CLOSE
hamburgerBtn.addEventListener("click", function () {
  if (hamburgerBtn.classList.contains("open-menu")) {
    hamburgerBtn.classList.remove("open-menu");
    hamburgerBtn.classList.add("close-menu");
    navigationMenu.classList.remove("menuToggleOpen");
    navigationMenu.classList.add("menuToggleClose");
  } else {
    hamburgerBtn.classList.remove("close-menu");
    hamburgerBtn.classList.add("open-menu");
    navigationMenu.classList.remove("menuToggleClose");
    navigationMenu.classList.add("menuToggleOpen");
  }
});

// TYPED.JS LIBRARY
var typed = new Typed(".job-typewriter", {
  strings: ["Frontend WEB Developer", "Competitive Programmer"],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true,
  startDelay: 500,
  backDelay: 2500,
  showCursor: true,
  cursorChar: "|",
});

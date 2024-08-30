import jump from "../node_modules/jump.js/dist/jump.module.js";

const PageScroll = document.querySelector(".page-scroll");
const AboutMeBtn = document.querySelector(".about-me-btn");
const HomeBtn = document.querySelector(".navigation__item-home");
const AboutBtn = document.querySelector(".navigation__item-about");
const SkillsBtn = document.querySelector(".navigation__item-skills");
const ProjectBtn = document.querySelector(".navigation__item-project");
const ContactBtn = document.querySelector(".navigation__item-contact");

PageScroll.addEventListener("click", function () {
  jump("#header-id", {
    duration: 1000,
  });
});

AboutMeBtn.addEventListener("click", function () {
  jump("#about-id", {
    duration: 800,
  });
});

HomeBtn.addEventListener("click", function () {
  jump("#header-id", {
    duration: 800,
  });
});

AboutBtn.addEventListener("click", function () {
  jump("#about-id", {
    duration: 800,
  });
});
SkillsBtn.addEventListener("click", function () {
  jump("#skills-id", {
    duration: 800,
  });
});
ProjectBtn.addEventListener("click", function () {
  jump("#project-id", {
    duration: 800,
  });
});
ContactBtn.addEventListener("click", function () {
  jump("#contact-id", {
    duration: 800,
  });
});

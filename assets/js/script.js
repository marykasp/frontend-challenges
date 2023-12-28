// Preloader
// const preloader = document.querySelector("[data-prelaoder]");
// window.addEventListener("load", () => {
//   preloader.classList.add("loaded");
//   document.body.classList.add("loaded");
// });

const addEventOnElements = (elements, eventType, callback) => {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

// Mobile Navigation
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggler = document.querySelector("[data-nav-toggler]");
// console.log(navToggler);

const toggleNavbar = function () {
  console.log(navbar);
  navbar.classList.toggle("active");
};

navToggler.addEventListener("click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
};

addEventOnElements(navbarLinks, "click", closeNavbar);

// HEADER - active when scrolled to top
const header = document.querySelector("[data-header]");
const activeHeader = () => {
  if (window.scrollY > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", activeHeader);

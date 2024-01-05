// Preloader
// const preloader = document.querySelector("[data-prelaoder]");
// window.addEventListener("load", () => {
//   preloader.classList.add("loaded");
//   document.body.classList.add("loaded");
// });

const addEventOnElements = (elements, eventType, callback) => {
  elements.forEach((element) => element.addEventListener(eventType, callback));
};

/*-----------------------------------*\
  #MOBILE NAVIGATION
\*-----------------------------------*/

// navbar and navtoggle elements
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
};
const closeNavbar = function () {
  navbar.classList.remove("active");
};

// event listener on navtoggle menu
navToggler.addEventListener("click", toggleNavbar);

// iterate over each link and add an event listener
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

/*-----------------------------------*\
  #PROJECT TABS
\*-----------------------------------*/

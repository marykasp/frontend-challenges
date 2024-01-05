const addEventOnElements = (elements, eventType, callback) => {
  elements.forEach((element) => element.addEventListener(eventType, callback));
};

/*-----------------------------------*\
  #PRELOADER
\*-----------------------------------*/
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

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
const tabs = document.querySelectorAll(".tab-btn");
const all_content = Array.from(document.querySelectorAll(".project-card"));
const monster = document.querySelector("#monster");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    // iterate over all tabs and remove active class
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    let line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    monster.classList.remove("show");
    // show content that matches the data-id of tab btn
    let id = tab.getAttribute(["data-id"]);
    if (id === "intermediate") {
      monster.classList.add("show");
    }

    // iterate over all the content and check if data-type equals btn id
    all_content.forEach((content) => {
      content.classList.remove("active");
      if (content.getAttribute(["data-type"]) === id) {
        console.log(`Matches ${id}`);
        content.classList.add("active");
      }
    });
  });
});

const formContainer = document.querySelector("[data-wrapper]");
const resultsContainer = document.querySelector("[data-results]");
const result = document.querySelector(".rating-result");
const submitBtn = document.querySelector("#submit");
const form = document.querySelector("[data-form]");

const handleSubmit = (e) => {
  e.preventDefault();

  const rating = new FormData(e.target).get("rating");
  // console.log(rating);
  if (rating) {
    playAudio();
    swipe(rating);
  }
};

const swipe = (rating) => {
  resultsContainer.classList.remove("hidden");
  formContainer.classList.add("hidden");

  formContainer.addEventListener(
    "animationend",
    () => {
      formContainer.classList.replace("animate-out", "animate-in");
    },
    { once: true },
  );

  let html = result.innerHTML;
  html = result.innerHTML.replace(/{{result}}/g, rating);
  result.innerHTML = html;

  formContainer.classList.add("animate-out");
};

const playAudio = () => {
  const audio = new Audio("./sounds/whoosh.mp3");

  audio.volume = 0.2;
  audio.play();
};

form.addEventListener("submit", handleSubmit);

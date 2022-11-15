// alert("main page");

const BTN_PLAY = document.querySelector("#btn-play");
const SCORE_INPUT = document.querySelector(".nav-score");

BTN_PLAY.addEventListener("click", () => {
SCORE_INPUT.classList.add("visible");
BTN_PLAY.classList.add("hidden");
})
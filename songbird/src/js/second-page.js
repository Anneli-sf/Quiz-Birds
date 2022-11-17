import { birdsDataEn } from "./dataBirds";

const SCORE_INPUT = document.querySelector(".nav-score");
const SECOND_PAGE = document.querySelector("#second-section");
const BTN_NEXT = document.querySelector("#btn-next");
const BTNS_LEVEL_COLL = [...document.querySelectorAll(".level-btn")];
const GUESS_IMAGE = document.querySelector(".question-image");
const GUESS_NAME = document.querySelector(".question-name");
const NAMES_COLL = [...document.querySelectorAll(".answer-name")];
const BIRD_INFO_SECTION = document.querySelector(".answer-description");

//-----написание адреса картинки  GUESS_IMAGE.style.backgroundImage = `url("${birdsDataEn[0][0].image}")`;

function startGame() {
  BTNS_LEVEL_COLL.forEach((el) => el.classList.remove("active"));
  BTNS_LEVEL_COLL[0].classList.add("active");
  GUESS_IMAGE.style.backgroundImage = "url(../assets/images/guess-bird.png)";
  GUESS_NAME.innerHTML = `*******`;
  NAMES_COLL.forEach((item, index) => {
    item.innerHTML = `${birdsDataEn[0][index].name}`;
  });
BIRD_INFO_SECTION.innerHTML = `listen to the sound and choose bird's name`;
}

export {
  SCORE_INPUT,
  SECOND_PAGE,
  BTN_NEXT,
  GUESS_IMAGE,
  BTNS_LEVEL_COLL,
  startGame,
};

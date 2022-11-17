import { BTN_PLAY } from "./first-page";
import {
  SCORE_INPUT,
  BTN_NEXT,
  BTNS_LEVEL,
  ALL_LEVELS,
  GUESS_IMAGE,
  NAMES,
  showChosenBird
} from "./second-page";
import {
  switchToSecondPage,
  switchToThirdPage,
  switchToStartPage,
} from "./switch-to-page";
import { BTN_PLAY_AGAIN } from "./third-page";
import { getRandomValue } from "./helpers";
import { birdsDataEn } from "./dataBirds";
import { AUDIO } from "./player";

let currLevel = 0;
let currBird = 0;

BTN_PLAY.addEventListener("click", () => {
  switchToSecondPage();
  currBird = getRandomValue(0, 5);
  AUDIO.src = birdsDataEn[currLevel][currBird].audio;
  console.log(birdsDataEn[currLevel][currBird].id);
});

BTN_NEXT.addEventListener("click", switchToThirdPage);
BTN_PLAY_AGAIN.addEventListener("click", switchToStartPage);

NAMES.addEventListener("click", (e) => {
  showChosenBird(e, currLevel);

//   if (e.target.closest("input").checked == true) console.log("input")
});

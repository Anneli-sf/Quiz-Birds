import { BTN_PLAY } from "./first-page";
import {
  SCORE_INPUT,
  BTN_NEXT,
  BTNS_LEVEL,
  ALL_LEVELS,
  GUESS_IMAGE,
  NAMES,
  SCORE_VALUE,
  showChosenBird,
  markCurrAnswer,
  startGame
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
let currBirdNumber = 0;
// let counter = 0;
// let score = 0;

BTN_PLAY.addEventListener("click", () => {
  switchToSecondPage();
  currBirdNumber = getRandomValue(0, 5);
  AUDIO.src = birdsDataEn[currLevel][currBirdNumber].audio;
//   console.log("bird Id",birdsDataEn[currLevel][currBirdNumber].id);
//   console.log("bird name",birdsDataEn[currLevel][currBirdNumber].name);
});

BTN_NEXT.addEventListener("click", startGame);
BTN_PLAY_AGAIN.addEventListener("click", switchToStartPage);


//-----------клик по вариантам названий птиц
NAMES.addEventListener("click", (e) => {
    
  showChosenBird(e, currLevel, currBirdNumber);
//   markCurrAnswer(e, currLevel, currBirdNumber);
 
});


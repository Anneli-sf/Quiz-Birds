import { BTN_PLAY } from "./first-page";
import {
  SCORE_INPUT,
  BTN_NEXT,
  BTNS_LEVEL,
  ALL_LEVELS,
  GUESS_IMAGE,
  NAMES,
  NAMES_COLL,
  SCORE_VALUE,
  showChosenBird,
  markCurrAnswer,
  startGame,
  score,
  failAudio,
  winAudio
} from "./second-page";
import {
  switchToSecondPage,
  switchToThirdPage,
  switchToStartPage,
} from "./switch-to-page";
import { BTN_PLAY_AGAIN, showScore } from "./third-page";
import { getRandomValue } from "./helpers";
import { birdsDataEn } from "./dataBirds";
import { AUDIO } from "./player";

let currLevel = 0;
let currBirdNumber = 0;

BTN_NEXT.addEventListener("click", () => {
  if (currLevel == 5) {
    switchToThirdPage(score);
  }

  startGame();
  currLevel++;
  setBirdAndLevel();
});

BTN_PLAY.addEventListener("click", () => {
  switchToSecondPage();
  setBirdAndLevel();
});

BTN_PLAY_AGAIN.addEventListener("click", () => {
    currLevel = 0;
    switchToStartPage();
    setBirdAndLevel();
});

//-----------клик по вариантам названий птиц
NAMES.addEventListener("click", (e) => {
  showChosenBird(e, currLevel, currBirdNumber);
//   console.log(score);
});

function setBirdAndLevel() {
    if (currLevel < 6) {
        BTNS_LEVEL[currLevel].classList.add("active");
        currBirdNumber = getRandomValue(0, 5);
        AUDIO.src = birdsDataEn[currLevel][currBirdNumber].audio;
        NAMES_COLL.forEach((item, index) => {
          item.innerHTML = `${birdsDataEn[currLevel][index].name}`;
        });
    }
    // console.log("загаданная птица", currBirdNumber);
}

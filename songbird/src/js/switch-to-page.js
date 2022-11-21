import { BTN_PLAY, FIRST_PAGE } from "./first-page";
import {
  SCORE_INPUT,
  SCORE_VALUE,
  SECOND_PAGE,
  startGame,
} from "./second-page";
import { showScore, THIRD_PAGE, BTN_PLAY_AGAIN } from "./third-page";

function switchToSecondPage() {
  BTN_PLAY.classList.add("hidden");
  FIRST_PAGE.classList.add("hidden");

  SCORE_INPUT.classList.add("visible");
  SCORE_VALUE.value = 0;
  SECOND_PAGE.classList.add("visible");

  startGame(); // загрузка начального вида
}

function switchToThirdPage(score) {
  SECOND_PAGE.classList.remove("visible");
  SCORE_INPUT.classList.remove("visible");
  THIRD_PAGE.classList.add("visible");
  BTN_PLAY_AGAIN.classList.remove("hidden");

  showScore(score);
}

function switchToStartPage() {
  BTN_PLAY.classList.remove("hidden");
  FIRST_PAGE.classList.remove("hidden");
  THIRD_PAGE.classList.remove("visible");
  startGame();
}

export { switchToSecondPage, switchToThirdPage, switchToStartPage };

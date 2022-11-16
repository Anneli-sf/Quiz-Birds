import { BTN_PLAY, FIRST_PAGE } from "./first-page";
import { SCORE_INPUT, SECOND_PAGE } from "./second-page";
import { THIRD_PAGE } from "./third-page";

function switchToSecondPage() {
  BTN_PLAY.classList.add("hidden");
  FIRST_PAGE.classList.add("hidden");

  SCORE_INPUT.classList.add("visible");
  SECOND_PAGE.classList.add("visible");
}

function switchToThirdPage() {
  SECOND_PAGE.classList.remove("visible");
  SCORE_INPUT.classList.remove("visible");

  THIRD_PAGE.classList.add("visible");
}

function switchToStartPage() {
    BTN_PLAY.classList.remove("hidden");
    FIRST_PAGE.classList.remove("hidden");
  
    THIRD_PAGE.classList.remove("visible");
  }

export { switchToSecondPage, switchToThirdPage, switchToStartPage };

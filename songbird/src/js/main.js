import { BTN_PLAY } from "./first-page";
import { SCORE_INPUT, BTN_NEXT } from "./second-page";
import { switchToSecondPage, switchToThirdPage, switchToStartPage } from "./switch-to-page";
import { BTN_PLAY_AGAIN } from "./third-page";

BTN_PLAY.addEventListener("click", switchToSecondPage);

BTN_NEXT.addEventListener("click", switchToThirdPage);

BTN_PLAY_AGAIN.addEventListener("click", switchToStartPage);

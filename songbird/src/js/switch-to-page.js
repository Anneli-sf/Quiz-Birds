import { BTN_PLAY, FIRST_PAGE } from "./first-page";
import { SCORE_INPUT, SECOND_PAGE } from "./second-page";

function switchToSecondPage() {
   
    BTN_PLAY.classList.add("hidden");
    FIRST_PAGE.classList.add("hidden");

    SCORE_INPUT.classList.add("visible");
    SECOND_PAGE.classList.add("visible");

    }

    export {switchToSecondPage};
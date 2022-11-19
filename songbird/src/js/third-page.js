import { SCORE_INPUT } from "./second-page";

const THIRD_PAGE = document.querySelector("#third-section");
const BTN_PLAY_AGAIN = document.querySelector("#btn-play-gain");
const TOTAL_SCORE = document.querySelector("#total-score");

function showScore(score) {
    TOTAL_SCORE.value = score;
}



export {THIRD_PAGE, BTN_PLAY_AGAIN, showScore};
import { SCORE_INPUT } from "./second-page";

const THIRD_PAGE = document.querySelector("#third-section");
const BTN_PLAY_AGAIN = document.querySelector("#btn-play-gain");
const TOTAL_SCORE = document.querySelector("#total-score");
const SCORE_TITLE = document.querySelector(".score-title");

function showScore(score) {
  TOTAL_SCORE.value = score;
  score == 30
    ? (SCORE_TITLE.innerHTML = `you win! congratulations!`)
    : (SCORE_TITLE.innerHTML = `The End`);
  score == 30
    ? BTN_PLAY_AGAIN.classList.add("hidden")
    : BTN_PLAY_AGAIN.classList.remove("hidden");
}

export { THIRD_PAGE, BTN_PLAY_AGAIN, showScore };

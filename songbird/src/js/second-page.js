import { birdsDataEn } from "./dataBirds";
import { AUDIO, buttonPlay } from "./player";
import { showScore } from "./third-page";

const SCORE_INPUT = document.querySelector(".nav-score");
const SCORE_VALUE = document.querySelector(".nav-input");
const SECOND_PAGE = document.querySelector("#second-section");
const BTN_NEXT = document.querySelector("#btn-next");
const BTNS_LEVEL = document.querySelectorAll(".level-btn");
const BTN_LEVEL_0 = document.querySelector("#level-0");
const ALL_LEVELS = document.querySelector(".levels");
const GUESS_IMAGE = document.querySelector(".question-image");
const GUESS_NAME = document.querySelector(".question-name");
const NAMES_COLL = document.querySelectorAll(".answer-name");
const btnInput = document.querySelectorAll(".input");
const BIRD_INFO_SECTION = document.querySelector(".answer-description");
const NAMES = document.querySelector(".show-inputs");
const smallPlayer = document.querySelector(".small-player-controls");

const currBirdImage = document.querySelector(".answer-image");
const currBirdName = document.querySelector(".name");
const currBirdSpecies = document.querySelector(".latin-name");
const currBirdInfo = document.querySelector(".answer-text");

//-----написание адреса картинки  GUESS_IMAGE.style.backgroundImage = `url("${birdsDataEn[0][0].image}")`;

function startGame() {
  BTNS_LEVEL.forEach((el) => el.classList.remove("active"));

  NAMES_COLL.forEach((item, index) => {
    // item.innerHTML = `${birdsDataEn[0][index].name}`;
    item.classList.remove("true");
    item.classList.remove("false");
  });
  btnInput.forEach((btn) => (btn.checked = false));
  setStartStyles();
}

function setStartStyles() {
  GUESS_IMAGE.style.backgroundImage = "url(../assets/images/guess-bird.png)";
  GUESS_NAME.innerHTML = `*******`;
  currBirdImage.style.backgroundImage = "url(../assets/svg/currBirdBkgr.png)";
  currBirdInfo.innerHTML = `listen to the sound and choose bird's name`;
  currBirdName.classList.add("hidden");
  currBirdSpecies.classList.add("hidden");
  smallPlayer.classList.add("hidden");
  BTN_NEXT.disabled = true;
  BTN_NEXT.innerHTML = "next level";
}

let counter = 0;
let score = 0;
const winAudio = new Audio();
const failAudio = new Audio();
winAudio.src = "../assets/sound/win.mp3";
failAudio.src = "../assets/sound/fail.mp3";

//---------отобразить текущую выбранную птицу
function showChosenBird(e, currLevel, currBirdNumber) {
  let currVariant = e.target;
  let currId;
  if (currVariant.closest("input")) {
    currId = e.target.id.slice(4);
    // console.log("curr chosen id", currId);
    // console.log(currVariantName);
    showBirdInfo(currLevel, currId);
    if (currVariant.checked == false) {
      currVariant.checked = true;
    }
  }
  markCurrAnswer(currVariant, currLevel, currBirdNumber);
}

//-------подсветка верного-неверного ответа
// function markCurrAnswer(e, currLevel, currBirdNumber) {
//   let currVariantName = e.target.closest("label");
//   let currId;

//   if (currVariantName) {
//     currId = e.target.id.slice(6);
//     counter++;
//     console.log(counter);
//     //   console.log("curr name chosen id", currId);
//     // console.log(currVariantName);
//     if (currId == birdsDataEn[currLevel][currBirdNumber].id) {
//       currVariantName.classList.add("true");
//       showGuessedBird(currBirdNumber, currLevel);
//       showCurrScore(counter);
//       counter = 0;
//       BTN_NEXT.disabled = false;
//     } else {
//       currVariantName.classList.add("false");
//     }
//   }
// }

function markCurrAnswer(currVariant, currLevel, currBirdNumber) {
  let currVariantName = currVariant.closest("label");
  let currId;

  if (currVariant.closest("label")) {
    currId = currVariant.id.slice(6);
    counter++;
    console.log(counter);
    //   console.log("curr name chosen id", currId);
    // console.log(currVariantName);
    if (currId == birdsDataEn[currLevel][currBirdNumber].id) {
     
        currVariantName.classList.add("true");
        AUDIO.pause();
        buttonPlay.classList.remove("pausebtn");
        winAudio.play();
        showGuessedBird(currBirdNumber, currLevel);
        showCurrScore(counter);
        counter = 0;
        BTN_NEXT.disabled = false;

        if (currLevel == 5) {
            // switchToThirdPage();
            BTN_NEXT.innerHTML = "see the result";
            showScore(score);
          } 
      
    } else {
      currVariantName.classList.add("false");
      failAudio.play();
    }
  }
}

function showCurrScore(counter) {
  switch (counter) {
    case 1:
      score = score + 5;
      break;
    case 2:
      score = score + 4;
      break;
    case 3:
      score = score + 3;
      break;
    case 4:
      score = score + 2;
      break;
    case 5:
      score = score + 1;
      break;
    default:
      score = score + 0;
  }
  //   console.log(score);
  SCORE_VALUE.value = score;
}

//----------------отобразить угаданную птицу
function showGuessedBird(currBirdNumber, currLevel) {
  GUESS_IMAGE.style.backgroundImage = `url("${birdsDataEn[currLevel][currBirdNumber].image}")`;
  GUESS_NAME.innerHTML = birdsDataEn[currLevel][currBirdNumber].name;
}

//----------------отобразить инфо о птице
function showBirdInfo(currLevel, currId) {
  currBirdName.classList.remove("hidden");
  currBirdSpecies.classList.remove("hidden");
  smallPlayer.classList.remove("hidden");
  currBirdImage.style.backgroundImage = `url("${
    birdsDataEn[currLevel][currId - 1].image
  }")`;
  currBirdName.innerHTML = `${birdsDataEn[currLevel][currId - 1].name}`;
  currBirdSpecies.innerHTML = `${birdsDataEn[currLevel][currId - 1].species}`;
  currBirdInfo.innerHTML = `${birdsDataEn[currLevel][currId - 1].description}`;
}

export {
  SCORE_INPUT,
  SECOND_PAGE,
  BTN_NEXT,
  GUESS_IMAGE,
  BTNS_LEVEL,
  ALL_LEVELS,
  NAMES_COLL,
  NAMES,
  SCORE_VALUE,
  currBirdImage,
  currBirdName,
  currBirdSpecies,
  currBirdInfo,
  smallPlayer,
  score,
  startGame,
  showChosenBird,
  markCurrAnswer,
};

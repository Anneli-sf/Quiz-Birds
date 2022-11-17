import { BTN_PLAY } from "./first-page";
import { SCORE_INPUT, BTN_NEXT, BTNS_LEVEL_COLL, GUESS_IMAGE } from "./second-page";
import { switchToSecondPage, switchToThirdPage, switchToStartPage } from "./switch-to-page";
import { BTN_PLAY_AGAIN } from "./third-page";
import {getRandomValue} from "./helpers";
import {birdsDataEn} from "./dataBirds";

BTN_PLAY.addEventListener("click", switchToSecondPage);

BTN_NEXT.addEventListener("click", switchToThirdPage);

BTN_PLAY_AGAIN.addEventListener("click", switchToStartPage);

window.addEventListener("load", () => {
    
 
   
    // GUESS_IMAGE.style.backgroundImage = 'url("https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg")';
    console.log(`"${birdsDataEn[0][0].image}"`);

})

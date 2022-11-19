import { birdsDataEn } from "./dataBirds";
import { getRandomValue } from "./helpers";
import { BTN_NEXT } from "./second-page";

const player = document.querySelector(".player-controls");
const progress = player.querySelector(".progress");
const progressOfAudio = player.querySelector(".progress-filled");

const buttonPlay = player.querySelector(".playbtn");
const buttonVolume = player.querySelector(".volumebtn");
const volumeLevel = player.querySelector(".volume-level");

const AUDIO = new Audio();
// let currLevel = 0;
// let currBirdAudio = getRandomValue(0, 5);

// AUDIO.src = birdsDataEn[currLevel][currBirdAudio].audio;

// console.log(AUDIO.src);
buttonPlay.addEventListener("click", playAudio);
volumeLevel.addEventListener("change", changeVolume);
volumeLevel.addEventListener("mousemove", changeVolume);
buttonVolume.addEventListener("click", muteVolume);
AUDIO.addEventListener("timeupdate", audioProgress);

let currentVolume;
let currentValue;
let mousedown = false;

//воспроизведение видео
function playAudio() {
  if (AUDIO.paused) {
    AUDIO.play();
    buttonPlay.classList.add("pausebtn");
  } else {
    AUDIO.pause();
    buttonPlay.classList.remove("pausebtn");
  }
}

//звук видео
function changeVolume() {
  AUDIO.volume = this.value; //регулирование громкости

  if (this.value === this.min) {
    //мьют при отст звука
    buttonVolume.classList.add("mute");
  } else buttonVolume.classList.remove("mute");
}

//цвет ползунка звука
volumeLevel.addEventListener("input", function () {
  const value = this.value;
//   console.log(value);
  this.style.background = `linear-gradient( to right, #212a43 0%, #212a43 ${
    value * 100
  }%, #fff ${value * 100}%, #fff 100% )`;
});

//кнопка звука

function muteVolume() {
  if (AUDIO.volume !== 0) {
    currentVolume = AUDIO.volume;
    AUDIO.volume = 0;
    buttonVolume.classList.add("mute");
    currentValue = volumeLevel.value;
    volumeLevel.value = 0;
    volumeLevel.style.background = `linear-gradient( to right, #212a43 0%, #212a43 0%, #fff 0%, #fff 0% )`;
  } else {
    AUDIO.volume = currentVolume;
    buttonVolume.classList.remove("mute");
    volumeLevel.value = currentValue;
    volumeLevel.style.background = `linear-gradient( to right, #212a43 0%, #212a43 ${
      volumeLevel.value * 100
    }%, #fff ${volumeLevel.value * 100}%, #fff 100% )`;
  }
}

//прогресс-бар

function audioProgress() {
  let currProgress = (AUDIO.currentTime / AUDIO.duration) * 100;
  progressOfAudio.style.flexBasis = `${currProgress}%`;
//   console.log(currProgress);
  
  if (currProgress == 100) buttonPlay.classList.remove("pausebtn");

  BTN_NEXT.addEventListener("click", () => {
    progressOfAudio.style.flexBasis = `0%`;
  });
}

//перемотка видео

function rewindAudio(e) {
  //   console.log(e);
  const rewindTime = (e.offsetX / progress.offsetWidth) * AUDIO.duration;
  AUDIO.currentTime = rewindTime;
}

progress.addEventListener("click", rewindAudio);
progress.addEventListener("mousemove", (e) => {
  if (mousedown) {
    rewindAudio(e);
  }
});
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

export { AUDIO, buttonPlay };

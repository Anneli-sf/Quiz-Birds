import { birdsDataEn } from "./dataBirds";
import { getTime } from "./helpers";
import { getRandomValue } from "./helpers";
import { BTN_NEXT } from "./second-page";

//----------------MAIN PLAYER
const player = document.querySelector(".player-controls");
const progress = player.querySelector(".progress");
const progressOfAudio = player.querySelector(".progress-filled");

const buttonPlay = player.querySelector(".playbtn");
const buttonVolume = player.querySelector(".volumebtn");
const volumeLevel = player.querySelector(".volume-level");
const visibleCurrTime = document.querySelector(".small-curr-time");
const visibleDuration = document.querySelector(".small-duration");

const AUDIO = new Audio();
// console.log(AUDIO.src);

//-----------------small PLAYER
const playerSmall = document.querySelector(".small-player-controls");
const progressSmall = playerSmall.querySelector(".small-progress");
const progressSmallOfAudio = playerSmall.querySelector(".small-progress-filled");

const buttonPlaySmall = playerSmall.querySelector(".small-player-button");
const buttonVolumeSmall = playerSmall.querySelector(".small-volume-button");
const volumeLevelSmall = playerSmall.querySelector(".small-volume-level");
const visibleCurrTimeSmall = document.querySelector(".curr-time");
const visibleDurationSmall = document.querySelector(".duration");

const AUDIO_SMALL = new Audio();
AUDIO_SMALL.src = birdsDataEn[0][0].audio;
console.log(AUDIO_SMALL.src);

//----------------MAIN PLAYER
buttonPlay.addEventListener("click", () => {
  playAudio(AUDIO, buttonPlay);
});
volumeLevel.addEventListener("change", (e) => {
  changeVolume(e, AUDIO, buttonVolume);
});
volumeLevel.addEventListener("mousemove", (e) => {
  changeVolume(e, AUDIO, buttonVolume);
});
buttonVolume.addEventListener("click", () => {
  muteVolume(AUDIO, buttonVolume, volumeLevel);
});
AUDIO.addEventListener("timeupdate", () => {
  audioProgress(AUDIO, progressOfAudio, visibleCurrTime);
});
volumeLevel.addEventListener("input", volumeProgress);
progress.addEventListener("click", (e) => {
  rewindAudio(e, AUDIO);
});
progress.addEventListener("mousemove", (e) => {
  if (mousedown) {
    rewindAudio(e, AUDIO);
  }
});
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

//-----------------small PLAYER
buttonPlaySmall.addEventListener("click", () => {
  playAudio(AUDIO_SMALL, buttonPlaySmall);
});
volumeLevelSmall.addEventListener("change", (e) => {
  changeVolume(e, AUDIO_SMALL, buttonVolumeSmall);
});
volumeLevelSmall.addEventListener("mousemove", (e) => {
  changeVolume(e, AUDIO_SMALL, buttonVolumeSmall);
});
buttonVolumeSmall.addEventListener("click", () => {
  muteVolume(AUDIO_SMALL, buttonVolumeSmall, volumeLevelSmall);
});
AUDIO_SMALL.addEventListener("timeupdate", () => {
  audioProgress(AUDIO_SMALL, progressSmallOfAudio, visibleCurrTimeSmall);
});
volumeLevelSmall.addEventListener("input", volumeProgress);
progressSmall.addEventListener("click", (e) => {
  rewindAudio(e, AUDIO_SMALL);
});
progressSmall.addEventListener("mousemove", (e) => {
  if (mousedown) {
    rewindAudio(e, AUDIO_SMALL);
  }
});
progressSmall.addEventListener("mousedown", () => (mousedown = true));
progressSmall.addEventListener("mouseup", () => (mousedown = false));

//-------------------------------------------------------------------

let currentVolume;
let currentValue;
let mousedown = false;
//воспроизведение видео
function playAudio(track, btnPlay) {
  if (track.paused) {
    track.play();
    btnPlay.classList.add("pausebtn");
  } else {
    track.pause();
    btnPlay.classList.remove("pausebtn");
  }
}

//звук видео
function changeVolume(e, track, btnVolume) {
  track.volume = e.target.value; //регулирование громкости
  //   AUDIO.volume = this.value; //регулирование громкости

  if (e.target.value === e.target.min) {
    //мьют при отст звука
    btnVolume.classList.add("mute");
  } else btnVolume.classList.remove("mute");
}

//цвет ползунка звука
function volumeProgress() {
  const value = this.value;
  //   console.log(value);
  this.style.background = `linear-gradient( to right, #212a43 0%, #212a43 ${
    value * 100
  }%, #fff ${value * 100}%, #fff 100% )`;
}

//кнопка звука
function muteVolume(track, btnVolume, volLvl) {
  if (track.volume !== 0) {
    currentVolume = track.volume;
    track.volume = 0;
    btnVolume.classList.add("mute");
    currentValue = volLvl.value;
    volLvl.value = 0;
    volLvl.style.background = `linear-gradient( to right, #212a43 0%, #212a43 0%, #fff 0%, #fff 0% )`;
  } else {
    track.volume = currentVolume;
    btnVolume.classList.remove("mute");
    volLvl.value = currentValue;
    volLvl.style.background = `linear-gradient( to right, #212a43 0%, #212a43 ${
      volLvl.value * 100
    }%, #fff ${volLvl.value * 100}%, #fff 100% )`;
  }
}

//прогресс-бар
function audioProgress(track, audioProgr, time) {
  let currProgress = (track.currentTime / track.duration) * 100;
  audioProgr.style.flexBasis = `${currProgress}%`;
  //   console.log("AUDIO.duration",AUDIO.duration);
  //   console.log("AUDIO.currentTime",AUDIO.currentTime);

  if (currProgress == 100) buttonPlay.classList.remove("pausebtn");

  time.innerHTML = getTime(track.currentTime);
  //   visibleDuration.innerHTML = getTime(AUDIO.duration);

  BTN_NEXT.addEventListener("click", () => {
    audioProgr.style.flexBasis = `0%`;
  });
}

//перемотка видео

function rewindAudio(e, track) {
  //   console.log(e);
  const rewindTime = (e.offsetX / progress.offsetWidth) * track.duration;
  track.currentTime = rewindTime;
}

export { AUDIO, AUDIO_SMALL, buttonPlay, visibleDuration };

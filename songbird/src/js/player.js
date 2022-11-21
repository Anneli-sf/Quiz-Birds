import { birdsDataEn } from "./dataBirds";
import { getTime } from "./helpers";
import { BTN_NEXT, NAMES_COLL } from "./second-page";

//----------------MAIN PLAYER
const progress = document.querySelector("#progress");
const progressOfAudio = document.querySelector("#progress-filled");

const buttonPlay = document.querySelector("#playbtn");
const buttonVolume = document.querySelector("#volumebtn");
const volumeLevel = document.querySelector("#volume-level");
const visibleCurrTime = document.querySelector("#curr-time");
const visibleDuration = document.querySelector("#duration");

const AUDIO = new Audio();
// console.log(AUDIO.src);

//-----------------small PLAYER
const progressSmall = document.querySelector("#small-progress");
const progressSmallOfAudio = document.querySelector("#small-progress-filled");

const buttonPlaySmall = document.querySelector("#small-playbtn");
const buttonVolumeSmall = document.querySelector("#small-volumebtn");
const volumeLevelSmall = document.querySelector("#small-volume-level");
const visibleCurrTimeSmall = document.querySelector("#small-curr-time");
const visibleDurationSmall = document.querySelector("#small-duration");

const AUDIO_SMALL = new Audio();
// console.log(AUDIO_SMALL.src);

let currentVolume;
let currentValue;
let mousedown = false;

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
  muteVolume(AUDIO, buttonVolume, volumeLevel, currentVolume, currentValue);
});
AUDIO.addEventListener("timeupdate", () => {
  audioProgress(AUDIO, progressOfAudio, visibleCurrTime, buttonPlay);
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

let currentVolumeSmall;
let currentValueSmall;
let mousedownSmall = false;

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
  muteVolume(
    AUDIO_SMALL,
    buttonVolumeSmall,
    volumeLevelSmall,
    currentVolumeSmall,
    currentValueSmall
  );
});
AUDIO_SMALL.addEventListener("timeupdate", () => {
  audioProgress(
    AUDIO_SMALL,
    progressSmallOfAudio,
    visibleCurrTimeSmall,
    buttonPlaySmall
  );
});
volumeLevelSmall.addEventListener("input", volumeProgress);
progressSmall.addEventListener("click", (e) => {
  rewindAudio(e, AUDIO_SMALL);
});
progressSmall.addEventListener("mousemove", (e) => {
  if (mousedownSmall) {
    rewindAudio(e, AUDIO_SMALL);
  }
});

progressSmall.addEventListener("mousedown", () => (mousedownSmall = true));
progressSmall.addEventListener("mouseup", () => (mousedownSmall = false));

//-------------------------------------------------------------------

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
function muteVolume(track, btnVolume, volLvl, currVol, currVal) {
  if (track.volume !== 0) {
    currVol = track.volume;
    track.volume = 0;
    btnVolume.classList.add("mute");
    currVal = volLvl.value;
    volLvl.value = 0;
    volLvl.style.background = `linear-gradient( to right, #212a43 0%, #212a43 0%, #fff 0%, #fff 0% )`;
  } else {
    track.volume = currVol;
    btnVolume.classList.remove("mute");
    volLvl.value = currVal;
    volLvl.style.background = `linear-gradient( to right, #212a43 0%, #212a43 ${
      volLvl.value * 100
    }%, #fff ${volLvl.value * 100}%, #fff 100% )`;
  }
}

//прогресс-бар
function audioProgress(track, audioProgr, time, btnPlay) {
  let currProgress = (track.currentTime / track.duration) * 100;
  audioProgr.style.flexBasis = `${currProgress}%`;
  //   console.log("AUDIO.duration",AUDIO.duration);
  //   console.log("AUDIO.currentTime",AUDIO.currentTime);

  if (currProgress == 100) btnPlay.classList.remove("pausebtn");

  time.innerHTML = getTime(track.currentTime);

  BTN_NEXT.addEventListener("click", () => {
    audioProgr.style.flexBasis = `0%`;
    AUDIO.pause();
    AUDIO_SMALL.pause();
  });

  NAMES_COLL.forEach((item) => {
    item.addEventListener("click", () => {
      audioProgr.style.flexBasis = `0%`;
    });
  });
}

//перемотка видео

function rewindAudio(e, track) {
  //   console.log(e);
  const rewindTime = (e.offsetX / progress.offsetWidth) * track.duration;
  track.currentTime = rewindTime;
}

export {
  AUDIO,
  AUDIO_SMALL,
  buttonPlay,
  buttonPlaySmall,
  visibleDuration,
  visibleDurationSmall,
};

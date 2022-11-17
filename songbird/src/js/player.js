import { birdsDataEn } from "./dataBirds";

// const poster = document.querySelector('.poster');
// const videoBtn = document.querySelector('.play-hover');

const player = document.querySelector(".player-controls");
// const video = player.querySelector('.mainvideo');
const progress = player.querySelector(".progress");
const progressOfAudio = player.querySelector(".progress-filled");

const buttonPlay = player.querySelector(".playbtn");
const buttonVolume = player.querySelector(".volumebtn");
const volumeLevel = player.querySelector(".volume-level");

const AUDIO = new Audio();
let isPlay = false;
let trackNum = 0;

AUDIO.src = birdsDataEn[0][trackNum].audio;

console.log(AUDIO.src);
// AUDIO.play();

// function startAudio() {
//   AUDIO.currentTime = 0;
//   AUDIO.play();
//   isPlay = true;
// }

// function playAudio() {
//   AUDIO.src = playList[trackNum].src;
//   const trackName = document.querySelectorAll(".play-item");

//   if (!isPlay) {
//     startAudio();
//     BTN_PLAY.classList.toggle("pause");
//     trackName[trackNum].classList.add("active");
//   } else {
//     AUDIO.pause();
//     isPlay = false;
//     BTN_PLAY.classList.toggle("pause");
//     trackName[trackNum].classList.remove("active");
//   }
// }

//воспроизведение видео
function playAudio() {
  if (AUDIO.paused) {
    AUDIO.play();

    changeBtn();
  } else {
    AUDIO.pause();

    changeBtn();
  }
}

// video.addEventListener('click', playVideo);
buttonPlay.addEventListener("click", playAudio);
// videoBtn.addEventListener('click', playVideo);

//кнопка play/pause
function changeBtn() {
//   if (e.target.classList.contains("playbtn")) {
//     buttonPlay.classList.toggle("pausebtn");
//   }

if (buttonPlay.closest(".pausebtn"))
    buttonPlay.classList.remove("pausebtn");
    else buttonPlay.classList.add("pausebtn");
  
}

// video.addEventListener('click', changeBtn);

// videoBtn.addEventListener('click', changeBtn);
// videoBtn.addEventListener('play', changeBtn);
// videoBtn.addEventListener('pause', changeBtn);

buttonPlay.addEventListener("click", changeBtn);
buttonPlay.addEventListener("play", changeBtn);
buttonPlay.addEventListener("pause", changeBtn);

//звук видео
function changeVolume() {
  // video.volume = e.target.value;
  AUDIO.volume = this.value; //регулирование громкости

  if (this.value === this.min) {
    //мьют при отст звука
    buttonVolume.classList.add("mute");
  } else buttonVolume.classList.remove("mute");
}

function nullVolume() {
  AUDIO.value = 0;
}

volumeLevel.addEventListener("change", changeVolume);
volumeLevel.addEventListener("mousemove", changeVolume);

//цвет ползунка

volumeLevel.addEventListener("input", function () {
  const value = this.value;
  console.log(value);
  this.style.background = `linear-gradient( to right, #212a43 0%, #212a43 ${
    value * 100
  }%, #fff ${value * 100}%, #fff 100% )`;
});

//кнопка звука

let currentVolume;
let currentValue;

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

buttonVolume.addEventListener("click", muteVolume);

//прогресс-бар

function audioProgress() {
  const currProgress = (AUDIO.currentTime / AUDIO.duration) * 100;
  progressOfAudio.style.flexBasis = `${currProgress}%`;
  // console.log(currProgress);

  if (currProgress == 100) buttonPlay.classList.remove("pausebtn");
}

AUDIO.addEventListener("timeupdate", audioProgress);

//перемотка видео

function rewindAudio(e) {
  console.log(e);
  const rewindTime = (e.offsetX / progress.offsetWidth) * AUDIO.duration;
  AUDIO.currentTime = rewindTime;
}

let mousedown = false;
progress.addEventListener("click", rewindAudio);
progress.addEventListener("mousemove", (e) => {
  if (mousedown) {
    rewindAudio(e);
  }
});
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

// const poster = document.querySelector('.poster');
// const videoBtn = document.querySelector('.play-hover');
 

const player = document.querySelector('.player-controls');
// const video = player.querySelector('.mainvideo');
const progress = player.querySelector('.progress');
const progressOfVideo = player.querySelector('.progress-filled');

const buttonPlay = player.querySelector('.playbtn');
const buttonVolume = player.querySelector('.volumebtn');
const volumeLevel = player.querySelector('.volume-level');

//воспроизведение видео
// function playVideo() {
//     if (video.paused) {
//         video.play();
//         poster.classList.add('unactive');
//         videoBtn.classList.add('unactive');
//         changeBtn();
      
//     } else {
//         video.pause();
//         videoBtn.classList.remove('unactive');
//         changeBtn();
//     }
// };

// video.addEventListener('click', playVideo);
// buttonPlay.addEventListener('click', playVideo);
// videoBtn.addEventListener('click', playVideo);

//кнопка play/pause
function changeBtn(icon) {
    if (icon.target.classList.contains('playbtn') 
    
    || icon.target.classList.contains('play-hover')  
    || icon.target.classList.contains('mainvideo')
     ) {
        buttonPlay.classList.toggle('pausebtn')};
};


// video.addEventListener('click', changeBtn);

// videoBtn.addEventListener('click', changeBtn);
// videoBtn.addEventListener('play', changeBtn);
// videoBtn.addEventListener('pause', changeBtn);

buttonPlay.addEventListener('click', changeBtn);
buttonPlay.addEventListener('play', changeBtn);
buttonPlay.addEventListener('pause', changeBtn);


//звук видео
function changeVolume(e) {
 // video.volume = e.target.value;
  video.volume = this.value;   //регулирование громкости

  if (this.value === this.min) { //мьют при отст звука
    buttonVolume.classList.add('mute');
   } else buttonVolume.classList.remove('mute');

};

function nullVolume () {
    video.value = 0;
}

volumeLevel.addEventListener('change', changeVolume);
volumeLevel.addEventListener('mousemove', changeVolume);

//цвет ползунка
  
volumeLevel.addEventListener('input', function() {
  const value = this.value;
  console.log(value);
  this.style.background = `linear-gradient( to right, #212a43 0%, #212a43 ${value*100}%, #fff ${value*100}%, #fff 100% )`;
});  

//кнопка звука

let currentVolume;
let currentValue;

function muteVolume () {
    if (video.volume !== 0) {
        currentVolume = video.volume;
        video.volume = 0;
        buttonVolume.classList.add('mute');
        currentValue = volumeLevel.value;
        volumeLevel.value = 0;
        volumeLevel.style.background = `linear-gradient( to right, #212a43 0%, #212a43 0%, #fff 0%, #fff 0% )`;
    } 
    else {
        video.volume = currentVolume;
        buttonVolume.classList.remove('mute');
        volumeLevel.value = currentValue;
        volumeLevel.style.background = `linear-gradient( to right, #212a43 0%, #212a43 ${volumeLevel.value*100}%, #fff ${volumeLevel.value*100}%, #fff 100% )`;
    }
}

buttonVolume.addEventListener('click', muteVolume);       

//прогресс-бар

function videoProgress() {
    const currProgress = (video.currentTime / video.duration) * 100;
    progressOfVideo.style.flexBasis = `${currProgress}%`;
}

// video.addEventListener('timeupdate', videoProgress);

//перемотка видео

function rewindVideo(e) {
    console.log(e);
    const rewindTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = rewindTime;
}

let mousedown = false;
progress.addEventListener('click', rewindVideo);
progress.addEventListener('mousemove', (e) => {
    if (mousedown) {
        rewindVideo(e);
    } 
    }
); 
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

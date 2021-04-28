const songs = [
  {
    audioSrc: "./audio/01 I Will Follow.mp3",
    imgsrc: "./images/I_Will_Follow.jpg",
    title: "I will follow",
    artist: "U2",
  },
  {
    audioSrc: "./audio/02 Twilight.mp3",
    imgsrc: "./images/Twilight.jpg",
    title: "Twilight",
    artist: "U2",
  },
  {
    audioSrc: "./audio/01 Burnout.mp3",
    imgsrc: "./images/greenday.jpg",
    title: "Burnout",
    artist: "Greenday",
  },
  {
    audioSrc: "./audio/01 Your Song.mp3",
    imgsrc: "./images/elton-joh.jpg",
    title: "Your Song",
    artist: "Elton John",
  },
  {
    audioSrc: "./audio/02 Daniel.mp3",
    imgsrc: "./images/elton-joh.jpg",
    title: "Daniel",
    artist: "Elton John",
  },
  {
    audioSrc: "./audio/02 Omaha.mp3",
    imgsrc: "./images/counting-crows.jpg",
    title: "Omaha",
    artist: "Counting Crows",
  },
  {
    audioSrc: "./audio/03 Without Me.mp3",
    imgsrc: "./images/eminem.jpg",
    title: "Without Me",
    artist: "Eminem",
  },
  {
    audioSrc: "./audio/13 In the End.mp3",
    imgsrc: "./images/greenday.jpg",
    title: "In the End",
    artist: "Greenday",
  },
  {
    audioSrc: "./audio/15 Still Don't Give a Fuck.mp3",
    imgsrc: "./images/eminem.jpg",
    title: "Still Don't Give a Fuck",
    artist: "Eminem",
  },
  {
    audioSrc: "./audio/16 Lose Yourself.mp3",
    imgsrc: "./images/eminem.jpg",
    title: "Lose Yourself",
    artist: "eminem",
  },
];

const playpause = document.querySelector(".play-pause");
const back = document.querySelector(".back");
const front = document.querySelector(".front");
const audio = document.querySelector("audio");
const image = document.querySelector("img");
const progressbar = document.querySelector(".progress-bar");
const progressfill = document.querySelector(".progress-filled");
const song = document.querySelector(".song");
const artist = document.querySelector(".artist");

function runProgess() {
  let playing =
    audio.currentTime *
    (progressbar.getBoundingClientRect().width / audio.duration);
  progressfill.style.width = `${playing}px`;
}

function scrubTime(e) {
  let play = e.offsetX;
  audio.currentTime =
    play * (audio.duration / progressbar.getBoundingClientRect().width);
  progressfill.style.width = `${play}px`;
}

function toggleAudio() {
  if (playpause.classList.contains("active")) {
    playpause.classList.remove("active");
    playpause.textContent = "PAUSE";
    audio.pause();
  } else {
    playpause.classList.add("active");
    playpause.textContent = "PLAY";
    audio.play();
  }
}

let index = 1;
function nextSong() {
  // console.log(index);
  if (index >= songs.length) {
    index = 0;
  }
  image.src = songs[index].imgsrc;
  image.alt = songs[index].title;
  audio.src = songs[index].audioSrc;
  song.textContent = songs[index].title;
  artist.textContent = songs[index].artist;
  toggleAudio();
  audio.currentTime = 0;
  // audio.play();
  index++;
}
function prevSong() {
  // console.log(index);
  if (index < 0) {
    index = songs.length - 1;
  }
  image.src = songs[index].imgsrc || "./images/music.png";
  image.alt = songs[index].title;
  audio.src = songs[index].audioSrc;
  song.textContent = songs[index].title;
  artist.textContent = songs[index].artist;
  toggleAudio();
  audio.currentTime = 0;
  // audio.play();
  index--;
}

playpause.addEventListener("click", toggleAudio);
audio.addEventListener("timeupdate", runProgess);
progressbar.addEventListener("click", scrubTime);
front.addEventListener("click", nextSong);
back.addEventListener("click", prevSong);

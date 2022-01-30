const songlist = document.querySelector(".songs-list");
const voldn = document.querySelector(".voldown");
const volup = document.querySelector(".volup");
const volslider = document.querySelector(".volslider");
const timeslider = document.querySelector(".timeslider");
const curr_time = document.querySelector(".current-time");
const total_duration = document.querySelector(".total-duration");
const prevsong = document.querySelector(".prevsong");
const playpause = document.querySelector(".playpause");
const nextsong = document.querySelector(".nextsong");
const Sname = document.querySelector(".name");
const Simage = document.querySelector(".icon");

const songs = [
  {
    name: "paagla",
    id: 1,
    src: "https://www.pagalworld.pw/GpE34Kg9Gq/113514/145587-pagla-akhil-mp3-song-300.jpg",
  },
  {
    name: "kade kade",
    id: 2,
    src: "https://c.saavncdn.com/556/Kade-Kade-Punjabi-2021-20210612051002-500x500.jpg",
  },
  {
    name: "janam",
    id: 3,
    src: "https://pagalnew.com/coverimages/Janam-Qismat-2-500-500.jpg",
  },
  {
    name: "ranjha",
    id: 4,
    src: "https://a10.gaanacdn.com/gn_img/song/XYybzNrb2g/ybzEg61rW2/size_l_1628084846.jpg",
  },
  {
    name: "supna",
    id: 5,
    src: "https://4.bp.blogspot.com/-tPrzRIgP5c8/WJWkhLUb1QI/AAAAAAAAEW0/7GObfdVhIsQbosCh_p76gerwzKjIRfodACLcB/s200-c/Supna%2BLyrics%2BAmrinder%2BGill.jpg",
  },
  {
    name: "soch",
    id: 6,
    src: "https://paglasongs.com/uploads/thumb/sft4/1926_4.jpg",
  },
  {
    name: "fakira",
    id: 7,
    src: "https://i.scdn.co/image/ab67616d0000b273f196a183399e3eb4fcc377db",
  },
  {
    name: "yaari",
    id: 8,
    src: "https://a10.gaanacdn.com/images/albums/91/2637091/crop_480x480_2637091.jpg",
  },
  {
    name: "vail",
    id: 9,
    src: "https://c.saavncdn.com/896/Vail-Punjabi-2020-20200626122024-500x500.jpg",
  },
  {
    name: "viah",
    id: 10,
    src: "https://i1.sndcdn.com/artworks-000533471823-krgrg5-t500x500.jpg",
  },
];

let isPlaying = false;
let track_index = 0;
let c = 0; //For keeping the count of first song
let updateTimer;

const audio = new Audio("./assets/paagla.mp3");

for (let song of songs) {
  const div = document.createElement("div");
  div.innerText = song.name;
  div.setAttribute("id", song.id);
  div.classList.add("song-item");
  songlist.append(div);
}

playpause.addEventListener("click", function () {
  audio.paused ? audio.play() : audio.pause();
  if (playpause.children[0].classList.contains("fa-play-circle")) {
    isPlaying = false;
    playpause.children[0].classList.remove("fa-play-circle");
    playpause.children[0].classList.add("fa-pause-circle");
  } else {
    isPlaying = true;
    playpause.children[0].classList.remove("fa-pause-circle");
    playpause.children[0].classList.add("fa-play-circle");
  }
  if (c === 0) {
    Sname.innerText = "PAAGLA";
    Simage.style.backgroundImage = "url(" + songs[track_index].src + ")";
  }
  c = c + 1;
  Sname.innerText = songs[track_index].name.toUpperCase();
  Simage.style.backgroundImage = "url(" + songs[track_index].src + ")";
  updateTimer = setInterval(seekUpdate, 1000);
});

audio.addEventListener("timeupdate", function () {
  const currentProgress = (audio.currentTime * 100) / audio.duration;
  timeslider.value = currentProgress;
});

timeslider.addEventListener("change", function () {
  const updatedTime = parseInt((audio.duration * timeslider.value) / 100);
  audio.currentTime = updatedTime;
});

volslider.addEventListener(
  "input",
  function () {
    audio.volume = volslider.value / 100;
  },
  false
);

songlist.addEventListener("click", function (e) {
  const songName = e.target.innerText;
  Sname.innerText = songName.toUpperCase();
  audio.src = `./assets/${songName}.mp3`;
  audio.currentTime = 0;
  audio.play();
  playpause.children[0].classList.remove("fa-play-circle");
  playpause.children[0].classList.add("fa-pause-circle");
  isPlaying = true;
  for (let song of songs) {
    if (song.name === songName) {
      track_index = song.id - 1;
    }
  }
  Simage.style.backgroundImage = "url(" + songs[track_index].src + ")";
  updateTimer = setInterval(seekUpdate, 1000);
});

function seekTo() {
  let seekto = audio.duration * (timeslider.value / 100);
  audio.currentTime = seekto;
}

function seekUpdate() {
  let seekPosition = 0;
  if (!isNaN(audio.duration)) {
    seekPosition = audio.currentTime * (100 / audio.duration);
    timeslider.value = seekPosition;

    let currentMinutes = Math.floor(audio.currentTime / 60);
    let currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(audio.duration / 60);
    let durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

nextsong.addEventListener("click", function () {
  const songName = songs[track_index + 1].name;
  Sname.innerText = songName.toUpperCase();
  audio.src = `./assets/${songName}.mp3`;
  audio.currentTime = 0;
  audio.play();
  playpause.children[0].classList.remove("fa-play-circle");
  playpause.children[0].classList.add("fa-pause-circle");
  isPlaying = true;
  for (let song of songs) {
    if (song.name === songName) {
      track_index = song.id - 1;
    }
  }
  Simage.style.backgroundImage = "url(" + songs[track_index].src + ")";
  updateTimer = setInterval(seekUpdate, 1000);
});

prevsong.addEventListener("click", function () {
  const songName = songs[track_index - 1].name;
  Sname.innerText = songName.toUpperCase();
  audio.src = `./assets/${songName}.mp3`;
  audio.currentTime = 0;
  audio.play();
  playpause.children[0].classList.remove("fa-play-circle");
  playpause.children[0].classList.add("fa-pause-circle");
  isPlaying = true;
  for (let song of songs) {
    if (song.name === songName) {
      track_index = song.id - 1;
    }
  }
  Simage.style.backgroundImage = "url(" + songs[track_index].src + ")";
  updateTimer = setInterval(seekUpdate, 1000);
});

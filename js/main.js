let icon = document.getElementsByClassName("icon")[0];

icon.addEventListener('click', responsive_control);

function responsive_control() {
  let x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var video = document.getElementById("pochaccoVid");
var btn = document.getElementById("vidBtn");

function pausePlay() {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="fa fa-pause"></i> Pause';
  } else {
    video.pause();
    btn.innerHTML = '<i class="fa fa-play"></i> Play';
  }
}

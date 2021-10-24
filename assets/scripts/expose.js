// expose.js

window.addEventListener('DOMContentLoaded', init);

var imageChosen;
var userChoice;
var audioChosen;
var volumeLevel;
var buttonClick;
function init() {
  const jsConfetti = new JSConfetti();
  userChoice = document.getElementById("horn-select");
  imageChosen = document.querySelectorAll("img");
  audioChosen = document.querySelector(".hidden");

  userChoice.addEventListener("change", (event) => {
    imageChosen[0].src = `assets/images/${event.target.value}.svg`;  
    audioChosen.src = `assets/audio/${event.target.value}.mp3`;
  });

  volumeLevel = document.getElementById("volume");
  volumeLevel.addEventListener("change", event => {
    let volume = Number(volumeLevel.value);
    if (volume === 0) {
      imageChosen[1].src = "assets/icons/volume-level-0.svg";
    }
    if (volume >= 1 && volume < 33) {
      imageChosen[1].src = "assets/icons/volume-level-1.svg";
    }
    if (volume >= 33 && volume < 67) {
      imageChosen[1].src = "assets/icons/volume-level-2.svg";
    }
    if (volume >= 67) {
      imageChosen[1].src = "assets/icons/volume-level-3.svg";
    }
    audioChosen.volume = volume/100;
  });

  buttonClick = document.querySelector("button");
  buttonClick.addEventListener("click", event => {
    if (userChoice.value == "party-horn" && audioChosen.volume != 0) {
      jsConfetti.addConfetti();
    }
    if (audioChosen.volume != 0) {
      audioChosen.play();
    }
  });
}

function changeLevel() {
  if (volumeLevel.value == 0) {
    imageChosen[1].src = "assets/icons/volume-level-0.svg";
  }
  if (volumeLevel.value >= 1 && volumeLevel.value < 33) {
    imageChosen[1].src = "assets/icons/volume-level-1.svg";
  }
  if (volumeLevel.value >= 33 && volumeLevel.value < 67) {
    imageChosen[1].src = "assets/icons/volume-level-2.svg";
  }
  if (volumeLevel.value >= 67) {
    imageChosen[1].src = "assets/icons/volume-level-3.svg";
  }
  volumeLevel.volume = volumeLevel.value/100;
}
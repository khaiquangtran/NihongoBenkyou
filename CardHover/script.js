const playBtn = document.getElementById("icon");
const audio = document.getElementById("audio");
playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  }
});

const playBtndog = document.getElementById("icondog");
const audiodog = document.getElementById("audiodog");
playBtndog.addEventListener("click", function () {
  if (audiodog.paused) {
    audiodog.play();
  }
  alert("Dog chưa có audio");
});

const playBtncow = document.getElementById("iconcow");
const audiocow = document.getElementById("audiocow");
playBtncow.addEventListener("click", function () {
  if (audiocow.paused) {
    audiocow.play();
  }
  alert("cow chưa có audio");
});

const playBtntrainStation = document.getElementById("icontrainStation");
const audiotrainStation = document.getElementById("audiotrainStation");
playBtntrainStation.addEventListener("click", function () {
  if (audiotrainStation.paused) {
    audiotrainStation.play();
  }
  alert("train Station chưa có audio");
});

const playBtntemple = document.getElementById("icontemple");
const audiotemple = document.getElementById("audiotemple");
playBtntemple.addEventListener("click", function () {
  if (audiotemple.paused) {
    audiotemple.play();
  }
  alert("temple chưa có audio");
});
const playBtn = document.getElementById("playBtn");
const audio = document.getElementById("audio");

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    alert("Mình chưa thêm âm thanh bạn gì ơi!");
  }
});
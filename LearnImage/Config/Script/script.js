document.querySelectorAll(".card").forEach(function (card) {
  card.addEventListener("click", function () {
    this.classList.toggle("card1");
  });
});

var randomChange = document.getElementById("Background");
images = [
  "../Config/Background/background.png",
  "../Config/Background/background1.png",
  "../Config/Background/background2.jpg",
  "../Config/Background/background3.jpg",
  "../Config/Background/background4.jpg",
  "../Config/Background/background5.jpg",
];
var imgCount = images.length;
var number = Math.floor(Math.random() * imgCount);

window.onload = function () {
  randomChange.style.backgroundImage = "url(" + images[number] + ")";
};

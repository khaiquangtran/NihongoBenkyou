import { images } from './../../../Home/images.js';

document.querySelectorAll(".card").forEach(function (card) {
  card.addEventListener("click", function () {
    this.classList.toggle("card1");
  });
});

var randomChange = document.getElementById("Background");
var imgCount = images.length;
var number = Math.floor(Math.random() * imgCount);

window.onload = function () {
  randomChange.style.backgroundImage = "url(" + images[number] + ")";
};

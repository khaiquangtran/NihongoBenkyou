document.querySelectorAll(".card").forEach(function (card) {
  card.addEventListener("click", function () {
    this.classList.toggle("card1");
    var japanText = card.getElementsByClassName("textJapan")[0].textContent;
    console.log(japanText);
    try {
      const speech = new SpeechSynthesisUtterance();
      speech.text = japanText;
      speech.lang = "ja";
      window.speechSynthesis.speak(speech);
    }
    catch (error) {
      console.error("Error in translation:", error);
      alert("The text could not be translated. Please try again.");
    }
  });

});

import { images } from './../../../Home/images.js';
var randomChange = document.getElementById("Background");
var imgCount = images.length;
var number = Math.floor(Math.random() * imgCount);

window.onload = function () {
  randomChange.style.backgroundImage = "url(" + images[number] + ")";
};

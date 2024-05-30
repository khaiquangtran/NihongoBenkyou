document.querySelectorAll(".card").forEach(function (card) {
  card.addEventListener("click", function () {
    this.classList.toggle("card1");
  });
});

var randomChange = document.getElementById('Background');
images = ['../Background/background.png', '../Background/background1.png', '../Background/background2.jpg', '../Background/background3.jpg',
    '../Background/background4.jpg', '../Background/background5.jpg'];
var imgCount = images.length;
var number = Math.floor(Math.random() * imgCount);

window.onload = function () {
    randomChange.style.backgroundImage = 'url(' + images[number] + ')';
}
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
  });

  // Common click event handler for all buttons
  document
    .querySelectorAll(".open_button")
    .forEach(function (button, index) {
      button.addEventListener("click", function () {
        handleButtonClick(index);
      });
    });

  // Function to handle button click
  function handleButtonClick(index) {
    var colors = [
      "rgb(206, 17, 17)",
      "rgb(0, 140, 255)",
      "rgb(10, 184, 111)",
      "rgb(211, 122, 7)",
      "rgb(118, 163, 12)",
      "rgb(180, 10, 47)",
      "rgb(35, 99, 19)",
      "rgb(0, 68, 255)",
      "rgb(218, 12, 218)",
      "rgb(54, 94, 77)",
    ];

    var box = document.querySelector(".box");
    var message = document.querySelector(".message");
    var heading = document.querySelector(".heading");
    var mean = document.querySelector(".mean");
    heading.style.backgroundColor = colors[index%10];
    box.classList.add("box_active");
    var romajiData;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        romajiData = JSON.parse(this.responseText);
        message.innerHTML = "/" + romajiData[index].romaji + "/";
        mean.innerHTML = romajiData[index].mean;
      }
    };
    // console.log();
    xhr.open("GET", "romaji.json", true);
    xhr.send();
  }

  // Close button click event handler
  document
    .querySelector(".close_button")
    .addEventListener("click", function () {
      document.querySelector(".box").classList.remove("box_active");
    });
});

var randomChange = document.getElementById("Background");
images = [
  "../Config/Background/background.jpg",
  "../Config/Background/background1.jpg",
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
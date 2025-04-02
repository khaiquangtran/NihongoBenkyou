document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
  });

  function randomSlides() {
    let container = document.getElementById("wrapper");
    let slides = Array.from(container.children);

    slides.sort(() => Math.random() - 0.5);

    const fragment = document.createDocumentFragment();
    slides.forEach((slide) => fragment.appendChild(slide));

    container.innerHTML = "";
    container.appendChild(fragment);

    swiper.update();
  }

  document.getElementById("shuffleBtn").addEventListener("click", randomSlides);

  // Common click event handler for all buttons
  document.querySelectorAll(".open_button").forEach(function (button, index) {
    button.addEventListener("click", function () {
      handleButtonClick(parseInt(button.value));
      // console.log(button.value);
    });
  });

  // Function to handle button click
  function handleButtonClick(index) {
    var colors = [
      "rgb(206, 17, 17)",
      "rgb(18, 18, 19)",
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
    // var heading = document.querySelector(".heading");
    var mean = document.querySelector(".mean");
    // heading.style.backgroundColor = "white";
    box.classList.add("box_active");
    var romajiData;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        romajiData = JSON.parse(this.responseText);
        message.innerHTML = romajiData.vocabulary[index].romaji;
        mean.innerHTML = romajiData.vocabulary[index].meaning;
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

const images = [
  "../../Home/Images/home_background.jpg",
  "../../Home/Images/home_background1.jpg",
  "../../Home/Images/home_background2.jpg",
  "../../Home/Images/home_background3.jpg",
  "../../Home/Images/home_background4.jpg",
  "../../Home/Images/home_background5.jpg",
  "../../Home/Images/home_background6.jpg",
  "../../Home/Images/home_background7.jpg",
  "../../Home/Images/home_background8.jpg",
  "../../Home/Images/home_background9.jpg",
  "../../Home/Images/home_background10.jpg",
  "../../Home/Images/home_background11.jpg",
  "../../Home/Images/home_background12.jpg",
  "../../Home/Images/home_background13.jpg",
  "../../Home/Images/home_background14.jpg",
  "../../Home/Images/home_background15.jpg",
  "../../Home/Images/home_background16.jpg",
  "../../Home/Images/home_background17.jpg",
  "../../Home/Images/home_background18.jpg",
  "../../Home/Images/home_background19.jpg",
  "../../Home/Images/home_background20.jpg",
  "../../Home/Images/home_background21.jpg",
  "../../Home/Images/home_background22.jpg",
  "../../Home/Images/background23.jpg",
  "../../Home/Images/background24.jpg",
  "../../Home/Images/background25.jpg",
  "../../Home/Images/background26.jpg",
  "../../Home/Images/background27.jpg",
  "../../Home/Images/background28.jpg",
];

var randomChange = document.getElementById("Background");
var imgCount = images.length;
var number = Math.floor(Math.random() * imgCount);

window.onload = function () {
  randomChange.style.backgroundImage = "url(" + images[number] + ")";
};

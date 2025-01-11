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

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var japanElements = document.getElementsByClassName("japan");
var romajiElements = document.getElementsByClassName("romaji");
var vietnamElements = document.getElementsByClassName("vietnam");
var englishElements = document.getElementsByClassName("english");

function changeVisibility() {
  for (let i = 0; i < Math.min(romajiElements.length, vietnamElements.length, englishElements.length); i++) {
    romajiElements[i].style.visibility = romajiElements[i].style.visibility === "hidden" ? "visible" : "hidden";
    vietnamElements[i].style.visibility = vietnamElements[i].style.visibility === "hidden" ? "visible" : "hidden";
    englishElements[i].style.visibility = englishElements[i].style.visibility === "hidden" ? "visible" : "hidden";
  }

  var icon = document.querySelector(".hideBtn i");
  if (icon.classList.contains("fa-eye")) {
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
    for (let i = 0; i < japanElements.length; i++) {
      japanElements[i].style.borderRadius = "20px";
    }

  } else {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
    for (let i = 0; i < japanElements.length; i++) {
      japanElements[i].style.borderRadius = "20px 20px 0 0";
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const swiperSlides = document.querySelectorAll(".swiper-slide");

  swiperSlides.forEach(slide => {
    slide.addEventListener("click", (event) => {
      const japanElement = slide.querySelector(".japan");
      const rect = japanElement.getBoundingClientRect();
      const isInDialog =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (japanElement && isInDialog) {
        let japanText = japanElement.textContent.trim();
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
      } else {
        console.log("No data");
      }
    });
  });
});
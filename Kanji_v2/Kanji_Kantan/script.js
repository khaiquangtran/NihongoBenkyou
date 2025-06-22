document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
  });

  const wrapper = document.getElementById("wrapper");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const box = document.querySelector(".box");
  const message = document.querySelector(".message");
  const mean = document.querySelector(".mean");
  const closeBtn = document.querySelector(".close_button");

  function randomSlides() {
    const slides = Array.from(wrapper.children);
    slides.sort(() => Math.random() - 0.5);

    const fragment = document.createDocumentFragment();
    slides.forEach(slide => fragment.appendChild(slide));

    wrapper.innerHTML = "";
    wrapper.appendChild(fragment);

    swiper.update();
  }

  shuffleBtn.addEventListener("click", randomSlides);

  document.querySelectorAll(".open_button").forEach(button => {
    button.addEventListener("click", () => {
      handleButtonClick(Number(button.value));
    });
  });

  async function handleButtonClick(index) {
    box.classList.add("box_active");
    try {
      const response = await fetch("romaji.json");
      if (!response.ok) throw new Error("Failed to load data");
      const romajiData = await response.json();
      const vocab = romajiData.vocabulary[index];
      if (!vocab) throw new Error("Invalid vocabulary index");

      message.innerHTML = vocab.meaning;
      mean.innerHTML = vocab.submeaning;

      const key = localStorage.getItem("content");
      if (key) {
        speak(key, vocab.meaning);
      }
    } catch (err) {
      alert("Error loading vocabulary: " + err.message);
    }
  }

  closeBtn.addEventListener("click", () => {
    box.classList.remove("box_active");
  });
});

// Background image logic
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

window.onload = () => {
  const randomChange = document.getElementById("Background");
  if (randomChange) {
    const number = Math.floor(Math.random() * images.length);
    randomChange.style.backgroundImage = `url(${images[number]})`;
  }
};

async function speak(keyConnect, text) {
  try {
    const response = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${keyConnect}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: { text },
          voice: {
            languageCode: "vi-VN",
            name: "vi-VN-Standard-C",
          },
          audioConfig: { audioEncoding: "MP3" },
        }),
      }
    );

    if (!response.ok) {
      alert("❌ Please choose again KEY file");
      return;
    }
    const data = await response.json();

    if (data.audioContent) {
      const audio = new Audio("data:audio/mp3;base64," + data.audioContent);
      audio.play();
    } else {
      console.error("Error audioContent", data);
      alert("Can't play!");
    }
  } catch (err) {
    alert("Error with text-to-speech: " + err.message);
  }
}
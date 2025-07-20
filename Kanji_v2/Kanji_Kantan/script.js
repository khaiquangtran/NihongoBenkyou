document.addEventListener("DOMContentLoaded", async () => {
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

  // Load vocabulary data once
  let romajiData = null;
  try {
    const response = await fetch("romaji.json");
    if (!response.ok) throw new Error("Failed to load romaji.json");
    romajiData = await response.json();
  } catch (err) {
    console.error("Vocabulary Load Error:", err);
  }

  // Shuffle cards with debounce
  let shuffleTimeout = null;
  shuffleBtn.addEventListener("click", () => {
    if (shuffleTimeout) return;
    shuffleTimeout = setTimeout(() => (shuffleTimeout = null), 500);
    shuffleSlides();
  });

  function shuffleSlides() {
    const slides = Array.from(wrapper.children);
    slides.sort(() => Math.random() - 0.5);
    wrapper.replaceChildren(...slides);
    swiper.update();
  }

  // Handle flashcard click
  document.querySelectorAll(".open_button").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.value);
      if (romajiData && romajiData.vocabulary && romajiData.vocabulary[index]) {
        showVocabulary(romajiData.vocabulary[index]);
      } else {
        alert("❌ Không tìm thấy từ vựng tương ứng!");
      }
    });
  });

  function showVocabulary(vocab) {
    box.classList.add("box_active");
    message.textContent = vocab.meaning;
    mean.textContent = vocab.submeaning;

    const key = localStorage.getItem("content");
    if (key) speak(key, vocab.meaning);
  }

  closeBtn.addEventListener("click", () => {
    box.classList.remove("box_active");
  });
});

// Set random background on load
window.onload = () => {
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
    "../../Home/Images/background28.jpg"
  ];
  const bg = document.getElementById("Background");
  const number = Math.floor(Math.random() * images.length);
  bg.style.backgroundImage = `url(${images[number]})`;
};

// TTS function
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
      audio.play().catch(err => console.error("Audio play failed:", err));
    } else {
      alert("⚠️ Không thể phát âm thanh!");
    }
  } catch (err) {
    console.error("TTS Error:", err);
    alert("Lỗi khi phát âm: " + err.message);
  }
}

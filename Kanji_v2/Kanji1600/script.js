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
let content;
const wrapperCount = 21;
var initSlide;
var swiper;

function loadSlideContent(slideNumber) {
  const slide = document.querySelector(`.swiper-slide[data-slide="${slideNumber}"]`);
  if (!slide || slide.dataset.loaded === "true") return;

  fetch(`slides/slide${slideNumber}.html`)
    .then(res => res.text())
    .then(html => {
      slide.innerHTML = html;
      slide.dataset.loaded = "true";
      addCardEventListeners(slideNumber);
    })
    .catch(err => console.error("Error when load slide", slideNumber, err));
}

function addCardEventListeners(slideNumber) {
  const shuffleBtn = document.getElementById(`shuffleBtn${slideNumber}`);
  if (shuffleBtn) {
    shuffleBtn.addEventListener("click", () => randomSlides(`wrapper${slideNumber}`));
  }

  const swapBtn = document.getElementById(`swapBtn${slideNumber}`);
  if (swapBtn) {
    swapBtn.addEventListener("click", () => swapContent(`.page${slideNumber}`));
  }

  const openBtn = document.getElementById(`openBtn${slideNumber}`);
  if (openBtn) {
    openBtn.addEventListener("click", () => autoOpenPage(`wrapper${slideNumber}`));
  }

  const container = document.getElementById(`wrapper${slideNumber}`);
  if (container) {
    container.addEventListener("click", function (e) {
      const card = e.target.closest(".card");
      if (!card) return;

      const check = card.classList.toggle("card1");
      const japanText = card.querySelector(".mean")?.textContent;
      if (content && japanText && check) speakThrottled(content, japanText);
    });
  }
}

window.onload = function () {
  randomChange.style.backgroundImage = "url(" + images[number] + ")";
  content = localStorage.getItem('content');

  for (let i = 1; i <= wrapperCount; i++) {
    const btnShuff = document.getElementById(`shuffleBtn${i}`);
    if (btnShuff) {
      btnShuff.addEventListener("click", () => randomSlides(`wrapper${i}`));
    }
    const btnSwap = document.getElementById(`swapBtn${i}`);
    if (btnSwap) {
      btnSwap.addEventListener("click", () => swapContent(`.page${i}`));
    }
  }

  const savedSlide = localStorage.getItem('lastSlideIndex1600');
  initSlide = savedSlide ? parseInt(savedSlide) : 0;
  swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    initialSlide: initSlide,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        loadSlideContent(initSlide + 1);
      },
      slideChange: function () {
        const newIndex = this.realIndex + 1;
        localStorage.setItem('lastSlideIndex1600', this.realIndex);
        loadSlideContent(newIndex);
      }
    }
  });
};

const containers = document.querySelectorAll('.card-container');
containers.forEach(container => {
  container.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    if (!card) return;

    const check = card.classList.toggle("card1");
    if (check) {
      const japanText = card.querySelector(".mean")?.textContent;
      if (content && japanText) {
        speakThrottled(content, japanText);
      }
    }
  });
});

let lastCall = 0;
function speakThrottled(keyConnect, text) {
  const now = Date.now();
  if (now - lastCall < 1000) return;
  lastCall = now;
  speak(keyConnect, text);
}

async function speak(keyConnect, text) {
  const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${keyConnect}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      input: { text: text },
      voice: {
        languageCode: 'vi-VN',
        name: 'vi-VN-Standard-C'
      },
      audioConfig: {
        audioEncoding: 'MP3'
      }
    })
  });

  if (!response.ok) {
    alert('❌ Please choose again KEY file');
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
}

function randomSlides(passId) {
  let container = document.getElementById(passId);
  let slides = Array.from(container.children);

  slides.sort(() => Math.random() - 0.5);

  const fragment = document.createDocumentFragment();
  slides.forEach((slide) => fragment.appendChild(slide));

  container.innerHTML = "";
  container.appendChild(fragment);

  swiper.update();
}

function swapContent(passPage) {
  const cards = document.querySelectorAll(passPage);
  cards.forEach(card => {
    const front = card.querySelector('.front');
    const back = card.querySelector('.back');

    const temp = front.innerHTML;
    front.innerHTML = back.innerHTML;
    back.innerHTML = temp;
  });
}

let intervalId = null;
let index = 0;
let autoOpenPageId = "";
function autoOpenPage(passId) {
  const container = document.getElementById(passId);
  const cards = Array.from(container.querySelectorAll(".card"));
  if (autoOpenPageId !== passId) {
    intervalId = null;
    index = 0;
    cards.forEach(card => card.classList.remove("card1"));
    autoOpenPageId = passId;
  }
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
    return;
  }
  if (index === cards.length) {
    cards.forEach(card => card.classList.remove("card1"));
    index = 0;
    return;
  }

  intervalId = setInterval(() => {
    if (index < cards.length) {
      cards[index].classList.toggle("card1");
      const japanText = cards[index].querySelector(".mean")?.textContent;
      if (content && japanText) {
        speakThrottled(content, japanText);
      }
      index++;
    } else {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 2000);
}

for (let i = 1; i <= wrapperCount; i++) {
  const btn = document.getElementById(`openBtn${i}`);
  if (btn) btn.addEventListener("click", () => autoOpenPage(`wrapper${i}`));
}

window.onresize = function () {
  const maxHeight = window.screen.height;
  const maxWidth = window.screen.width;
  const curHeight = window.innerHeight;
  const curWidth = window.innerWidth;
  const tolerance = 10;

  const isFullscreen = Math.abs(curWidth - maxWidth) < tolerance &&
                       Math.abs(curHeight - maxHeight) < tolerance;

  document.querySelectorAll(".card-container").forEach(card => {
    card.classList.toggle('fullscreenmode', isFullscreen);
  });
};
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

document.querySelectorAll(".card").forEach(function (card) {
  card.addEventListener("click", function () {
    var check = this.classList.toggle("card1");
    if (check) {
      var japanText = card.getElementsByClassName("mean")[0].textContent;
      // console.log(japanText);
      const content = localStorage.getItem('content');
      // const file = filePath.files[0];
      // console.log(content)
      if(content) {
        speak(content, japanText);
      }
    }
  });
});

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
        name: 'vi-VN-Standard-C' // can use A, B, C...
      },
      audioConfig: {
        audioEncoding: 'MP3'
      }
    })
  });

  if (!response.ok) {
    alert('❌ Please choose again KEY file');
    return;
    // data.audioContent là base64 của file MP3
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

function randomSlides() {
  let container = document.getElementById("wrapper1");
  let slides = Array.from(container.children);

  slides.sort(() => Math.random() - 0.5);

  const fragment = document.createDocumentFragment();
  slides.forEach((slide) => fragment.appendChild(slide));

  container.innerHTML = "";
  container.appendChild(fragment);

  // swiper.update();
}

document.getElementById("shuffleBtn1").addEventListener("click", randomSlides);

function swapContent() {
  const cards = document.querySelectorAll('.page1');
  cards.forEach(card => {
    const front = card.querySelector('.front');
    const back = card.querySelector('.back');

    // Store temp
    const temp = front.innerHTML;
    front.innerHTML = back.innerHTML;
    back.innerHTML = temp;
  })
}
document.getElementById("swapBtn1").addEventListener("click", swapContent);


function randomSlides2() {
  let container = document.getElementById("wrapper2");
  let slides = Array.from(container.children);

  slides.sort(() => Math.random() - 0.5);

  const fragment = document.createDocumentFragment();
  slides.forEach((slide) => fragment.appendChild(slide));

  container.innerHTML = "";
  container.appendChild(fragment);

  // swiper.update();
}
document.getElementById("shuffleBtn2").addEventListener("click", randomSlides2);

function swapContent2() {
  const cards = document.querySelectorAll('.page2');
  cards.forEach(card => {
    const front = card.querySelector('.front');
    const back = card.querySelector('.back');

    // Store temp
    const temp = front.innerHTML;
    front.innerHTML = back.innerHTML;
    back.innerHTML = temp;
  })
}
document.getElementById("swapBtn3").addEventListener("click", swapContent2);

function randomSlides3() {
  let container = document.getElementById("wrapper3");
  let slides = Array.from(container.children);

  slides.sort(() => Math.random() - 0.5);

  const fragment = document.createDocumentFragment();
  slides.forEach((slide) => fragment.appendChild(slide));

  container.innerHTML = "";
  container.appendChild(fragment);

  // swiper.update();
}
document.getElementById("shuffleBtn3").addEventListener("click", randomSlides3);

function swapContent3() {
  const cards = document.querySelectorAll('.page3');
  cards.forEach(card => {
    const front = card.querySelector('.front');
    const back = card.querySelector('.back');

    // Store temp
    const temp = front.innerHTML;
    front.innerHTML = back.innerHTML;
    back.innerHTML = temp;
  })
}
document.getElementById("swapBtn2").addEventListener("click", swapContent3);
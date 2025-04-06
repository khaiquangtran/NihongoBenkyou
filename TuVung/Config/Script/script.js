import { images } from './../../../Home/images.js';

document.querySelectorAll(".card").forEach(function (card) {
  card.addEventListener("click", function () {
    var check = this.classList.toggle("card1");
    if (check) {
      var japanText = card.getElementsByClassName("textJapan")[0].textContent;
      // console.log(japanText);
      const content = localStorage.getItem('content');
      // const file = filePath.files[0];
      console.log(content)
      if(content) {
        speak(content, japanText);
      }
    }
  });
});

var randomChange = document.getElementById("Background");
var imgCount = images.length;
var number = Math.floor(Math.random() * imgCount);

window.onload = function () {
  randomChange.style.backgroundImage = "url(" + images[number] + ")";
};

async function speak(keyConnect, text) {
  const response = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${keyConnect}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      input: { text: text },
      voice: {
        languageCode: 'ja-JP',
        name: 'ja-JP-Wavenet-A' // can use A, B, C...
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
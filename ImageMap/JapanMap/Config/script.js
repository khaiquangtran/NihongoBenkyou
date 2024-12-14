const speechJapan = [
    "北海道",
    "東京",
    "京都",
    "広島",
    "奈良",
    "大阪",
    "青森",
    "秋田",
    "岩手",
    "山形",
    "宮城",
    "福島"
  ];

const dialogs = [
    document.getElementById("hokkaido"),
    document.getElementById("tokyo"),
    document.getElementById("kyouto"),
    document.getElementById("hiroshima"),
    document.getElementById("nara"),
    document.getElementById("osaka"),
    document.getElementById("aomori"),
    document.getElementById("akita"),
    document.getElementById("iwate"),
    document.getElementById("yamagata"),
    document.getElementById("miyagi"),
    document.getElementById("fukushima"),
];

var background = document.getElementById("Background");

document.getElementById("imagehokkaido").addEventListener("click", hokkaido);
const hokkaidoimage1 = document.getElementById("hokkaidoimage1");
const hokkaidoimage2 = document.getElementById("hokkaidoimage2");
const hokkaidoimage3 = document.getElementById("hokkaidoimage3");
function hokkaido() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[0];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  hokkaidoimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[0][0] + ".gif";
  hokkaidoimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[0][1] + ".gif";
  hokkaidoimage3.src = "../../GIF/kanji/gif/150x150/" + speechJapan[0][2] + ".gif";

  background.style.backgroundImage = "url(Images/hokkaido.jpg)";

  showDialog(dialogs[0]);
}

document.getElementById("imagetokyo").addEventListener("click", tokyo);
const tokyoimage1 = document.getElementById("tokyoimage1");
const tokyoimage2 = document.getElementById("tokyoimage2");
function tokyo() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[1];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  tokyoimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[1][0] + ".gif";
  tokyoimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[1][1] + ".gif";

  background.style.backgroundImage = "url(Images/tokyo.jpg)";

  showDialog(dialogs[1]);
}

document.getElementById("imagekyouto").addEventListener("click", kyouto);
const kyoutoimage1 = document.getElementById("kyoutoimage1");
const kyoutoimage2 = document.getElementById("kyoutoimage2");
function kyouto() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[2];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  kyoutoimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[2][0] + ".gif";
  kyoutoimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[2][1] + ".gif";

  background.style.backgroundImage = "url(Images/kyouto.jpg)";

  showDialog(dialogs[2]);
}

document.getElementById("imagehiroshima").addEventListener("click", hiroshima);
const hiroshimaimage1 = document.getElementById("hiroshimaimage1");
const hiroshimaimage2 = document.getElementById("hiroshimaimage2");
function hiroshima() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[3];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  hiroshimaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[3][0] + ".gif";
  hiroshimaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[3][1] + ".gif";

  background.style.backgroundImage = "url(Images/hiroshima.jpg)";

  showDialog(dialogs[3]);
}

document.getElementById("imagenara").addEventListener("click", nara);
const naraimage1 = document.getElementById("naraimage1");
const naraimage2 = document.getElementById("naraimage2");
function nara() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[4];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  naraimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[4][0] + ".gif";
  naraimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[4][1] + ".gif";

  background.style.backgroundImage = "url(Images/nara.webp)";

  showDialog(dialogs[4]);
}

document.getElementById("imageosaka").addEventListener("click", osaka);
const osakaimage1 = document.getElementById("osakaimage1");
const osakaimage2 = document.getElementById("osakaimage2");
function osaka() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[5];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  osakaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[5][0] + ".gif";
  osakaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[5][1] + ".gif";

  background.style.backgroundImage = "url(Images/osaka.jpg)";

  showDialog(dialogs[5]);
}

document.getElementById("imageaomori").addEventListener("click", aomori);
const aomoriimage1 = document.getElementById("aomoriimage1");
const aomoriimage2 = document.getElementById("aomoriimage2");
function aomori() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[6];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  aomoriimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[6][0] + ".gif";
  aomoriimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[6][1] + ".gif";

  background.style.backgroundImage = "url(Images/aomori.jpg)";

  showDialog(dialogs[6]);
}

document.getElementById("imageakita").addEventListener("click", akita);
const akitaimage1 = document.getElementById("akitaimage1");
const akitaimage2 = document.getElementById("akitaimage2");
function akita() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[7];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  akitaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[7][0] + ".gif";
  akitaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[7][1] + ".gif";

  background.style.backgroundImage = "url(Images/akita.webp)";

  showDialog(dialogs[7]);
}

document.getElementById("imageiwate").addEventListener("click", iwate);
const iwateimage1 = document.getElementById("iwateimage1");
const iwateimage2 = document.getElementById("iwateimage2");
function iwate() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[8];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  iwateimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[8][0] + ".gif";
  iwateimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[8][1] + ".gif";

  background.style.backgroundImage = "url(Images/iwate.jpg)";

  showDialog(dialogs[8]);
}

document.getElementById("imageyamagata").addEventListener("click", yamagata);
const yamagataimage1 = document.getElementById("yamagataimage1");
const yamagataimage2 = document.getElementById("yamagataimage2");
function yamagata() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[9];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  yamagataimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[9][0] + ".gif";
  yamagataimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[9][1] + ".gif";

  background.style.backgroundImage = "url(Images/yamagata.jpg)";

  showDialog(dialogs[9]);
}

document.getElementById("imagemiyagi").addEventListener("click", miyagi);
const miyagiimage1 = document.getElementById("miyagiimage1");
const miyagiimage2 = document.getElementById("miyagiimage2");
function miyagi() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[10];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  miyagiimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[10][0] + ".gif";
  miyagiimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[10][1] + ".gif";

  background.style.backgroundImage = "url(Images/miyagi.jpg)";

  showDialog(dialogs[10]);
}

document.getElementById("imagefukushima").addEventListener("click", fukushima);
const fukushimaimage1 = document.getElementById("fukushimaimage1");
const fukushimaimage2 = document.getElementById("fukushimaimage2");
function fukushima() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[11];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  fukushimaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[11][0] + ".gif";
  fukushimaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[11][1] + ".gif";

  background.style.backgroundImage = "url(Images/fukushima.jpg)";

  showDialog(dialogs[11]);
}

function showDialog(dialog) {
  dialog.showModal();
}

dialogs.forEach((dialog, index) => {
  console.log(dialog)
  dialog.addEventListener("mousedown", (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!isInDialog) {
      dialog.close();
      switch(index){
        case 0:
          {
            hokkaidoimage1.src = "";
            hokkaidoimage2.src = "";
            hokkaidoimage3.src = "";
            break;
          }
          case 1:
          {
            tokyoimage1.src = "";
            tokyoimage2.src = "";
            break;
          }
          case 2:
          {
            kyoutoimage1.src = "";
            kyoutoimage2.src = "";
            break;
          }
          case 3:
          {
            hiroshimaimage1.src = "";
            hiroshimaimage2.src = "";
            break;
          }
          case 4:
          {
            naraimage1.src = "";
            naraimage2.src = "";
            break;
          }
          case 5:
          {
            osakaimage1.src = "";
            osakaimage2.src = "";
            break;
          }
          case 6:
          {
            aomoriimage1.src = "";
            aomoriimage2.src = "";
            break;
          }
          case 7:
          {
            akitaimage1.src = "";
            akitaimage2.src = "";
            break;
          }
          case 8:
          {
            iwateimage1.src = "";
            iwateimage2.src = "";
            break;
          }
          case 9:
          {
            yamagataimage1.src = "";
            yamagataimage2.src = "";
            break;
          }
          case 10:
          {
            miyagiimage1.src = "";
            miyagiimage2.src = "";
            break;
          }
          case 11:
          {
            fukushimaimage1.src = "";
            fukushimaimage2.src = "";
            break;
          }
      }

      // alert("close");
    } else {
      try {
        const speech = new SpeechSynthesisUtterance();
        speech.text = speechJapan[index];
        speech.lang = "ja";
        window.speechSynthesis.speak(speech);
      } catch (error) {
        console.error("Error in translation:", error);
        alert("The text could not be translated. Please try again.");
      }
    }
  });
  // console.log(dialog)
});

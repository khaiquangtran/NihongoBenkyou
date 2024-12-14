import { images } from './../../../Home/images.js';

var randomChange = document.getElementById("Background");
var imgCount = images.length;
var number = Math.floor(Math.random() * imgCount);

window.onload = function () {
  randomChange.style.backgroundImage = "url(" + images[number] + ")";
};

const Kanji = [
  "体",
];

const speechJapan = [
  "からだ",
];

const dialogs = [
    document.getElementById("bodydialog"),
];

document.getElementById("imagebody").addEventListener("click", body);
const bodyimage = document.getElementById("bodyimage");
function body() {
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

  bodyimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[0] + ".gif";

  showDialog(dialogs[0]);
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
            bodyimage.src = "";
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

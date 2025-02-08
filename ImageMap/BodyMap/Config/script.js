import { images } from './../../../Home/images.js';

var randomChange = document.getElementById("Background");
var imgCount = images.length;
var number = Math.floor(Math.random() * imgCount);

window.onload = function () {
  randomChange.style.backgroundImage = "url(" + images[number] + ")";
};

const Kanji = [
  "体",
  "頭",
  "髪",
  "目",
  "耳",
  "舌",
  "首",
  "腕",
  "指",
  "足",
  "眉",
  "顔",
  "鼻",
  "口唇",
  "口",
  "手",
  "肘",
  "膝",
  "脚"
];

const speechJapan = [
  "からだ",
  "あたま",
  "かみ",
  "め",
  "みみ",
  "した",
  "くび",
  "うで",
  "ゆび",
  "あし",
  "まゆ",
  "かお",
  "はな",
  "こうしん",
  "くち",
  "て",
  "ひじ",
  "ひざ",
  "あし"
];

const dialogs = [
    document.getElementById("bodydialog"),
    document.getElementById("headdialog"),
    document.getElementById("hairdialog"),
    document.getElementById("eyedialog"),
    document.getElementById("eardialog"),
    document.getElementById("tonguedialog"),
    document.getElementById("neckdialog"),
    document.getElementById("armdialog"),
    document.getElementById("fingerdialog"),
    document.getElementById("footdialog"),
    document.getElementById("eyebrowdialog"),
    document.getElementById("facedialog"),
    document.getElementById("nosedialog"),
    document.getElementById("lipdialog"),
    document.getElementById("mouthdialog"),
    document.getElementById("handdialog"),
    document.getElementById("elbowdialog"),
    document.getElementById("kneedialog"),
    document.getElementById("legdialog"),
];

document.getElementById("imageleg").addEventListener("click", leg);
const legimage = document.getElementById("legimage");
function leg() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[18];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  legimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[18] + ".gif";

  showDialog(dialogs[18]);
}

document.getElementById("imageknee").addEventListener("click", knee);
const kneeimage = document.getElementById("kneeimage");
function knee() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[17];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  kneeimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[17] + ".gif";

  showDialog(dialogs[17]);
}

document.getElementById("imageelbow").addEventListener("click", elbow);
const elbowimage = document.getElementById("elbowimage");
function elbow() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[16];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  elbowimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[16] + ".gif";

  showDialog(dialogs[16]);
}

document.getElementById("imagehand").addEventListener("click", hand);
const handimage = document.getElementById("handimage");
function hand() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[15];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  handimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[15] + ".gif";

  showDialog(dialogs[15]);
}

document.getElementById("imagemouth").addEventListener("click", mouth);
const mouthimage = document.getElementById("mouthimage");
function mouth() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[14];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  mouthimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[14] + ".gif";

  showDialog(dialogs[14]);
}

document.getElementById("imagelip").addEventListener("click", lip);
const lipimage = document.getElementById("lipimage");
function lip() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[13];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  lipimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[13][0] + ".gif";
  lipimage1.src = "../../GIF/kanji/gif/150x150/" + Kanji[13][1] + ".gif";

  showDialog(dialogs[13]);
}

document.getElementById("imagenose").addEventListener("click", nose);
const noseimage = document.getElementById("noseimage");
function nose() {
  try {
    const speech = new SpeechSynthesisUtterance();
    speech.text = speechJapan[12];
    speech.lang = "ja";
    window.speechSynthesis.speak(speech);
  }
  catch (error) {
    console.error("Error in translation:", error);
    alert("The text could not be translated. Please try again.");
  }

  noseimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[12] + ".gif";

  showDialog(dialogs[12]);
}

document.getElementById("imageface").addEventListener("click", face);
const faceimage = document.getElementById("faceimage");
function face() {
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

  faceimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[11] + ".gif";

  showDialog(dialogs[11]);
}

document.getElementById("imageeyebrow").addEventListener("click", eyebrow);
const eyebrowimage = document.getElementById("eyebrowimage");
function eyebrow() {
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

  eyebrowimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[10] + ".gif";

  showDialog(dialogs[10]);
}

document.getElementById("imagefoot").addEventListener("click", foot);
const footimage = document.getElementById("footimage");
function foot() {
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

  footimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[9] + ".gif";

  showDialog(dialogs[9]);
}

document.getElementById("imagefinger").addEventListener("click", finger);
const fingerimage = document.getElementById("fingerimage");
function finger() {
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

  fingerimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[8] + ".gif";

  showDialog(dialogs[8]);
}

document.getElementById("imagearm").addEventListener("click", arm);
const armimage = document.getElementById("armimage");
function arm() {
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

  armimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[7] + ".gif";

  showDialog(dialogs[7]);
}

document.getElementById("imageneck").addEventListener("click", neck);
const neckimage = document.getElementById("neckimage");
function neck() {
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

  neckimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[6] + ".gif";

  showDialog(dialogs[6]);
}

document.getElementById("imagetongue").addEventListener("click", tongue);
const tongueimage = document.getElementById("tongueimage");
function tongue() {
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

  tongueimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[5] + ".gif";

  showDialog(dialogs[5]);
}

document.getElementById("imageear").addEventListener("click", ear);
const earimage = document.getElementById("earimage");
function ear() {
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

  earimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[4] + ".gif";

  showDialog(dialogs[4]);
}

document.getElementById("imageeye").addEventListener("click", eye);
const eyeimage = document.getElementById("eyeimage");
function eye() {
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

  eyeimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[3] + ".gif";

  showDialog(dialogs[3]);
}

document.getElementById("imagehair").addEventListener("click", hair);
const hairimage = document.getElementById("hairimage");
function hair() {
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

  hairimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[2] + ".gif";

  showDialog(dialogs[2]);
}

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

document.getElementById("imagehead").addEventListener("click", head);
const headimage = document.getElementById("headimage");
function head() {
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

  headimage.src = "../../GIF/kanji/gif/150x150/" + Kanji[1] + ".gif";

  showDialog(dialogs[1]);
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
        case 1:
        {
          headimage.src = "";
          break;
        }
        case 2:
        {
          hairimage.src = "";
          break;
        }
        case 3:
        {
          eyeimage.src = "";
          break;
        }
        case 4:
        {
          earimage.src = "";
          break;
        }
        case 5:
        {
          tongueimage.src = "";
          break;
        }
        case 6:
        {
          neckimage.src = "";
          break;
        }
        case 7:
        {
          armimage.src = "";
          break;
        }
        case 8:
        {
          fingerimage.src = "";
          break;
        }
        case 9:
        {
          footimage.src = "";
          break;
        }
        case 10:
        {
          eyebrowimage.src = "";
          break;
        }
        case 11:
        {
          faceimage.src = "";
          break;
        }
        case 12:
        {
          noseimage.src = "";
          break;
        }
        case 13:
        {
          lipimage.src = "";
          lipimage1.src = "";
          break;
        }
        case 14:
        {
          mouthimage.src = "";
          break;
        }
        case 15:
        {
          handimage.src = "";
          break;
        }
        case 16:
        {
          elbowimage.src = "";
          break;
        }
        case 17:
        {
          kneeimage.src = "";
          break;
        }
        case 18:
        {
          legimage.src = "";
          break;
        }
        default:
          break;
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

import { images } from './../../Home/images.js';

var randomChange = document.getElementById("Background");
var imgCount = images.length;
var number = Math.floor(Math.random() * imgCount);
window.onload = function () {
  randomChange.style.backgroundImage = "url(" + images[number] + ")";
};

const speechText = [
  "あ", "い", "う", "え", "お",
  "か", "き", "く", "け", "こ",
  "さ", "し", "す", "せ", "そ",
  "た", "ち", "つ", "て", "と",
  "な", "に", "ぬ", "ね", "の",
  "は", "ひ", "ふ", "へ", "ほ",
  "ま", "み", "む", "め", "も",
  "や",       "ゆ",       "よ",
  "ら", "り", "る", "れ", "ろ",
  "わ",                   "を",
  "ん",
  "が", "ぎ", "ぐ", "げ", "ご",
  "ざ", "じ", "ず", "ぜ", "ぞ",
  "だ", "ぢ", "づ", "で", "ど",
  "ば", "び", "ぶ", "べ", "ぼ",
  "ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
  "きゃ",     "きゅ",     "きょ",
  "しゃ",     "しゅ",     "しょ",
  "ちゃ",     "ちゅ",     "ちょ",
  "にゃ",     "にゅ",     "にょ",
  "ひゃ",     "ひゅ",     "ひょ",
  "みゃ",     "みゅ",     "みょ",
  "りゃ",     "りゅ",     "りょ",
  "ぎゃ",     "ぎゅ",     "ぎょ",
  "じゃ",     "じゅ",     "じょ",
  "びゃ",     "びゅ",     "びょ",
  "ぴゃ",     "ぴゅ",     "ぴょ"
]

const overlay = document.getElementById("overlay");

const dialogs = [
  document.getElementById("dialogA"),
  document.getElementById("dialogI"),
  document.getElementById("dialogU"),
  document.getElementById("dialogE"),
  document.getElementById("dialogO"),
  document.getElementById("dialogKA"),
  document.getElementById("dialogKI"),
  document.getElementById("dialogKU"),
  document.getElementById("dialogKE"),
  document.getElementById("dialogKO"),
  document.getElementById("dialogSA"),
  document.getElementById("dialogSHI"),
  document.getElementById("dialogSU"),
  document.getElementById("dialogSE"),
  document.getElementById("dialogSO"),
  document.getElementById("dialogTA"),
  document.getElementById("dialogCHI"),
  document.getElementById("dialogTSU"),
  document.getElementById("dialogTE"),
  document.getElementById("dialogTO"),
  document.getElementById("dialogNA"),
  document.getElementById("dialogNI"),
  document.getElementById("dialogNU"),
  document.getElementById("dialogNE"),
  document.getElementById("dialogNO"),
  document.getElementById("dialogHA"),
  document.getElementById("dialogHI"),
  document.getElementById("dialogFU"),
  document.getElementById("dialogHE"),
  document.getElementById("dialogHO"),
  document.getElementById("dialogMA"),
  document.getElementById("dialogMI"),
  document.getElementById("dialogMU"),
  document.getElementById("dialogME"),
  document.getElementById("dialogMO"),
  document.getElementById("dialogYA"),
  document.getElementById("dialogYU"),
  document.getElementById("dialogYO"),
  document.getElementById("dialogRA"),
  document.getElementById("dialogRI"),
  document.getElementById("dialogRU"),
  document.getElementById("dialogRE"),
  document.getElementById("dialogRO"),
  document.getElementById("dialogWA"),
  document.getElementById("dialogOO"),
  document.getElementById("dialogN"),
  document.getElementById("dialogGA"),
  document.getElementById("dialogGI"),
  document.getElementById("dialogGU"),
  document.getElementById("dialogGE"),
  document.getElementById("dialogGO"),
  document.getElementById("dialogZA"),
  document.getElementById("dialogJI"),
  document.getElementById("dialogZU"),
  document.getElementById("dialogZE"),
  document.getElementById("dialogZO"),
  document.getElementById("dialogDA"),
  document.getElementById("dialogJJ"),
  document.getElementById("dialogZUU"),
  document.getElementById("dialogDE"),
  document.getElementById("dialogDO"),
  document.getElementById("dialogBA"),
  document.getElementById("dialogBI"),
  document.getElementById("dialogBU"),
  document.getElementById("dialogBE"),
  document.getElementById("dialogBO"),
  document.getElementById("dialogPA"),
  document.getElementById("dialogPI"),
  document.getElementById("dialogPU"),
  document.getElementById("dialogPE"),
  document.getElementById("dialogPO"),
  document.getElementById("dialogKYA"),
  document.getElementById("dialogKYU"),
  document.getElementById("dialogKYO"),
  document.getElementById("dialogSHA"),
  document.getElementById("dialogSHU"),
  document.getElementById("dialogSHO"),
  document.getElementById("dialogCHA"),
  document.getElementById("dialogCHU"),
  document.getElementById("dialogCHO"),
  document.getElementById("dialogNYA"),
  document.getElementById("dialogNYU"),
  document.getElementById("dialogNYO"),
  document.getElementById("dialogHYA"),
  document.getElementById("dialogHYU"),
  document.getElementById("dialogHYO"),
  document.getElementById("dialogMYA"),
  document.getElementById("dialogMYU"),
  document.getElementById("dialogMYO"),
  document.getElementById("dialogRYA"),
  document.getElementById("dialogRYU"),
  document.getElementById("dialogRYO"),
  document.getElementById("dialogGYA"),
  document.getElementById("dialogGYU"),
  document.getElementById("dialogGYO"),
  document.getElementById("dialogJA"),
  document.getElementById("dialogJU"),
  document.getElementById("dialogJO"),
  document.getElementById("dialogBYA"),
  document.getElementById("dialogBYU"),
  document.getElementById("dialogBYO"),
  document.getElementById("dialogPYA"),
  document.getElementById("dialogPYU"),
  document.getElementById("dialogPYO"),
];
document.getElementById("showA").addEventListener("click", showA);
function showA() {
  showDialog(dialogs[0]);
}
document.getElementById("showI").addEventListener("click", showI);
function showI() {
  showDialog(dialogs[1]);
}
document.getElementById("showU").addEventListener("click", showU);
function showU() {
  showDialog(dialogs[2]);
}
document.getElementById("showE").addEventListener("click", showE);
function showE() {
  showDialog(dialogs[3]);
}
document.getElementById("showO").addEventListener("click", showO);
function showO() {
  showDialog(dialogs[4]);
}
document.getElementById("showKA").addEventListener("click", showKA);
function showKA() {
  showDialog(dialogs[5]);
}
document.getElementById("showKI").addEventListener("click", showKI);
function showKI() {
  showDialog(dialogs[6]);
}
document.getElementById("showKU").addEventListener("click", showKU);
function showKU() {
  showDialog(dialogs[7]);
}
document.getElementById("showKE").addEventListener("click", showKE);
function showKE() {
  showDialog(dialogs[8]);
}
document.getElementById("showKO").addEventListener("click", showKO);
function showKO() {
  showDialog(dialogs[9]);
}
document.getElementById("showSA").addEventListener("click", showSA);
function showSA() {
  showDialog(dialogs[10]);
}
document.getElementById("showSHI").addEventListener("click", showSHI);
function showSHI() {
  showDialog(dialogs[11]);
}
document.getElementById("showSU").addEventListener("click", showSU);
function showSU() {
  showDialog(dialogs[12]);
}
document.getElementById("showSE").addEventListener("click", showSE);
function showSE() {
  showDialog(dialogs[13]);
}
document.getElementById("showSO").addEventListener("click", showSO);
function showSO() {
  showDialog(dialogs[14]);
}
document.getElementById("showTA").addEventListener("click", showTA);
function showTA() {
  showDialog(dialogs[15]);
}
document.getElementById("showCHI").addEventListener("click", showCHI);
function showCHI() {
  showDialog(dialogs[16]);
}
document.getElementById("showTSU").addEventListener("click", showTSU);
function showTSU() {
  showDialog(dialogs[17]);
}
document.getElementById("showTE").addEventListener("click", showTE);
function showTE() {
  showDialog(dialogs[18]);
}
document.getElementById("showTO").addEventListener("click", showTO);
function showTO() {
  showDialog(dialogs[19]);
}
document.getElementById("showNA").addEventListener("click", showNA);
function showNA() {
  showDialog(dialogs[20]);
}
document.getElementById("showNI").addEventListener("click", showNI);
function showNI() {
  showDialog(dialogs[21]);
}
document.getElementById("showNU").addEventListener("click", showNU);
function showNU() {
  showDialog(dialogs[22]);
}
document.getElementById("showNE").addEventListener("click", showNE);
function showNE() {
  showDialog(dialogs[23]);
}
document.getElementById("showNO").addEventListener("click", showNO);
function showNO() {
  showDialog(dialogs[24]);
}
document.getElementById("showHA").addEventListener("click", showHA);
function showHA() {
  showDialog(dialogs[25]);
}
document.getElementById("showHI").addEventListener("click", showHI);
function showHI() {
  showDialog(dialogs[26]);
}
document.getElementById("showFU").addEventListener("click", showFU);
function showFU() {
  showDialog(dialogs[27]);
}
document.getElementById("showHE").addEventListener("click", showHE);
function showHE() {
  showDialog(dialogs[28]);
}
document.getElementById("showHO").addEventListener("click", showHO);
function showHO() {
  showDialog(dialogs[29]);
}
document.getElementById("showMA").addEventListener("click", showMA);
function showMA() {
  showDialog(dialogs[30]);
}
document.getElementById("showMI").addEventListener("click", showMI);
function showMI() {
  showDialog(dialogs[31]);
}
document.getElementById("showMU").addEventListener("click", showMU);
function showMU() {
  showDialog(dialogs[32]);
}
document.getElementById("showME").addEventListener("click", showME);
function showME() {
  showDialog(dialogs[33]);
}
document.getElementById("showMO").addEventListener("click", showMO);
function showMO() {
  showDialog(dialogs[34]);
}
document.getElementById("showYA").addEventListener("click", showYA);
function showYA() {
  showDialog(dialogs[35]);
}
document.getElementById("showYU").addEventListener("click", showYU);
function showYU() {
  showDialog(dialogs[36]);
}
document.getElementById("showYO").addEventListener("click", showYO);
function showYO() {
  showDialog(dialogs[37]);
}
document.getElementById("showRA").addEventListener("click", showRA);
function showRA() {
  showDialog(dialogs[38]);
}
document.getElementById("showRI").addEventListener("click", showRI);
function showRI() {
  showDialog(dialogs[39]);
}
document.getElementById("showRU").addEventListener("click", showRU);
function showRU() {
  showDialog(dialogs[40]);
}
document.getElementById("showRE").addEventListener("click", showRE);
function showRE() {
  showDialog(dialogs[41]);
}
document.getElementById("showRO").addEventListener("click", showRO);
function showRO() {
  showDialog(dialogs[42]);
}
document.getElementById("showWA").addEventListener("click", showWA);
function showWA() {
  showDialog(dialogs[43]);
}
document.getElementById("showOO").addEventListener("click", showOO);
function showOO() {
  showDialog(dialogs[44]);
}
document.getElementById("showN").addEventListener("click", showN);
function showN() {
  showDialog(dialogs[45]);
}
document.getElementById("showGA").addEventListener("click", showGA);
function showGA() {
  showDialog(dialogs[46]);
}
document.getElementById("showGI").addEventListener("click", showGI);
function showGI() {
  showDialog(dialogs[47]);
}
document.getElementById("showGU").addEventListener("click", showGU);
function showGU() {
  showDialog(dialogs[48]);
}
document.getElementById("showGE").addEventListener("click", showGE);
function showGE() {
  showDialog(dialogs[49]);
}
document.getElementById("showGO").addEventListener("click", showGO);
function showGO() {
  showDialog(dialogs[50]);
}
document.getElementById("showZA").addEventListener("click", showZA);
function showZA() {
  showDialog(dialogs[51]);
}
document.getElementById("showJI").addEventListener("click", showJI);
function showJI() {
  showDialog(dialogs[52]);
}
document.getElementById("showZU").addEventListener("click", showZU);
function showZU() {
  showDialog(dialogs[53]);
}
document.getElementById("showZE").addEventListener("click", showZE);
function showZE() {
  showDialog(dialogs[54]);
}
document.getElementById("showZO").addEventListener("click", showZO);
function showZO() {
  showDialog(dialogs[55]);
}
document.getElementById("showDA").addEventListener("click", showDA);
function showDA() {
  showDialog(dialogs[56]);
}
document.getElementById("showJJ").addEventListener("click", showJJ);
function showJJ() {
  showDialog(dialogs[57]);
}
document.getElementById("showZUU").addEventListener("click", showZUU);
function showZUU() {
  showDialog(dialogs[58]);
}
document.getElementById("showDE").addEventListener("click", showDE);
function showDE() {
  showDialog(dialogs[59]);
}
document.getElementById("showDO").addEventListener("click", showDO);
function showDO() {
  showDialog(dialogs[60]);
}
document.getElementById("showBA").addEventListener("click", showBA);
function showBA() {
  showDialog(dialogs[61]);
}
document.getElementById("showBI").addEventListener("click", showBI);
function showBI() {
  showDialog(dialogs[62]);
}
document.getElementById("showBU").addEventListener("click", showBU);
function showBU() {
  showDialog(dialogs[63]);
}
document.getElementById("showBE").addEventListener("click", showBE);
function showBE() {
  showDialog(dialogs[64]);
}
document.getElementById("showBO").addEventListener("click", showBO);
function showBO() {
  showDialog(dialogs[65]);
}
document.getElementById("showPA").addEventListener("click", showPA);
function showPA() {
  showDialog(dialogs[66]);
}
document.getElementById("showPI").addEventListener("click", showPI);
function showPI() {
  showDialog(dialogs[67]);
}
document.getElementById("showPU").addEventListener("click", showPU);
function showPU() {
  showDialog(dialogs[68]);
}
document.getElementById("showPE").addEventListener("click", showPE);
function showPE() {
  showDialog(dialogs[69]);
}
document.getElementById("showPO").addEventListener("click", showPO);
function showPO() {
  showDialog(dialogs[70]);
}
document.getElementById("showKYA").addEventListener("click", showKYA);
function showKYA() {
  showDialog(dialogs[71]);
}
document.getElementById("showKYU").addEventListener("click", showKYU);
function showKYU() {
  showDialog(dialogs[72]);
}
document.getElementById("showKYO").addEventListener("click", showKYO);
function showKYO() {
  showDialog(dialogs[73]);
}
document.getElementById("showSHA").addEventListener("click", showSHA);
function showSHA() {
  showDialog(dialogs[74]);
}
document.getElementById("showSHU").addEventListener("click", showSHU);
function showSHU() {
  showDialog(dialogs[75]);
}
document.getElementById("showSHO").addEventListener("click", showSHO);
function showSHO() {
  showDialog(dialogs[76]);
}
document.getElementById("showCHA").addEventListener("click", showCHA);
function showCHA() {
  showDialog(dialogs[77]);
}
document.getElementById("showCHU").addEventListener("click", showCHU);
function showCHU() {
  showDialog(dialogs[78]);
}
document.getElementById("showCHO").addEventListener("click", showCHO);
function showCHO() {
  showDialog(dialogs[79]);
}
document.getElementById("showNYA").addEventListener("click", showNYA);
function showNYA() {
  showDialog(dialogs[80]);
}
document.getElementById("showNYU").addEventListener("click", showNYU);
function showNYU() {
  showDialog(dialogs[81]);
}
document.getElementById("showNYO").addEventListener("click", showNYO);
function showNYO() {
  showDialog(dialogs[82]);
}
document.getElementById("showHYA").addEventListener("click", showHYA);
function showHYA() {
  showDialog(dialogs[83]);
}
document.getElementById("showHYU").addEventListener("click", showHYU);
function showHYU() {
  showDialog(dialogs[84]);
}
document.getElementById("showHYO").addEventListener("click", showHYO);
function showHYO() {
  showDialog(dialogs[85]);
}
document.getElementById("showMYA").addEventListener("click", showMYA);
function showMYA() {
  showDialog(dialogs[86]);
}
document.getElementById("showMYU").addEventListener("click", showMYU);
function showMYU() {
  showDialog(dialogs[87]);
}
document.getElementById("showMYO").addEventListener("click", showMYO);
function showMYO() {
  showDialog(dialogs[88]);
}
document.getElementById("showRYA").addEventListener("click", showRYA);
function showRYA() {
  showDialog(dialogs[89]);
}
document.getElementById("showRYU").addEventListener("click", showRYU);
function showRYU() {
  showDialog(dialogs[90]);
}
document.getElementById("showRYO").addEventListener("click", showRYO);
function showRYO() {
  showDialog(dialogs[91]);
}
document.getElementById("showGYA").addEventListener("click", showGYA);
function showGYA() {
  showDialog(dialogs[92]);
}
document.getElementById("showGYU").addEventListener("click", showGYU);
function showGYU() {
  showDialog(dialogs[93]);
}
document.getElementById("showGYO").addEventListener("click", showGYO);
function showGYO() {
  showDialog(dialogs[94]);
}
document.getElementById("showJA").addEventListener("click", showJA);
function showJA() {
  showDialog(dialogs[95]);
}
document.getElementById("showJU").addEventListener("click", showJU);
function showJU() {
  showDialog(dialogs[96]);
}
document.getElementById("showJO").addEventListener("click", showJO);
function showJO() {
  showDialog(dialogs[97]);
}
document.getElementById("showBYA").addEventListener("click", showBYA);
function showBYA() {
  showDialog(dialogs[98]);
}
document.getElementById("showBYU").addEventListener("click", showBYU);
function showBYU() {
  showDialog(dialogs[99]);
}
document.getElementById("showBYO").addEventListener("click", showBYO);
function showBYO() {
  showDialog(dialogs[100]);
}
document.getElementById("showPYA").addEventListener("click", showPYA);
function showPYA() {
  showDialog(dialogs[101]);
}
document.getElementById("showPYU").addEventListener("click", showPYU);
function showPYU() {
  showDialog(dialogs[102]);
}
document.getElementById("showPYO").addEventListener("click", showPYO);
function showPYO() {
  showDialog(dialogs[103]);
}

function showDialog(dialog) {
  dialog.showModal();
  overlay.style.display = "block";
}

dialogs.forEach((dialog, index) => {
  dialog.addEventListener("mousedown", (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (!isInDialog) {
      dialog.close();
      overlay.style.display = "none";
    } else {
      const content = localStorage.getItem('content');
      const text = speechText[index];
      if(content && text) {
        speak(content, text);
      }
    }
  });
  // console.log(dialog)
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
        languageCode: 'ja-JP',
        name: 'ja-JP-Standard-A' // can use A, B, C...
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
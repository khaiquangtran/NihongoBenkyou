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
  "福島",
  "新潟",
  "富山",
  "長野",
  "山梨",
  "静岡",
  "愛知",
  "岐阜",
  "石川",
  "福井",
  "栃木",
  "茨城",
  "千葉",
  "神奈川",
  "埼玉",
  "群馬",
  "滋賀",
  "三重",
  "兵庫",
  "和歌山",
  "鳥取",
  "岡山",
  "島根",
  "山口",
  "香川",
  "徳島",
  "愛媛",
  "高知",
  "福岡",
  "大分",
  "佐賀",
  "熊本",
  "宮崎",
  "長崎",
  "鹿児島",
  "沖縄"
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
  document.getElementById("niigata"),
  document.getElementById("toyama"),
  document.getElementById("nagano"),
  document.getElementById("yamanashi"),
  document.getElementById("shizuoka"),
  document.getElementById("aichi"),
  document.getElementById("gifu"),
  document.getElementById("ishikawa"),
  document.getElementById("fukui"),
  document.getElementById("tochigi"),
  document.getElementById("ibaraki"),
  document.getElementById("chiba"),
  document.getElementById("kanagawa"),
  document.getElementById("saitama"),
  document.getElementById("gunma"),
  document.getElementById("shiga"),
  document.getElementById("mie"),
  document.getElementById("hyougo"),
  document.getElementById("wakayama"),
  document.getElementById("tottori"),
  document.getElementById("okayama"),
  document.getElementById("shimane"),
  document.getElementById("yamaguchi"),
  document.getElementById("kagawa"),
  document.getElementById("tokushima"),
  document.getElementById("ehime"),
  document.getElementById("kouchi"),
  document.getElementById("fukuoka"),
  document.getElementById("ooita"),
  document.getElementById("saga"),
  document.getElementById("kumamoto"),
  document.getElementById("miyazaki"),
  document.getElementById("nagasaki"),
  document.getElementById("kagoshima"),
  document.getElementById("okinawa"),
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

// background.style.backgroundImage = "url(Images/hokkaido.jpg)";

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

// background.style.backgroundImage = "url(Images/tokyo.jpg)";

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

// background.style.backgroundImage = "url(Images/kyouto.jpg)";

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

// background.style.backgroundImage = "url(Images/hiroshima.jpg)";

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

// background.style.backgroundImage = "url(Images/nara.webp)";

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

// background.style.backgroundImage = "url(Images/osaka.jpg)";

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

// background.style.backgroundImage = "url(Images/aomori.jpg)";

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

// background.style.backgroundImage = "url(Images/akita.webp)";

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

// background.style.backgroundImage = "url(Images/iwate.jpg)";

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

// background.style.backgroundImage = "url(Images/yamagata.jpg)";

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

// background.style.backgroundImage = "url(Images/miyagi.jpg)";

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

// background.style.backgroundImage = "url(Images/fukushima.jpg)";

showDialog(dialogs[11]);
}

document.getElementById("imageniigata").addEventListener("click", niigata);
const niigataimage1 = document.getElementById("niigataimage1");
const niigataimage2 = document.getElementById("niigataimage2");
function niigata() {
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

niigataimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[12][0] + ".gif";
niigataimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[12][1] + ".gif";

showDialog(dialogs[12]);
}

document.getElementById("imagetoyama").addEventListener("click", toyama);
const toyamaimage1 = document.getElementById("toyamaimage1");
const toyamaimage2 = document.getElementById("toyamaimage2");
function toyama() {
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

toyamaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[13][0] + ".gif";
toyamaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[13][1] + ".gif";

showDialog(dialogs[13]);
}

document.getElementById("imagenagano").addEventListener("click", nagano);
const naganoimage1 = document.getElementById("naganoimage1");
const naganoimage2 = document.getElementById("naganoimage2");
function nagano() {
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

naganoimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[14][0] + ".gif";
naganoimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[14][1] + ".gif";

showDialog(dialogs[14]);
}

document.getElementById("imageyamanashi").addEventListener("click", yamanashi);
const yamanashiimage1 = document.getElementById("yamanashiimage1");
const yamanashiimage2 = document.getElementById("yamanashiimage2");
function yamanashi() {
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

yamanashiimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[15][0] + ".gif";
yamanashiimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[15][1] + ".gif";

showDialog(dialogs[15]);
}

document.getElementById("imageshizuoka").addEventListener("click", shizuoka);
const shizuokaimage1 = document.getElementById("shizuokaimage1");
const shizuokaimage2 = document.getElementById("shizuokaimage2");
function shizuoka() {
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

shizuokaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[16][0] + ".gif";
shizuokaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[16][1] + ".gif";

showDialog(dialogs[16]);
}

document.getElementById("imageaichi").addEventListener("click", aichi);
const aichiimage1 = document.getElementById("aichiimage1");
const aichiimage2 = document.getElementById("aichiimage2");
function aichi() {
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

aichiimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[17][0] + ".gif";
aichiimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[17][1] + ".gif";

showDialog(dialogs[17]);
}

document.getElementById("imagegifu").addEventListener("click", gifu);
const gifuimage1 = document.getElementById("gifuimage1");
const gifuimage2 = document.getElementById("gifuimage2");
function gifu() {
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

gifuimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[18][0] + ".gif";
gifuimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[18][1] + ".gif";

showDialog(dialogs[18]);
}

document.getElementById("imageishikawa").addEventListener("click", ishikawa);
const ishikawaimage1 = document.getElementById("ishikawaimage1");
const ishikawaimage2 = document.getElementById("ishikawaimage2");
function ishikawa() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[19];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

ishikawaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[19][0] + ".gif";
ishikawaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[19][1] + ".gif";

showDialog(dialogs[19]);
}

document.getElementById("imagefukui").addEventListener("click", fukui);
const fukuiimage1 = document.getElementById("fukuiimage1");
const fukuiimage2 = document.getElementById("fukuiimage2");
function fukui() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[20];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

fukuiimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[20][0] + ".gif";
fukuiimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[20][1] + ".gif";

showDialog(dialogs[20]);
}

document.getElementById("imagetochigi").addEventListener("click", tochigi);
const tochigiimage1 = document.getElementById("tochigiimage1");
const tochigiimage2 = document.getElementById("tochigiimage2");
function tochigi() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[21];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

tochigiimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[21][0] + ".gif";
tochigiimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[21][1] + ".gif";

showDialog(dialogs[21]);
}

document.getElementById("imageibaraki").addEventListener("click", ibaraki);
const ibarakiimage1 = document.getElementById("ibarakiimage1");
const ibarakiimage2 = document.getElementById("ibarakiimage2");
function ibaraki() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[22];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

ibarakiimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[22][0] + ".gif";
ibarakiimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[22][1] + ".gif";

showDialog(dialogs[22]);
}

document.getElementById("imagechiba").addEventListener("click", chiba);
const chibaimage1 = document.getElementById("chibaimage1");
const chibaimage2 = document.getElementById("chibaimage2");
function chiba() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[23];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

chibaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[23][0] + ".gif";
chibaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[23][1] + ".gif";

showDialog(dialogs[23]);
}

document.getElementById("imagekanagawa").addEventListener("click", kanagawa);
const kanagawaimage1 = document.getElementById("kanagawaimage1");
const kanagawaimage2 = document.getElementById("kanagawaimage2");
const kanagawaimage3 = document.getElementById("kanagawaimage3");
function kanagawa() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[24];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

kanagawaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[24][0] + ".gif";
kanagawaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[24][1] + ".gif";
kanagawaimage3.src = "../../GIF/kanji/gif/150x150/" + speechJapan[24][2] + ".gif";

// background.style.backgroundImage = "url(Images/hokkaido.jpg)";

showDialog(dialogs[24]);
}

document.getElementById("imagesaitama").addEventListener("click", saitama);
const saitamaimage1 = document.getElementById("saitamaimage1");
const saitamaimage2 = document.getElementById("saitamaimage2");
function saitama() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[25];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

saitamaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[25][0] + ".gif";
saitamaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[25][1] + ".gif";

showDialog(dialogs[25]);
}

document.getElementById("imagegunma").addEventListener("click", gunma);
const gunmaimage1 = document.getElementById("gunmaimage1");
const gunmaimage2 = document.getElementById("gunmaimage2");
function gunma() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[26];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

gunmaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[26][0] + ".gif";
gunmaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[26][1] + ".gif";

showDialog(dialogs[26]);
}

document.getElementById("imageshiga").addEventListener("click", shiga);
const shigaimage1 = document.getElementById("shigaimage1");
const shigaimage2 = document.getElementById("shigaimage2");
function shiga() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[27];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

shigaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[27][0] + ".gif";
shigaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[27][1] + ".gif";

showDialog(dialogs[27]);
}

document.getElementById("imagemie").addEventListener("click", mie);
const mieimage1 = document.getElementById("mieimage1");
const mieimage2 = document.getElementById("mieimage2");
function mie() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[28];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

mieimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[28][0] + ".gif";
mieimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[28][1] + ".gif";

showDialog(dialogs[28]);
}

document.getElementById("imagehyougo").addEventListener("click", hyougo);
const hyougoimage1 = document.getElementById("hyougoimage1");
const hyougoimage2 = document.getElementById("hyougoimage2");
function hyougo() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[29];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

hyougoimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[29][0] + ".gif";
hyougoimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[29][1] + ".gif";

showDialog(dialogs[29]);
}

document.getElementById("imagewakayama").addEventListener("click", wakayama);
const wakayamaimage1 = document.getElementById("wakayamaimage1");
const wakayamaimage2 = document.getElementById("wakayamaimage2");
const wakayamaimage3 = document.getElementById("wakayamaimage3");
function wakayama() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[30];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

wakayamaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[30][0] + ".gif";
wakayamaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[30][1] + ".gif";
wakayamaimage3.src = "../../GIF/kanji/gif/150x150/" + speechJapan[30][2] + ".gif";

showDialog(dialogs[30]);
}

document.getElementById("imagetottori").addEventListener("click", tottori);
const tottoriimage1 = document.getElementById("tottoriimage1");
const tottoriimage2 = document.getElementById("tottoriimage2");
function tottori() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[31];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

tottoriimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[31][0] + ".gif";
tottoriimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[31][1] + ".gif";

showDialog(dialogs[31]);
}

document.getElementById("imageokayama").addEventListener("click", okayama);
const okayamaimage1 = document.getElementById("okayamaimage1");
const okayamaimage2 = document.getElementById("okayamaimage2");
function okayama() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[32];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

okayamaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[32][0] + ".gif";
okayamaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[32][1] + ".gif";

showDialog(dialogs[32]);
}

document.getElementById("imageshimane").addEventListener("click", shimane);
const shimaneimage1 = document.getElementById("shimaneimage1");
const shimaneimage2 = document.getElementById("shimaneimage2");
function shimane() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[33];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

shimaneimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[33][0] + ".gif";
shimaneimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[33][1] + ".gif";

showDialog(dialogs[33]);
}

document.getElementById("imageyamaguchi").addEventListener("click", yamaguchi);
const yamaguchiimage1 = document.getElementById("yamaguchiimage1");
const yamaguchiimage2 = document.getElementById("yamaguchiimage2");
function yamaguchi() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[34];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

yamaguchiimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[34][0] + ".gif";
yamaguchiimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[34][1] + ".gif";

showDialog(dialogs[34]);
}

document.getElementById("imagekagawa").addEventListener("click", kagawa);
const kagawaimage1 = document.getElementById("kagawaimage1");
const kagawaimage2 = document.getElementById("kagawaimage2");
function kagawa() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[35];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

kagawaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[35][0] + ".gif";
kagawaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[35][1] + ".gif";

showDialog(dialogs[35]);
}

document.getElementById("imagetokushima").addEventListener("click", tokushima);
const tokushimaimage1 = document.getElementById("tokushimaimage1");
const tokushimaimage2 = document.getElementById("tokushimaimage2");
function tokushima() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[36];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

tokushimaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[36][0] + ".gif";
tokushimaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[36][1] + ".gif";

showDialog(dialogs[36]);
}

document.getElementById("imageehime").addEventListener("click", ehime);
const ehimeimage1 = document.getElementById("ehimeimage1");
const ehimeimage2 = document.getElementById("ehimeimage2");
function ehime() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[37];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

ehimeimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[37][0] + ".gif";
ehimeimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[37][1] + ".gif";

showDialog(dialogs[37]);
}

document.getElementById("imagekouchi").addEventListener("click", kouchi);
const kouchiimage1 = document.getElementById("kouchiimage1");
const kouchiimage2 = document.getElementById("kouchiimage2");
function kouchi() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[38];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

kouchiimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[38][0] + ".gif";
kouchiimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[38][1] + ".gif";

showDialog(dialogs[38]);
}

document.getElementById("imagefukuoka").addEventListener("click", fukuoka);
const fukuokaimage1 = document.getElementById("fukuokaimage1");
const fukuokaimage2 = document.getElementById("fukuokaimage2");
function fukuoka() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[39];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

fukuokaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[39][0] + ".gif";
fukuokaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[39][1] + ".gif";

showDialog(dialogs[39]);
}

document.getElementById("imageooita").addEventListener("click", ooita);
const ooitaimage1 = document.getElementById("ooitaimage1");
const ooitaimage2 = document.getElementById("ooitaimage2");
function ooita() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[40];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

ooitaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[40][0] + ".gif";
ooitaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[40][1] + ".gif";

showDialog(dialogs[40]);
}

document.getElementById("imagesaga").addEventListener("click", saga);
const sagaimage1 = document.getElementById("sagaimage1");
const sagaimage2 = document.getElementById("sagaimage2");
function saga() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[41];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

sagaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[41][0] + ".gif";
sagaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[41][1] + ".gif";

showDialog(dialogs[41]);
}

document.getElementById("imagekumamoto").addEventListener("click", kumamoto);
const kumamotoimage1 = document.getElementById("kumamotoimage1");
const kumamotoimage2 = document.getElementById("kumamotoimage2");
function kumamoto() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[42];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

kumamotoimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[42][0] + ".gif";
kumamotoimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[42][1] + ".gif";

showDialog(dialogs[42]);
}

document.getElementById("imagemiyazaki").addEventListener("click", miyazaki);
const miyazakiimage1 = document.getElementById("miyazakiimage1");
const miyazakiimage2 = document.getElementById("miyazakiimage2");
function miyazaki() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[43];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

miyazakiimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[43][0] + ".gif";
miyazakiimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[43][1] + ".gif";

showDialog(dialogs[43]);
}

document.getElementById("imagenagasaki").addEventListener("click", nagasaki);
const nagasakiimage1 = document.getElementById("nagasakiimage1");
const nagasakiimage2 = document.getElementById("nagasakiimage2");
function nagasaki() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[44];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

nagasakiimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[44][0] + ".gif";
nagasakiimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[44][1] + ".gif";

showDialog(dialogs[44]);
}

document.getElementById("imagekagoshima").addEventListener("click", kagoshima);
const kagoshimaimage1 = document.getElementById("kagoshimaimage1");
const kagoshimaimage2 = document.getElementById("kagoshimaimage2");
const kagoshimaimage3 = document.getElementById("kagoshimaimage3");
function kagoshima() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[45];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

kagoshimaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[45][0] + ".gif";
kagoshimaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[45][1] + ".gif";
kagoshimaimage3.src = "../../GIF/kanji/gif/150x150/" + speechJapan[45][2] + ".gif";

showDialog(dialogs[45]);
}

document.getElementById("imageokinawa").addEventListener("click", okinawa);
const okinawaimage1 = document.getElementById("okinawaimage1");
const okinawaimage2 = document.getElementById("okinawaimage2");
function okinawa() {
try {
  const speech = new SpeechSynthesisUtterance();
  speech.text = speechJapan[46];
  speech.lang = "ja";
  window.speechSynthesis.speak(speech);
}
catch (error) {
  console.error("Error in translation:", error);
  alert("The text could not be translated. Please try again.");
}

okinawaimage1.src = "../../GIF/kanji/gif/150x150/" + speechJapan[46][0] + ".gif";
okinawaimage2.src = "../../GIF/kanji/gif/150x150/" + speechJapan[46][1] + ".gif";

showDialog(dialogs[46]);
}

function showDialog(dialog) {
dialog.showModal();
}

dialogs.forEach((dialog, index) => {
// console.log(dialog)
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
        case 12:
        {
          niigataimage1.src = "";
          niigataimage2.src = "";
          break;
        }
        case 13:
        {
          toyamaimage1.src = "";
          toyamaimage2.src = "";
          break;
        }
        case 14:
        {
          naganoimage1.src = "";
          naganoimage2.src = "";
          break;
        }
        case 15:
        {
          yamanashiimage1.src = "";
          yamanashiimage2.src = "";
          break;
        }
        case 16:
        {
          shizuokaimage1.src = "";
          shizuokaimage2.src = "";
          break;
        }
        case 17:
        {
          aichiimage1.src = "";
          aichiimage2.src = "";
          break;
        }
        case 18:
        {
          gifuimage1.src = "";
          gifuimage2.src = "";
          break;
        }
        case 19:
        {
          ishikawaimage1.src = "";
          ishikawaimage2.src = "";
          break;
        }
        case 20:
        {
          fukuiimage1.src = "";
          fukuiimage2.src = "";
          break;
        }
        case 21:
        {
          tochigiimage1.src = "";
          tochigiimage2.src = "";
          break;
        }
        case 22:
        {
          ibarakiimage1.src = "";
          ibarakiimage2.src = "";
          break;
        }
        case 23:
        {
          chibaimage1.src = "";
          chibaimage2.src = "";
          break;
        }
        case 24:
        {
          kanagawaimage1.src = "";
          kanagawaimage2.src = "";
          kanagawaimage3.src = "";
          break;
        }
        case 25:
        {
          saitamaimage1.src = "";
          saitamaimage2.src = "";
          break;
        }
        case 26:
        {
          gunmaimage1.src = "";
          gunmaimage2.src = "";
          break;
        }
        case 27:
        {
          shigaimage1.src = "";
          shigaimage2.src = "";
          break;
        }
        case 28:
        {
          mieimage1.src = "";
          mieimage2.src = "";
          break;
        }
        case 29:
        {
          hyougoimage1.src = "";
          hyougoimage2.src = "";
          break;
        }
        case 30:
        {
          wakayamaimage1.src = "";
          wakayamaimage2.src = "";
          wakayamaimage3.src = "";
          break;
        }
        case 31:
        {
          tottoriimage1.src = "";
          tottoriimage2.src = "";
          break;
        }
        case 32:
        {
          okayamaimage1.src = "";
          okayamaimage2.src = "";
          break;
        }
        case 33:
        {
          shimaneimage1.src = "";
          shimaneimage2.src = "";
          break;
        }
        case 34:
        {
          yamaguchiimage1.src = "";
          yamaguchiimage2.src = "";
          break;
        }
        case 35:
        {
          kagawaimage1.src = "";
          kagawaimage2.src = "";
          break;
        }
        case 36:
        {
          tokushimaimage1.src = "";
          tokushimaimage2.src = "";
          break;
        }
        case 37:
        {
          ehimeimage1.src = "";
          ehimeimage2.src = "";
          break;
        }
        case 38:
        {
          kouchiimage1.src = "";
          kouchiimage2.src = "";
          break;
        }
        case 39:
        {
          fukuokaimage1.src = "";
          fukuokaimage2.src = "";
          break;
        }
        case 40:
        {
          ooitaimage1.src = "";
          ooitaimage2.src = "";
          break;
        }
        case 41:
        {
          sagaimage1.src = "";
          sagaimage2.src = "";
          break;
        }
        case 42:
        {
          kumamotoimage1.src = "";
          kumamotoimage2.src = "";
          break;
        }
        case 43:
        {
          miyazakiimage1.src = "";
          miyazakiimage2.src = "";
          break;
        }
        case 44:
        {
          nagasakiimage1.src = "";
          nagasakiimage2.src = "";
          break;
        }
        case 45:
        {
          kagoshimaimage1.src = "";
          kagoshimaimage2.src = "";
          kagoshimaimage3.src = "";
          break;
        }
        case 46:
        {
          okinawaimage1.src = "";
          okinawaimage2.src = "";
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
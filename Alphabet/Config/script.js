document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("click", function () {
      this.classList.toggle("card1");
    });
  });

var randomChange = document.getElementById("Background");
images = [
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
var imgCount = images.length;
var number = Math.floor(Math.random() * imgCount);
window.onload = function () {
  randomChange.style.backgroundImage = "url(" + images[number] + ")";
};

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
]

function showA() { showDialog(dialogs[0]) }
function showI() { showDialog(dialogs[1]) }
function showU() { showDialog(dialogs[2]) }
function showE() { showDialog(dialogs[3]) }
function showO() { showDialog(dialogs[4]) }
function showKA() { showDialog(dialogs[5]) }
function showKI() { showDialog(dialogs[6]) }
function showKU() { showDialog(dialogs[7]) }
function showKE() { showDialog(dialogs[8]) }
function showKO() { showDialog(dialogs[9]) }
function showSA() { showDialog(dialogs[10]) }
function showSHI(){ showDialog(dialogs[11]) }
function showSU() { showDialog(dialogs[12]) }
function showSE() { showDialog(dialogs[13]) }
function showSO() { showDialog(dialogs[14]) }
function showTA() { showDialog(dialogs[15]) }
function showCHI(){ showDialog(dialogs[16]) }
function showTSU(){ showDialog(dialogs[17]) }
function showTE() { showDialog(dialogs[18]) }
function showTO() { showDialog(dialogs[19]) }
function showNA() { showDialog(dialogs[20]) }
function showNI() { showDialog(dialogs[21]) }
function showNU() { showDialog(dialogs[22]) }
function showNE() { showDialog(dialogs[23]) }
function showNO() { showDialog(dialogs[24]) }
function showHA() { showDialog(dialogs[25]) }
function showHI() { showDialog(dialogs[26]) }
function showFU() { showDialog(dialogs[27]) }
function showHE() { showDialog(dialogs[28]) }
function showHO() { showDialog(dialogs[29]) }
function showMA() { showDialog(dialogs[30]) }
function showMI() { showDialog(dialogs[31]) }
function showMU() { showDialog(dialogs[32]) }
function showME() { showDialog(dialogs[33]) }
function showMO() { showDialog(dialogs[34]) }
function showYA() { showDialog(dialogs[35]) }
function showYU() { showDialog(dialogs[36]) }
function showYO() { showDialog(dialogs[37]) }
function showRA() { showDialog(dialogs[38]) }
function showRI() { showDialog(dialogs[39]) }
function showRU() { showDialog(dialogs[40]) }
function showRE() { showDialog(dialogs[41]) }
function showRO() { showDialog(dialogs[42]) }
function showWA() { showDialog(dialogs[43]) }
function showOO() { showDialog(dialogs[44]) }
function showN()  { showDialog(dialogs[45]) }
function showGA() { showDialog(dialogs[46]) }
function showGI() { showDialog(dialogs[47]) }
function showGU() { showDialog(dialogs[48]) }
function showGE() { showDialog(dialogs[49]) }
function showGO() { showDialog(dialogs[50]) }
function showZA() { showDialog(dialogs[51]) }
function showJI() { showDialog(dialogs[52]) }
function showZU() { showDialog(dialogs[53]) }
function showZE() { showDialog(dialogs[54]) }
function showZO() { showDialog(dialogs[55]) }
function showDA() { showDialog(dialogs[56]) }
function showJJ() { showDialog(dialogs[57]) }
function showZUU(){ showDialog(dialogs[58]) }
function showDE() { showDialog(dialogs[59]) }
function showDO() { showDialog(dialogs[60]) }
function showBA() { showDialog(dialogs[61]) }
function showBI() { showDialog(dialogs[62]) }
function showBU() { showDialog(dialogs[63]) }
function showBE() { showDialog(dialogs[64]) }
function showBO() { showDialog(dialogs[65]) }
function showPA() { showDialog(dialogs[66]) }
function showPI() { showDialog(dialogs[67]) }
function showPU() { showDialog(dialogs[68]) }
function showPE() { showDialog(dialogs[69]) }
function showPO() { showDialog(dialogs[70]) }
function showKYA() { showDialog(dialogs[71]) }
function showKYU() { showDialog(dialogs[72]) }
function showKYO() { showDialog(dialogs[73]) }
function showSHA() { showDialog(dialogs[74]) }
function showSHU() { showDialog(dialogs[75]) }
function showSHO() { showDialog(dialogs[76]) }
function showCHA() { showDialog(dialogs[77]) }
function showCHU() { showDialog(dialogs[78]) }
function showCHO() { showDialog(dialogs[79]) }
function showNYA() { showDialog(dialogs[80]) }
function showNYU() { showDialog(dialogs[81]) }
function showNYO() { showDialog(dialogs[82]) }
function showHYA() { showDialog(dialogs[83]) }
function showHYU() { showDialog(dialogs[84]) }
function showHYO() { showDialog(dialogs[85]) }
function showMYA() { showDialog(dialogs[86]) }
function showMYU() { showDialog(dialogs[87]) }
function showMYO() { showDialog(dialogs[88]) }
function showRYA() { showDialog(dialogs[89]) }
function showRYU() { showDialog(dialogs[90]) }
function showRYO() { showDialog(dialogs[91]) }
function showGYA() { showDialog(dialogs[92]) }
function showGYU() { showDialog(dialogs[93]) }
function showGYO() { showDialog(dialogs[94]) }
function showJA()  { showDialog(dialogs[95]) }
function showJU()  { showDialog(dialogs[96]) }
function showJO()  { showDialog(dialogs[97]) }
function showBYA() { showDialog(dialogs[98]) }
function showBYU() { showDialog(dialogs[99]) }
function showBYO() { showDialog(dialogs[100]) }
function showPYA() { showDialog(dialogs[101]) }
function showPYU() { showDialog(dialogs[102]) }
function showPYO() { showDialog(dialogs[103]) }

function showDialog(dialog) {
  dialog.showModal();
  overlay.style.display = "block";
}

dialogs.forEach((dialog) => {
  dialog.addEventListener("mousedown", (event) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = event.clientX >= rect.left &&
                       event.clientX <= rect.right &&
                       event.clientY >= rect.top &&
                       event.clientY <= rect.bottom;
    if (!isInDialog) {
      dialog.close();
      overlay.style.display = "none";
    }
  });
  // console.log(dialog)
});
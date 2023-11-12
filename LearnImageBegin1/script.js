// document.addEventListener("DOMContentLoaded", function () {
//   // Common click event handler for all buttons
//   document.querySelectorAll(".card").forEach(function (card, index) {
//     card.addEventListener("mouseover", function () {
//       handleButtonClick(index);
//     });
//     card.addEventListener("click", function () {
//       handleCardMouseOver(index);
//     });
//   });

//   // Function to handle button click
//   function handleButtonClick(index) {
//     console.log(index);
//     var japan = document.querySelector(".japan");
//     var romaji = document.querySelector(".romaji");
//     var mean = document.querySelector(".mean");

//     var romajiData;
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         romajiData = JSON.parse(this.responseText);
//         japan.innerHTML = romajiData[index].japan;
//         romaji.innerHTML = "/" + romajiData[index].romaji + "/";
//         mean.innerHTML = romajiData[index].mean;
//         console.log(romajiData[index].mean);
//       }
//     };
//     console.log();
//     xhr.open("GET", "data.json", true);
//     xhr.send();
//   }

//   function handleCardMouseOver(index) {
    
//     var japan = document.querySelector(".japan");
//     var romaji = document.querySelector(".romaji");
//     var mean = document.querySelector(".mean");

//     var romajiData;
//     var xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//         romajiData = JSON.parse(this.responseText);
//         japan.innerHTML = romajiData[index].japan;
//         romaji.innerHTML = "/" + romajiData[index].romaji + "/";
//         mean.innerHTML = romajiData[index].mean;
//         console.log(romajiData[index].mean);
//       }
//     };
//     console.log();
//     xhr.open("GET", "data.json", true);
//     xhr.send();
//   }
// });

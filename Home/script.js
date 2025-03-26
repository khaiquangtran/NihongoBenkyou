
let emojis = [
  "😀",
  "😁",
  "😅",
  "🤣",
  "😍",
  "🥰",
  "😙",
  "😋",
  "🤪",
  "😎",
  "🤩",
  "😣",
  "😱",
  "😰",
  "😵",
  "🥱",
  "🤫",
  "🤡",
  "🤠",
  "😑"
];

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
  });
});

var randomChange = document.getElementById("Background");
const images = [
  "Home/Images/home_background.jpg",
  "Home/Images/home_background1.jpg",
  "Home/Images/home_background2.jpg",
  "Home/Images/home_background3.jpg",
  "Home/Images/home_background4.jpg",
  "Home/Images/home_background5.jpg",
  "Home/Images/home_background6.jpg",
  "Home/Images/home_background7.jpg",
  "Home/Images/home_background8.jpg",
  "Home/Images/home_background9.jpg",
  "Home/Images/home_background10.jpg",
  "Home/Images/home_background11.jpg",
  "Home/Images/home_background12.jpg",
  "Home/Images/home_background13.jpg",
  "Home/Images/home_background14.jpg",
  "Home/Images/home_background15.jpg",
  "Home/Images/home_background16.jpg",
  "Home/Images/home_background17.jpg",
  "Home/Images/home_background18.jpg",
  "Home/Images/home_background19.jpg",
  "Home/Images/home_background20.jpg",
  "Home/Images/home_background21.jpg",
  "Home/Images/home_background22.jpg",
  "Home/Images/background23.jpg",
  "Home/Images/background24.jpg",
  "Home/Images/background25.jpg",
  "Home/Images/background26.jpg",
  "Home/Images/background27.jpg",
  "Home/Images/background28.jpg",
];
var imgCount = images.length;
var number = Math.floor(Math.random() * imgCount);

window.onload = function () {
  window.location.hash = emojis[Math.floor(Math.random() * emojis.length)];
  randomChange.style.backgroundImage = "url(" + images[number] + ")";
};

// console.log("Home")

// let days = document.getElementById('days');
// let hours = document.getElementById('hours');
// let minutes = document.getElementById('minutes');
// let seconds = document.getElementById('seconds');
// let dd = document.getElementById('dd');
// let hh = document.getElementById('hh');
// let mm = document.getElementById('mm');
// let ss = document.getElementById('ss');
// let day_dot = document.querySelector('.day_dot');
// let hr_dot = document.querySelector('.hr_dot');
// let min_dot = document.querySelector('.min_dot');
// let sec_dot = document.querySelector('.sec_dot');
// let endDate = '3/1/2025 00:00:00';
// //date format i.e., mm/dd/yyyy
// let x = setInterval(function(){
// let now = new Date(endDate).getTime();
// let countDown = new Date().getTime();
// let distance = now - countDown;
// //time calculation for remaining days,hours, seconds
// let d = Math.floor(distance / (1000 * 60 * 60 * 24));
// let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60 ));
// let s = Math.floor((distance % (1000 * 60 )) / (1000));
// //lets output the result in the elements with id
// days.innerHTML = d + "<br><span>Days</span>";
// hours.innerHTML = h + "<br><span>Hours</span>";
// minutes.innerHTML = m + "<br><span>Minutes</span>";
// seconds.innerHTML = s + "<br><span>Seconds</span>";
// //lets animate stroke
// dd.style.strokeDashoffset = 440 - (440 * d) / 365;
// //365 days in a year
// hh.style.strokeDashoffset = 440 - (440 * h) / 24;
// //there is 24hours in a day
// mm.style.strokeDashoffset = 440 - (440 * m) / 60;
// //60 minutes in an hour
// ss.style.strokeDashoffset = 440 - (440 * s) / 60;
// //60 seconds in a minute
// //lets animate circle dots
// day_dot.style.transform = `rotateZ(${d * 0.986}deg`;
// //360deg / 365 days = 0.986
// hr_dot.style.transform = `rotateZ(${h * 15}deg`;
// //360deg / 24 hrs = 15
// min_dot.style.transform = `rotateZ(${m * 6}deg`;
// //360deg / 60 minutes = 6
// sec_dot.style.transform = `rotateZ(${s * 6}deg`;
// //360deg / 60 seconds = 6
// //write some text if countdown is over
// if(distance < 0){
//     clearInterval(x);
//     document.getElementById("time").style.display = 'none';
//     document.querySelector(".newYear").style.display = 'block';
// }
// })



document.querySelectorAll(".content").forEach(function (card) {
  card.addEventListener("click", function () {
    var japanText = card.getElementsByClassName("textJapan")[0].textContent;
    // console.log(japanText);
    try {
      const speech = new SpeechSynthesisUtterance();
      speech.text = japanText;
      speech.lang = "ja";
      window.speechSynthesis.speak(speech);
    }
    catch (error) {
      console.error("Error in translation:", error);
      alert("The text could not be translated. Please try again.");
    }
  });

});


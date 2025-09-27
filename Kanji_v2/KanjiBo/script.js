import { images } from './../../Home/images.js';

var randomChange = document.getElementById("Background");
var imgCount = images.length;
var number = Math.floor(Math.random() * imgCount);
window.onload = function () {
  randomChange.style.backgroundImage = "url(" + images[number] + ")";
};

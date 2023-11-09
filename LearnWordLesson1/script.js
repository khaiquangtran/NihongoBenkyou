var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

  let box = document.querySelector(".box");
  let message = document.querySelector(".message");
  let open_button = document.querySelector(".open_button");
  let close_button = document.querySelector(".close_button");
  let heading = document.querySelector(".heading");
  open_button.onclick = function () {
    heading.style.backgroundColor  = 'rgb(206, 17, 17)';
    box.classList.add("box_active");
    message.innerHTML ="hello";
  };
  close_button.onclick = function () {
    box.classList.remove("box_active");
  };
  
  let open_button1 = document.querySelector(".openBtn1");
  open_button1.onclick = function () {
    heading.style.backgroundColor  = 'rgb(0, 140, 255)';
    box.classList.add("box_active");
    message.innerHTML ="hi";
  };

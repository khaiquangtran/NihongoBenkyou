document.querySelectorAll(".card").forEach(function (card) {
    card.addEventListener("click", function () {
      this.classList.toggle("card1");
    });
  });
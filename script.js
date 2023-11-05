const flashcard = document.getElementById('front');
const showCardButton = document.getElementById('showCard');

showCardButton.addEventListener('click', function () {
    flashcard.classList.toggle('backchange');
});

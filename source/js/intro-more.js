//Init intro-more button
const moreButton = document.querySelector('.second-page__plus-button');
const moreInfo = document.querySelector('.more-info');
const closeButton = document.querySelector('.more-info__close-button');

function onMoreButtomClick() {
    moreInfo.classList.toggle('more-info--maxied');
}

moreButton.addEventListener('click', onMoreButtomClick);
closeButton.addEventListener('click', onMoreButtomClick);
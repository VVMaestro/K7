const openOrderButton = document.querySelector('.js-order-work');
const closeOrderButton = document.querySelector('.js-order-close');
const orderPopup = document.querySelector('.js-order-popup');
const orderForm = document.querySelector('.js-order-form');
const orderDarkBack = document.querySelector('.page__dark-back');

function closeOrderPopup () {
    orderPopup.classList.remove('popup--open');
    orderDarkBack.classList.remove('page__dark-back--open');
    orderForm.removeEventListener('submit', closeOrderPopup);
}

openOrderButton.addEventListener('click', function () {
    orderPopup.classList.add('popup--open');
    orderDarkBack.classList.add('page__dark-back--open');
    
    orderForm.addEventListener('submit', closeOrderPopup);
});

closeOrderButton.addEventListener('click', closeOrderPopup);
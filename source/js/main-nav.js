//Init main-nav switcher
const switcher = document.querySelector('.main-nav__switch');
const container = document.querySelector('.main-nav__container');

function onSwitcherClick() {
    container.classList.toggle('main-nav--open');
}

switcher.addEventListener('click', onSwitcherClick);
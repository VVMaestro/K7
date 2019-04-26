// Init Swiper
var mainSwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    speed: 700,
    allowTouchMove: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,

        formatFractionCurrent: function (number) {
            return '0' + number + '.';
        },

        formatFractionTotal: function (number) {
            return '0' + number + '.';
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    mousewheel: {

    },

    on: {
        slideChange: function () {
            const nextArrow = document.querySelector('.swiper-button-next');
            if (mainSwiper.isBeginning) {
                nextArrow.classList.add('swiper-button-next--on-start');
            } else nextArrow.classList.remove('swiper-button-next--on-start');
        }        
    }

});

//Init inner swiper
var innerSwiper = new Swiper ('.inner-swiper__container', {
    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    speed: 700,
    nested: true,
    slidesPerView: 1,

    pagination: {
        el: '.inner-swiper__pagination',
        clickable: true
    }
});

//Init main-nav switcher
const switcher = document.querySelector('.main-nav__switch');
const container = document.querySelector('.swiper-container');

function onSwitcherClick () {
    container.classList.toggle('main-nav--open');
}

switcher.addEventListener('click', onSwitcherClick);

//Init aside panel and small-logo
mainSwiper.on('slideChange', function () {
    const asidePanel = document.querySelector('.page__aside-panel');
    if (mainSwiper.isBeginning || mainSwiper.isEnd) {
        asidePanel.classList.remove('page__aside-panel--big');
    } else asidePanel.classList.add('page__aside-panel--big');
});

mainSwiper.on('slideChange', function () {
    const pagesWithLogo = [1, 2];
    const logo = document.querySelector('.page__small-logo');
    if (pagesWithLogo.includes(mainSwiper.activeIndex)) {
        logo.classList.add('page__small-logo--show');
    } else logo.classList.remove('page__small-logo--show');
});
// Init Swiper
var mainSwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: 'slide',
    speed: 700,
    simulateTouch: false,
    allowTouchMove: true,

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
            const darkPages = [1];
            const nextArrow = document.querySelector('.swiper-button-next');
            const prevArrow = document.querySelector('.swiper-button-prev');
            const label = document.querySelector('.swiper-pagination-custom__label');
            const switcher = document.querySelector('.main-nav__switch');
            const pagination = document.querySelector('.swiper-pagination-custom');

            //changing next arrow positionn on first slide
            if (mainSwiper.isBeginning) {
                nextArrow.classList.add('swiper-button-next--on-start');
            } else nextArrow.classList.remove('swiper-button-next--on-start');

            if (darkPages.includes(mainSwiper.activeIndex)) {
                //changing both arrows and label color on dark slides
                nextArrow.classList.add('swiper-button-next--white');
                prevArrow.classList.add('swiper-button-prev--white');
                label.classList.add('swiper-pagination-custom__label--white');

                //changing menu-burger color on dark pages
                switcher.classList.add('main-nav__switch--light');

                //changing pagination color
                pagination.classList.add('swiper-pagination-custom--light');
            } else {
                nextArrow.classList.remove('swiper-button-next--white');
                prevArrow.classList.remove('swiper-button-prev--white');
                label.classList.remove('swiper-pagination-custom__label--white');

                switcher.classList.remove('main-nav__switch--light');

                pagination.classList.remove('swiper-pagination-custom--light');
            }

            
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

    autoplay: {
        delay: 5000
    },

    pagination: {
        el: '.inner-swiper__pagination',
        clickable: true
    }
});

//Init info swiper
var infoSwiper = new Swiper('.info-swiper__container', {
    direction: 'vertical',
    loop: false,
    effect: 'slide',
    speed: 700,
    nested: true,

    pagination: {
        el: '.info-swiper__pagination',
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

//Init intro-more button
const moreButton = document.querySelector('.second-page__plus-button');
const moreInfo = document.querySelector('.more-info');
const closeButton = document.querySelector('.more-info__close-button');

function onMoreButtomClick () {
    moreInfo.classList.toggle('more-info--maxied');
}

moreButton.addEventListener('click', onMoreButtomClick);
closeButton.addEventListener('click', onMoreButtomClick);

//Init aside panel and small-logo
mainSwiper.on('slideChange', function () {
    const asidePanel = document.querySelector('.page__aside-panel');
    if (mainSwiper.isBeginning || mainSwiper.isEnd) {
        asidePanel.classList.remove('page__aside-panel--big');
    } else asidePanel.classList.add('page__aside-panel--big');
});

mainSwiper.on('slideChange', function () {
    const pagesWithLogo = [1];
    const logo = document.querySelector('.page__small-logo');
    if (pagesWithLogo.includes(mainSwiper.activeIndex)) {
        logo.classList.add('page__small-logo--show');
    } else logo.classList.remove('page__small-logo--show');
});

//Init second slide intro
mainSwiper.on('slideChange', function () {
    const PAGE_INDEX = 1;
    const secPageIntro = document.querySelector('.second-page__intro');
    const secPageIntroMore = document.querySelector('.more-info');

    if (mainSwiper.activeIndex == PAGE_INDEX) {
        secPageIntro.classList.add('second-page__intro--open');
    } else {
        secPageIntro.classList.remove('second-page__intro--open');
        secPageIntroMore.classList.remove('more-info--maxied');
    }
});

//init contact-popup
const contactsForm = document.querySelector('#contacts-form');
const popup = document.querySelector('.contacts-popup');
const closePopup = document.querySelector('.contacts-popup__close');
const darkBack = document.querySelector('.page__dark-back');

contactsForm.addEventListener('submit', function (evt) {
    evt.preventDefault();//убрать после добавления action на форму!!!
    popup.classList.add('contacts-popup--open');
    darkBack.classList.add('page__dark-back--open');
});
closePopup.addEventListener('click', function () {
    popup.classList.remove('contacts-popup--open');
    darkBack.classList.remove('page__dark-back--open');    
});

//init contact-links
const contactLinks = document.querySelectorAll('.page__contacts-link');
const CONTACTS__INDEX = 2;

contactLinks.forEach(function(it) {
    it.addEventListener('click', function (evt) {
        evt.preventDefault();
        mainSwiper.slideTo(CONTACTS__INDEX);
    });
});
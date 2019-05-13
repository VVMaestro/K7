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
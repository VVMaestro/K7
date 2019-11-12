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
            const darkPages = [1, 2, 3, 4];
            const switcher = document.querySelector('.main-nav__switch');
            const pagination = document.querySelector('.swiper-pagination-custom');

            if (darkPages.includes(mainSwiper.activeIndex)) {
                //changing menu-burger color on dark pages
                switcher.classList.add('main-nav__switch--light');

                //changing pagination color
                pagination.classList.add('swiper-pagination-custom--light');
            } else {
                switcher.classList.remove('main-nav__switch--light');
                pagination.classList.remove('swiper-pagination-custom--light');
            }
        }
    }
});
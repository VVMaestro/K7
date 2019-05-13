//Init inner swiper
var innerSwiper = new Swiper('.inner-swiper__container', {
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
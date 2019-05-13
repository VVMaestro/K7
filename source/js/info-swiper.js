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

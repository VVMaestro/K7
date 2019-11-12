//Init second slide intro
mainSwiper.on('slideChange', function () {
    const secPageIntros = document.querySelectorAll('.second-page__intro');

    secPageIntros.forEach((intro) => {
        let introPage = parseInt(intro.dataset.page);
        if (mainSwiper.activeIndex == introPage) {
            intro.classList.add('second-page__intro--open');
        } else {
            intro.classList.remove('second-page__intro--open');
        }
    });
});
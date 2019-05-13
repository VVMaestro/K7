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
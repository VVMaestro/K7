(function () {
    const scrollButton = document.querySelector('.js-scroll-button');
    const scrollTarget = document.querySelector('.js-scroll-to');

    const scrollTargetY = scrollTarget.getBoundingClientRect().y;
    const padding = 20;

    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: scrollTargetY - padding,
            behavior: "smooth"
        });
    });
})();
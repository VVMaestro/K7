(function () {
    var servicePopup = document.querySelector('.js-order-popup');
    var darkBack = document.querySelector('.page__dark-back');
    var closeButton = document.querySelector('.js-order-close');

    function openServicePopup (evt) {
        if (evt.target.parentNode.classList.contains('service__item--with-window')) {
            evt.preventDefault();
            servicePopup.classList.add('popup--open');
            showDark();
            closeButton.addEventListener('click', closeServicePopup);
        }
    }

    function closeServicePopup () {
        servicePopup.classList.remove('popup--open');
        closeButton.removeEventListener('click', closeServicePopup);
        hideDark();
    }

    function showDark () {
        darkBack.classList.add('page__dark-back--open');
    }

    function hideDark () {
        darkBack.classList.remove('page__dark-back--open');
    }

    document.addEventListener('click', openServicePopup);
})();
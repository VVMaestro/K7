//init language buttons open logic
const activeButtons = document.querySelectorAll('.language-button--active');
const unactiveButtons = document.querySelectorAll('.language-button--unactive');
const MEDIUM_WIDTH = 820;

activeButtons.forEach(function (it) {
    it.addEventListener('click', function (evt) {
        if (document.documentElement.clientWidth <= MEDIUM_WIDTH) {
            evt.preventDefault();
            unactiveButtons.forEach(function (it) {
                it.classList.toggle('language-button--unactive-open');
            });
        }
    });
});
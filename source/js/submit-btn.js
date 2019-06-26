(function () {
    const submitBtn = document.querySelector('#js-custom-submit');
    const form = document.querySelector('#js-custom-form');

    submitBtn.addEventListener('click', () => {
        form.submit();
    });
})();
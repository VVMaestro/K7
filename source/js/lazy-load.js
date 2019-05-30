(function () {
    function drawElems (elems) {
        elems.forEach(function (it) {
            let winHeight = document.documentElement.clientHeight;
            let elemY = it.getBoundingClientRect().y;
            if (elemY < winHeight) {
                it.classList.add('js-lazy--show');
            }
        });
    }

    const lazyElems = document.querySelectorAll('.js-lazy');
    drawElems(lazyElems);

    window.addEventListener('scroll', function (evt) {
        drawElems(lazyElems);
    });
})();
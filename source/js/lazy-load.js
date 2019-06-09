(function () {
    function hideElems(elems) {
        elems.forEach(function (it) {
            it.classList.add('js-lazy--hide');
        });
    } 
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

    hideElems(lazyElems);

    window.addEventListener('scroll', function (evt) {
        drawElems(lazyElems);
    });
})();
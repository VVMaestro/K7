(function () {
    const lazyElems = document.querySelectorAll('.js-lazy');

    window.addEventListener('scroll', function (evt) {
        let winHeight = document.documentElement.clientHeight;
        
        lazyElems.forEach(function (it) {
            let elemY = it.getBoundingClientRect().y;
            console.log(elemY);
        });
    });
})();
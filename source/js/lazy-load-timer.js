(function () {
    const startElementSelector = '#js-progress-start';
    const elementsSelector = '.js-lazy-timer';
    const elements = document.querySelectorAll(elementsSelector);

    elements.forEach(element => {
        if (element.classList.contains('js-lazy-left')) {
            element.classList.add('js-lazy-left--hide');
        } else if (element.classList.contains('js-lazy-right')) {
            element.classList.add('js-lazy-right--hide');
        }
    });

    window.addEventListener('scroll', () => {
        let startY = document.querySelector(startElementSelector).getBoundingClientRect().y;
        if (startY <= 500) {
            elements.forEach((element, index) => {
                let showClass;
                if (element.classList.contains('js-lazy-left')) {
                    showClass = 'js-lazy-left--show';
                } else if (element.classList.contains('js-lazy-right')) {
                    showClass = 'js-lazy-right--show';
                }

                setTimeout(() => {
                    element.classList.add(showClass);
                }, index * 1000);
            });
        }
    });
})();
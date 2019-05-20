//init filter activation button
const filterButton = document.querySelector('.filter__button');
const filterWrapper = document.querySelector('.filter__wrapper');

filterButton.addEventListener('click', function () {
    filterWrapper.classList.toggle('filter__wrapper--active');
});
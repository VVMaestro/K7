//init contact-popup
const contactsForm = document.querySelector('#contacts-form');
const popup = document.querySelector('.contacts-popup');
const closePopup = document.querySelector('.contacts-popup__close');
const darkBack = document.querySelector('.page__dark-back');

contactsForm.addEventListener('submit', function (evt) {
    evt.preventDefault();//убрать после добавления action на форму!!!
    popup.classList.add('contacts-popup--open');
    darkBack.classList.add('page__dark-back--open');
});
closePopup.addEventListener('click', function () {
    popup.classList.remove('contacts-popup--open');
    darkBack.classList.remove('page__dark-back--open');    
});

//init contact-links
const contactLinks = document.querySelectorAll('#js-to-contacts');
const CONTACTS__INDEX = 2;

contactLinks.forEach(function(it) {
    it.addEventListener('click', function (evt) {
        evt.preventDefault();
        mainSwiper.slideTo(CONTACTS__INDEX);
    });
});

//scrolling fix of form text area
const textArea = document.querySelector('.form__textarea');

textArea.addEventListener('wheel', function (evt) {
    evt.stopPropagation();
});

// //init mobile contacts open logic
// const contactsOpenButton = document.querySelector('.mobile-contacts__button');
// const contactsBox = document.querySelector('.mobile-contacts');

// contactsOpenButton.addEventListener('click', function () {
//     contactsBox.classList.toggle('mobile-contacts--open');
// });
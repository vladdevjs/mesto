export const config = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_disabled',
  inputErrorClass: 'form__field_type_error',
  errorClass: '-field-error',
};

export const escKeyValue = 'Escape';

export const containerSelector = '.cards__list';
export const templateSelector = '#card-template';

export const buttonEdit = document.querySelector('.profile__edit');
export const buttonCreate = document.querySelector('.profile__add-card');

export const formProfile = document.querySelector('.form_type_profile');
export const formCard = document.querySelector('.form_type_card');

export const nameInput = formProfile.querySelector('.form__field_type_name');
export const jobInput = formProfile.querySelector('.form__field_type_job');

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

export const config = {
  formSelector: '.form',
  inputSelector: '.form__field',
  submitButtonSelector: '.button',
  inactiveButtonClass: 'button_disabled',
  inputErrorClass: 'form__field_type_error',
  errorClass: '-field-error',
};

export const escKeyValue = 'Escape';
export const AUTHORIZATION_TOKEN = '99c388b5-8533-40d6-8496-03b24d244eac';
export const GROUP_ID = 'cohort-63';
export const defaultSaveButtonMessage = 'Сохранить';
export const loadingSaveButtonMessage = 'Сохранение...';
export const errorMessage = 'Что-то пошло не так. Код ошибки:';

export const containerSelector = '.cards__list';
export const templateSelector = '#card-template';

export const buttonEditAvatar = document.querySelector(
  '.profile__avatar-change'
);
export const buttonEditProfile = document.querySelector('.profile__edit');
export const buttonCreateCard = document.querySelector('.profile__add-card');

export const formAvatar = document.querySelector('.form_type_avatar');
export const formProfile = document.querySelector('.form_type_profile');
export const formCard = document.querySelector('.form_type_card');

export const nameInput = formProfile.querySelector('.form__field_type_name');
export const jobInput = formProfile.querySelector('.form__field_type_job');

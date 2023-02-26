import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards, config } from './Const.js';

const buttonEdit = document.querySelector('.profile__edit');
const buttonCreate = document.querySelector('.profile__add-card');

const popupProfile = document.querySelector('.popup_type_profile');
const popupCard = document.querySelector('.popup_type_card');
const popupImage = document.querySelector('.popup_type_image');

const buttonSaveCard = popupCard.querySelector('.form__save');
const buttonSaveProfile = popupProfile.querySelector('.form__save');

const formProfile = popupProfile.querySelector('.form');
const nameInput = document.querySelector('.form__field_type_name');
const jobInput = document.querySelector('.form__field_type_job');

const formCard = popupCard.querySelector('.form');
const placeInput = document.querySelector('.form__field_type_place');
const imageInput = document.querySelector('.form__field_type_image');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

const viewImage = document.querySelector('.popup__image');
const viewTitle = document.querySelector('.popup__image-title');

const cardList = document.querySelector('.cards__list');
const formList = Array.from(document.querySelectorAll('.form'));

const escKeyValue = 'Escape';

const activePopup = () => {
  return document.querySelector('.popup_opened');
};

const getFormByPopup = (popup) => {
  const form = popup.querySelector('.form');
  return form;
};

const clearFormFields = (popup) => {
  getFormByPopup(popup).reset();
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnEscPress);
  popup.removeEventListener('click', closeOnClick);
}

function showPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOnEscPress);
  popup.addEventListener('click', closeOnClick);
}

function closeOnClick(evt) {
  const popup = activePopup();
  const closeButton = popup.querySelector('.popup__close');
  if (evt.target === popup || evt.target === closeButton) {
    closePopup(popup);
  }
}

function closeOnEscPress(evt) {
  if (evt.key === escKeyValue) {
    closePopup(activePopup());
  }
}

function disableButton(popup) {
  const formValidator = new FormValidator(config, getFormByPopup(popup));
  formValidator.disableSubmitButton();
}

function hideValidationError(popup) {
  const form = getFormByPopup(popup);
  const inputs = Array.from(form.querySelectorAll('.form__field'));
  const formValidator = new FormValidator(config, form);
  inputs.forEach((input) => {
    formValidator.hideValidationError(input);
  });
}

function showProfilePopup() {
  showPopup(popupProfile);
  hideValidationError(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  disableButton(popupProfile);
}

function showCardPopup() {
  clearFormFields(popupCard);
  hideValidationError(popupCard);
  showPopup(popupCard);
  disableButton(popupCard);
}

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  disableButton(popupProfile);
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

function openImage(src, text) {
  showPopup(popupImage);
  viewImage.src = src;
  viewImage.alt = text;
  viewTitle.textContent = text;
}

function createCard(data, templateSelector, openImage) {
  const card = new Card(data, templateSelector, openImage);
  const cardElement = card.generateCard();
  return cardElement;
}

function handleFormCardSubmit(evt) {
  evt.preventDefault();
  disableButton(popupCard);
  const formValue = { name: placeInput.value, link: imageInput.value };
  const cardElement = createCard(formValue, '#card-template', openImage);
  cardList.prepend(cardElement);
  closePopup(popupCard);
  evt.target.reset();
}

initialCards.forEach((item) => {
  const cardElement = createCard(item, '#card-template', openImage);
  cardList.append(cardElement);
});

formList.forEach((form) => {
  const formValidator = new FormValidator(config, form);
  formValidator.enableValidation();
});

buttonEdit.addEventListener('click', () => showProfilePopup(popupProfile));
buttonCreate.addEventListener('click', () => showCardPopup(popupCard));

formProfile.addEventListener('submit', handleFormProfileSubmit);
formCard.addEventListener('submit', handleFormCardSubmit);

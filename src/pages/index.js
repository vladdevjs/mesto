import './index.css';

import Card from '../components/Card';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {
  initialCards,
  config,
  buttonCreate,
  buttonEdit,
  containerSelector,
  templateSelector,
  formProfile,
  formCard,
  nameInput,
  jobInput,
} from '../utils/сonstants.js';

const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();

const renderer = (item) => {
  const card = new Card(item, templateSelector, (name, link) => {
    popupImage.open(name, link);
  });
  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section(
  { items: initialCards, renderer },
  containerSelector
);
cardList.renderItems();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  descSelector: '.profile__description',
});

const popupProfile = new PopupWithForm('.popup_type_profile', (data) =>
  userInfo.setUserInfo(data)
);

popupProfile.setEventListeners();

const popupCard = new PopupWithForm(
  '.popup_type_card',
  ({ place: name, image: link }) => {
    cardList.addItem(renderer({ name, link }));
  }
);
popupCard.setEventListeners();

buttonEdit.addEventListener('click', () => {
  popupProfile.open();
  formProfileValidator.hideAllValidationErrors();
  formProfileValidator.disableSubmitButton();
  const { name, description } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = description;
});

buttonCreate.addEventListener('click', () => {
  popupCard.open();
  formCardValidator.hideAllValidationErrors();
  formCardValidator.disableSubmitButton();
});

const formProfileValidator = new FormValidator(config, formProfile);
const formCardValidator = new FormValidator(config, formCard);

formProfileValidator.enableValidation();
formCardValidator.enableValidation();

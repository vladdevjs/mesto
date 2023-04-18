import './index.css';

import ErrorPopup from '../components/ErrorPopup.js';
import Card from '../components/Card';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import { config, AUTHORIZATION_TOKEN, GROUP_ID } from '../utils/сonstants.js';

export const containerSelector = '.cards__list';
export const templateSelector = '#card-template';
export const buttonEditAvatar = document.querySelector('.profile__avatar-change');
export const buttonEditProfile = document.querySelector('.profile__edit');
export const buttonCreateCard = document.querySelector('.profile__add-card');
export const formAvatar = document.querySelector('.form_type_avatar');
export const formProfile = document.querySelector('.form_type_profile');
export const formCard = document.querySelector('.form_type_card');
export const nameInput = formProfile.querySelector('.form__field_type_name');
export const jobInput = formProfile.querySelector('.form__field_type_job');

const errorPopup = new ErrorPopup('.error-popup');

const api = new Api({
  baseUrl: `https://mesto.nomoreparties.co/v1/${GROUP_ID}`,
  headers: {
    authorization: AUTHORIZATION_TOKEN,
    'Content-Type': 'application/json',
  },
});

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  descSelector: '.profile__description',
  avatarSelector: '.profile__avatar',
});

const renderCard = (item) => {
  const card = new Card(
    item,
    templateSelector,
    (name, link) => {
      popupImage.open(name, link);
    },
    () => {
      popupConfirmation.open();
      popupConfirmation.setHandler(() => {
        const id = card.getCardId();
        api
          .deleteCard(id)
          .then(() => {
            popupConfirmation.close();
            card.deleteCard();
          })
          .catch((err) => {
            errorPopup.show(err);
          });
      });
    },
    (id) => {
      api
        .likeCard(id)
        .then((data) => card.likeCard(data))
        .catch((err) => errorPopup.show(err));
    },
    (id) => {
      api
        .dislikeCard(id)
        .then((data) => card.dislikeCard(data))
        .catch((err) => errorPopup.show(err));
    },
    userInfo.getUserId()
  );
  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section({ items: [], renderer: renderCard }, containerSelector);

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userData, cards]) => {
    const { name, about, avatar, _id } = userData;

    userInfo.setUserId(_id);
    userInfo.setUserInfo({ name, about });
    userInfo.setUserAvatar(avatar);

    cardList.setItems(cards);
    cardList.renderItems();
  })
  .catch((err) => errorPopup.show(err));

const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();

const popupConfirmation = new PopupWithConfirmation('.popup_type_confirmation');

popupConfirmation.setEventListeners();

const popupProfile = new PopupWithForm('.popup_type_profile', (data) => {
  api
    .changeProfileData(data)
    .then(() => {
      userInfo.setUserInfo(data);
      popupProfile.close();
    })
    .catch((err) => {
      errorPopup.show(err);
    })
    .finally(() => popupProfile.renderLoading(false));
});
popupProfile.setEventListeners();

const popupCard = new PopupWithForm('.popup_type_card', ({ place: name, image: link }) => {
  api
    .addCard({ name, link })
    .then((cardData) => {
      cardList.prependItem(renderCard(cardData));
      popupCard.close();
    })
    .catch((err) => {
      errorPopup.show(err);
    })
    .finally(() => popupCard.renderLoading(false));
});
popupCard.setEventListeners();

const popupAvatar = new PopupWithForm('.popup_type_avatar', ({ avatar }) => {
  const image = document.querySelector('.profile__avatar');

  api
    .changeAvatar({ avatar })
    .then(() => {
      image.src = avatar;
      popupAvatar.close();
    })
    .catch((err) => {
      errorPopup.show(err);
    })
    .finally(() => popupAvatar.renderLoading(false));
});
popupAvatar.setEventListeners();

function handleEditProfileClick() {
  popupProfile.open();
  formProfileValidator.hideAllValidationErrors();
  formProfileValidator.disableSubmitButton();
  const { name, description } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = description;
}

function handleEditAvatarClick() {
  popupAvatar.open();
  formCardValidator.hideAllValidationErrors();
  formCardValidator.disableSubmitButton();
}

function handleCreateCardClick() {
  popupCard.open();
  formCardValidator.hideAllValidationErrors();
  formCardValidator.disableSubmitButton();
}

buttonEditProfile.addEventListener('click', handleEditProfileClick);
buttonEditAvatar.addEventListener('click', handleEditAvatarClick);
buttonCreateCard.addEventListener('click', handleCreateCardClick);

const formAvatarValidator = new FormValidator(config, formAvatar);
const formProfileValidator = new FormValidator(config, formProfile);
const formCardValidator = new FormValidator(config, formCard);

formAvatarValidator.enableValidation();
formProfileValidator.enableValidation();
formCardValidator.enableValidation();

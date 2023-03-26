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
import {
  config,
  buttonEditAvatar,
  buttonCreateCard,
  buttonEditProfile,
  containerSelector,
  templateSelector,
  formProfile,
  formCard,
  formAvatar,
  nameInput,
  jobInput,
  AUTHORIZATION_TOKEN,
  GROUP_ID,
} from '../utils/сonstants.js';

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
    (el, id) => {
      popupConfirmation.setElement(el);
      popupConfirmation.setId(id);
      popupConfirmation.open();
    },
    (id) => api.likeCard(id),
    (id) => api.dislikeCard(id),
    (err) => errorPopup.show(err),
    userInfo.getUserId()
  );
  const cardElement = card.generateCard();
  return cardElement;
};

const cardList = new Section(
  { items: [], renderer: renderCard },
  containerSelector
);

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

const popupConfirmation = new PopupWithConfirmation(
  '.popup_type_confirmation',
  (id) => {
    api
      .deleteCard(id)
      .then(() => {})
      .catch((err) => {
        errorPopup.show(err);
      });
  }
);

popupConfirmation.setEventListeners();

const popupProfile = new PopupWithForm('.popup_type_profile', (data) => {
  api
    .changeProfileData(data)
    .then(() => {
      userInfo.setUserInfo(data);
    })
    .catch((err) => {
      errorPopup.show(err);
    })
    .finally(() => popupProfile.renderLoading(false));
});
popupProfile.setEventListeners();

const popupCard = new PopupWithForm(
  '.popup_type_card',
  ({ place: name, image: link }) => {
    api
      .addCard({ name, link })
      .then((cardData) => {
        cardList.prependItem(renderCard(cardData));
      })
      .catch((err) => {
        errorPopup.show(err);
      })
      .finally(() => popupCard.renderLoading(false));
  }
);
popupCard.setEventListeners();

const popupAvatar = new PopupWithForm('.popup_type_avatar', ({ avatar }) => {
  const image = document.querySelector('.profile__avatar');

  api
    .changeAvatar({ avatar })
    .then(() => {
      image.src = avatar;
    })
    .catch((err) => {
      errorPopup.show(err);
    })
    .finally(() => popupAvatar.renderLoading(false));
});
popupAvatar.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  popupProfile.open();
  formProfileValidator.hideAllValidationErrors();
  formProfileValidator.disableSubmitButton();
  const { name, description } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = description;
});

buttonEditAvatar.addEventListener('click', () => {
  popupAvatar.open();
  formCardValidator.hideAllValidationErrors();
  formCardValidator.disableSubmitButton();
});

buttonCreateCard.addEventListener('click', () => {
  popupCard.open();
  formCardValidator.hideAllValidationErrors();
  formCardValidator.disableSubmitButton();
});

const formAvatarValidator = new FormValidator(config, formAvatar);
const formProfileValidator = new FormValidator(config, formProfile);
const formCardValidator = new FormValidator(config, formCard);

formAvatarValidator.enableValidation();
formProfileValidator.enableValidation();
formCardValidator.enableValidation();

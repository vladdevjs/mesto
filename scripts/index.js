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

const cardTemplate = document.querySelector('#card-template').content;
const cardList = document.querySelector('.cards__list');
const cardElement = cardTemplate.querySelector('.card');

const escKeyValue = 'Escape';

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnEscPress);
  popup.removeEventListener('click', closeOnClick);
}

function showPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => closeOnEscPress(evt, popup));
  popup.addEventListener('click', (evt) => closeOnClick(evt, popup));
}

function closeOnClick(evt, popup) {
  console.log(popup);
  const closeButton = popup.querySelector('.popup__close');
  if (evt.target === popup || evt.target === closeButton) {
    closePopup(popup);
  }
}

function closeOnEscPress(evt, popup) {
  if (evt.key === escKeyValue) {
    closePopup(popup);
  }
}

function disableButton(button) {
  button.classList.add('form__save_disabled');
  button.setAttribute('disabled', true);
}

function showProfilePopup() {
  showPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  disableButton(buttonSaveProfile);
}

function showCardPopup() {
  showPopup(popupCard);
  disableButton(buttonSaveCard);
}

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

function deleteCard(card) {
  card.remove();
}

function likeCard(button) {
  button.classList.toggle('card__like_active');
}

function openImage(src, text) {
  showPopup(popupImage);
  viewImage.src = src;
  viewImage.alt = text;
  viewTitle.textContent = text;
}

function createCard(src, text) {
  const card = cardElement.cloneNode(true);
  const cardText = card.querySelector('.card__title');
  const cardImage = card.querySelector('.card__image');
  const deleteButton = card.querySelector('.card__delete');
  const likeButton = card.querySelector('.card__like');
  cardImage.src = src;
  cardImage.alt = text;
  cardText.textContent = text;
  deleteButton.addEventListener('click', () => deleteCard(card));
  likeButton.addEventListener('click', () => likeCard(likeButton));
  cardImage.addEventListener('click', () => openImage(src, text));
  return card;
}

function handleFormCardSubmit(evt) {
  evt.preventDefault();
  const card = createCard(imageInput.value, placeInput.value);
  cardList.prepend(card);
  closePopup(popupCard);
  evt.target.reset();
}

function addCards() {
  const cards = initialCards.map(function (item) {
    const card = createCard(item.link, item.name);
    return card;
  });
  cardList.append(...cards);
}
addCards();

buttonEdit.addEventListener('click', () => showProfilePopup(popupProfile));
buttonCreate.addEventListener('click', () => showCardPopup(popupCard));

formProfile.addEventListener('submit', handleFormProfileSubmit);
formCard.addEventListener('submit', handleFormCardSubmit);

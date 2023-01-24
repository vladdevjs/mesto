// Constants declarations
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const buttonEdit = document.querySelector(".profile__edit");
const buttonCreate = document.querySelector(".profile__add-card");

const closeProfile = document.querySelector(".popup__close_type_profile");
const closeCard = document.querySelector(".popup__close_type_card");
const closeImage = document.querySelector(".view__close");

const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const popupImage = document.querySelector(".popup_type_image");

const formProfile = document.querySelector(".form_type_profile");
const nameInput = document.querySelector(".form__field_type_name");
const jobInput = document.querySelector(".form__field_type_job");

const formCard = document.querySelector(".form_type_card");
const placeInput = document.querySelector(".form__field_type_place");
const imageInput = document.querySelector(".form__field_type_image");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");

const viewImage = document.querySelector(".view__image");
const viewTitle = document.querySelector(".view__title");

const cardTemplate = document.querySelector("#card-template").content;
const cardList = document.querySelector(".cards__list");
const cardElement = cardTemplate.querySelector(".card");

// Show/close popup

function showCardPopup() {
  popupCard.classList.add("popup_opened");
}

function showProfilePopup() {
  popupProfile.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function showImagePopup() {
  popupImage.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// Update default values

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

function handleFormCardSubmit(evt) {
  evt.preventDefault();
  const card = cardElement.cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardText = card.querySelector(".card__title");
  cardImage.src = imageInput.value;
  cardImage.alt = placeInput.value;
  cardText.textContent = placeInput.value;
  cardList.prepend(card);
  closePopup(popupCard);
}

// Handlers

buttonEdit.addEventListener("click", showProfilePopup);
buttonCreate.addEventListener("click", showCardPopup);

closeProfile.addEventListener("click", () => closePopup(popupProfile));
closeCard.addEventListener("click", () => closePopup(popupCard));
closeImage.addEventListener("click", () => closePopup(popupImage));

formProfile.addEventListener("submit", handleFormProfileSubmit);
formCard.addEventListener("submit", handleFormCardSubmit);

// Add cards from array

initialCards.forEach(function (item) {
  const card = cardElement.cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardText = card.querySelector(".card__title");
  cardImage.src = item.link;
  cardImage.alt = item.name;
  cardText.textContent = item.name;
  cardList.append(card);
});

// delete card on button click

const deleteButtons = document.querySelectorAll(".card__delete");
deleteButtons.forEach(function (deleteButton) {
  deleteButton.addEventListener("click", function () {
    const card = deleteButton.closest(".card");
    card.remove();
  });
});

// show fullscreen

const cardImage = document.querySelectorAll(".card__image");
cardImage.forEach(function (item) {
  item.addEventListener("click", function () {
    showImagePopup();
    viewImage.src = this.src;
    viewTitle.textContent = this.alt;
  });
});

// Make likes clickable

const like = document.querySelectorAll(".card__like");

like.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("card__like_active");
  });
});

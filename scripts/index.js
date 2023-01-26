// Constants declarations

const buttonEdit = document.querySelector(".profile__edit");
const buttonCreate = document.querySelector(".profile__add-card");

const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const popupImage = document.querySelector(".popup_type_image");

const buttonCloseProfile = popupProfile.querySelector(".popup__close");
const buttonCloseCard = popupCard.querySelector(".popup__close");
const buttonCloseImage = popupImage.querySelector(".popup__close");

const formProfile = popupProfile.querySelector(".form");
const nameInput = document.querySelector(".form__field_type_name");
const jobInput = document.querySelector(".form__field_type_job");

const formCard = popupCard.querySelector(".form");
const placeInput = document.querySelector(".form__field_type_place");
const imageInput = document.querySelector(".form__field_type_image");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");

const viewImage = document.querySelector(".popup__image");
const viewTitle = document.querySelector(".popup__image-title");

const cardTemplate = document.querySelector("#card-template").content;
const cardList = document.querySelector(".cards__list");
const cardElement = cardTemplate.querySelector(".card");

// Universal show/close popup functions

function showPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

// Get current profile name and description

function showProfilePopup() {
  showPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// Update default values

function handleFormProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

// Helpers

function deleteCard(card) {
  card.remove();
}

function likeCard(button) {
  button.classList.toggle("card__like_active");
}

function openImage(src, text) {
  showPopup(popupImage);
  viewImage.src = src;
  viewImage.alt = text;
  viewTitle.textContent = text;
}

// Create card logics

function createCard(src, text) {
  const card = cardElement.cloneNode(true);
  const cardText = card.querySelector(".card__title");
  const cardImage = card.querySelector(".card__image");
  const deleteButton = card.querySelector(".card__delete");
  const likeButton = card.querySelector(".card__like");
  cardImage.src = src;
  cardImage.alt = text;
  cardText.textContent = text;
  deleteButton.addEventListener("click", () => deleteCard(card));
  likeButton.addEventListener("click", () => likeCard(likeButton));
  cardImage.addEventListener("click", () => openImage(src, text));
  return card;
}

function handleFormCardSubmit(evt) {
  evt.preventDefault();
  const card = createCard(imageInput.value, placeInput.value);
  cardList.prepend(card);
  closePopup(popupCard);
  evt.target.reset();
}

// Handlers

buttonEdit.addEventListener("click", () => showProfilePopup(popupProfile));
buttonCreate.addEventListener("click", () => showPopup(popupCard));

buttonCloseProfile.addEventListener("click", () => closePopup(popupProfile));
buttonCloseCard.addEventListener("click", () => closePopup(popupCard));
buttonCloseImage.addEventListener("click", () => closePopup(popupImage));

formProfile.addEventListener("submit", handleFormProfileSubmit);
formCard.addEventListener("submit", handleFormCardSubmit);

// Close popup on Esc press and click outside

const activePopup = () => {
  const activePopup = document.querySelector(".popup_opened");
  return activePopup;
};

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (activePopup()) {
      closePopup(activePopup());
    }
  }
});

document.addEventListener("click", function (evt) {
  if (evt.target == activePopup()) {
    closePopup(activePopup());
  }
});

// Add cards from array
function addCards() {
  const cards = initialCards.map(function (item) {
    const card = createCard(item.link, item.name);
    return card;
  });
  cardList.append(...cards);
}
addCards();

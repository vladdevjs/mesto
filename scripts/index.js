let buttonEdit = document.querySelector(".profile__edit");
let buttonClose = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");
let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__field_type_name");
let jobInput = document.querySelector(".form__field_type_job");
let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__description");

function showPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

buttonEdit.addEventListener("click", showPopup);
buttonClose.addEventListener("click", closePopup);
formElement.addEventListener("submit", handleFormSubmit);

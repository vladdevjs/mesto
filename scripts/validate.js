const validationSettings = {
  formSelector: ".form",
  inputSelector: ".form__field",
  submitButtonSelector: ".form__save",
  inactiveButtonClass: "form__save_disabled",
  inputErrorClass: "form__field_type_error",
  errorClass: "-field-error",
};

const getErrorElement = (formElement, inputElement, errorClass) => {
  return formElement.querySelector(`.${inputElement.id}${errorClass}`);
};

const showValidationError = (
  formElement,
  inputElement,
  errorMessage,
  inputErrorClass,
  errorClass
) => {
  inputElement.classList.add(inputErrorClass);
  getErrorElement(formElement, inputElement, errorClass).textContent =
    errorMessage;
};

const hideValidationError = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  const errorElement = getErrorElement(formElement, inputElement, errorClass);
  inputElement.classList.remove(inputErrorClass);
  getErrorElement(formElement, inputElement, errorClass).textContent = "";
};

const isValid = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showValidationError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      inputErrorClass,
      errorClass
    );
  } else {
    hideValidationError(formElement, inputElement, inputErrorClass, errorClass);
  }
};

const setEventListeners = (
  formElement,
  inputList,
  buttonElement,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
) => {
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};

const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  const inputErrorClass = obj.inputErrorClass;
  const errorClass = obj.errorClass;
  const buttonClass = obj.submitButtonSelector;
  const inactiveButtonClass = obj.inactiveButtonClass;
  formList.forEach((formElement) => {
    const inputList = Array.from(
      formElement.querySelectorAll(obj.inputSelector)
    );
    const buttonElement = formElement.querySelector(buttonClass);
    setEventListeners(
      formElement,
      inputList,
      buttonElement,
      inactiveButtonClass,
      inputErrorClass,
      errorClass
    );
  });
};

enableValidation(validationSettings);

export default class FormValidator {
  constructor(config, formElement) {
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(config.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      config.submitButtonSelector
    );
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
  }

  _getErrorElement(inputElement) {
    return this._formElement.querySelector(
      `.${inputElement.id}${this._errorClass}`
    );
  }

  _showValidationError(inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    this._getErrorElement(inputElement).textContent =
      inputElement.validationMessage;
  }

  _hideValidationError(inputElement) {
    const errorElement = this._getErrorElement(inputElement);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  }

  hideAllValidationErrors() {
    this._inputList.forEach((input) => {
      this._hideValidationError(input);
    });
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showValidationError(inputElement);
    } else {
      this._hideValidationError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputEl) => !inputEl.validity.valid);
  }

  disableSubmitButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  }

  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.removeAttribute('disabled');
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}

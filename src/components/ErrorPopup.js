export default class ErrorPopup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._message = this._popup.querySelector('.error-popup__message');
  }

  show(message) {
    this._message.textContent = message;
    this._popup.classList.add('error-popup_showed');
    setTimeout(() => {
      this._popup.classList.remove('error-popup_showed');
    }, 5000);
  }
}

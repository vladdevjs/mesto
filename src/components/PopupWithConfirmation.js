import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleDelete) {
    super(popupSelector);
    this._button = this._popup.querySelector('.button');
    this._handleDelete = handleDelete;
  }

  setElement(element) {
    this.element = element;
  }

  setId(id) {
    this._id = id;
  }

  deleteCard() {
    this.element.remove();
    this.element = null;
  }

  setEventListeners() {
    super.setEventListeners();
    this._button.addEventListener('click', () => {
      this._handleDelete(this._id);
      this.deleteCard();
      this.close();
    });
  }
}

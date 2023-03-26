import Popup from './Popup.js';
import {
  defaultSaveButtonMessage,
  loadingSaveButtonMessage,
} from '../utils/сonstants.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.form');
    this._button = this._form.querySelector('.button');
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.form__field');
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._button.textContent = loadingSaveButtonMessage;
    } else {
      this._button.textContent = defaultSaveButtonMessage;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.renderLoading(true);
      this._submitHandler(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

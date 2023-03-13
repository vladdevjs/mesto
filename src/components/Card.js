import placeholder from '../images/placeholder.jpg';

export default class Card {
  constructor({ name, link }, templateSelector, handleCardClick) {
    this._text = name;
    this._image = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getTemplate();
    this._imageElement = this._element.querySelector('.card__image');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._text;
    this._imageElement.src = this._image;
    this._imageElement.alt = this._text;
    this._imageElement.onerror = () => {
      this._imageElement.src = placeholder; //if the image link is broken/invalid, use placeholder
    };
    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector('.card__delete')
      .addEventListener('click', () => {
        this._handleDeleteBtnClick();
      });
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._handleLikeBtnClick();
    });
    this._imageElement.addEventListener('click', () => {
      this._handleCardClick(this._text, this._imageElement.src); // passing link to final asset: image or placeholder
    });
  }

  _handleDeleteBtnClick() {
    this._element.remove();
    this._element = null; //nullifing object to free up memory
  }

  _handleLikeBtnClick() {
    this._element
      .querySelector('.card__like')
      .classList.toggle('card__like_active');
  }
}

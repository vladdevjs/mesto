export class Card {
  constructor(data, templateSelector, openImage) {
    this._text = data.name;
    this._image = data.link;
    this._templateSelector = templateSelector;
    this._openImage = openImage;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._text;
    this._element.querySelector('.card__image').src = this._image;
    this._element.querySelector('.card__image').alt = this._text;
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
    this._element
      .querySelector('.card__image')
      .addEventListener('click', () => {
        this._openImage(this._image, this._text);
      });
  }

  _handleDeleteBtnClick() {
    this._element.remove();
  }

  _handleLikeBtnClick() {
    this._element
      .querySelector('.card__like')
      .classList.toggle('card__like_active');
  }
}

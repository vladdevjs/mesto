import placeholder from '../images/placeholder.jpg';

export default class Card {
  constructor(
    { name, link, _id, owner, likes },
    templateSelector,
    handleCardClick,
    handleDeleteBtnClick,
    handleLikeButton,
    handleDislikeButton,
    handleError,
    currentUser
  ) {
    this._text = name;
    this._image = link;
    this._cardId = _id;
    this._likes = likes;
    this._ownerId = owner._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteBtnClick = handleDeleteBtnClick;
    this._handleLikeButton = handleLikeButton;
    this._handleDislikeButton = handleDislikeButton;
    this._handleError = handleError;
    this._element = this._getTemplate();
    this._currentUser = currentUser;
    this._imageElement = this._element.querySelector('.card__image');
    this._likeButtonElement = this._element.querySelector('.card__like');
    this._likeCounterElement = this._element.querySelector('.card__like-count');
    this._deleteButton = this._element.querySelector('.card__delete');
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.card')
      .cloneNode(true);
    return cardElement;
  }

  _showLikes() {
    if (this._likes.length) {
      this._likeCounterElement.textContent = this._likes.length;
    } else {
      this._likeCounterElement.textContent = ' ';
    }
  }

  _hideDeleteButton() {
    if (this._currentUser !== this._ownerId) {
      this._deleteButton.style.display = 'none';
    }
  }

  generateCard() {
    this._setEventListeners();
    this._element.querySelector('.card__title').textContent = this._text;
    this._showLikes();
    this._hideDeleteButton();
    this._fillLikeButton();
    this._imageElement.src = this._image;
    this._imageElement.alt = this._text;
    this._imageElement.onerror = () => {
      this._imageElement.src = placeholder;
    };
    return this._element;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteBtnClick(this._element, this._cardId);
    });
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._handleLikeBtnClick();
    });
    this._imageElement.addEventListener('click', () => {
      this._handleCardClick(this._text, this._imageElement.src);
    });
  }

  _isLiked() {
    return this._likes.some((obj) => obj._id === this._currentUser);
  }

  _fillLikeButton() {
    if (this._isLiked()) {
      this._likeButtonElement.classList.add('card__like_active');
    }
  }

  _updateLikes(data) {
    this._likes = data.likes;
    this._showLikes();
  }

  _handleLikeBtnClick() {
    if (this._isLiked()) {
      this._likeButtonElement.classList.remove('card__like_active');
      this._handleDislikeButton(this._cardId)
        .then((data) => {
          this._updateLikes(data);
        })
        .catch((err) => this._handleError(err));
    } else {
      this._likeButtonElement.classList.add('card__like_active');
      this._handleLikeButton(this._cardId)
        .then((data) => {
          this._updateLikes(data);
        })
        .catch((err) => this._handleError(err));
    }
  }
}
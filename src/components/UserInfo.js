export default class UserInfo {
  constructor({ nameSelector, descSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._descElement = document.querySelector(descSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._descElement.textContent,
    };
  }

  setUserId(id) {
    this._id = id;
  }

  getUserId() {
    return this._id;
  }

  setUserInfo({ name, about }) {
    this._nameElement.textContent = name;
    this._descElement.textContent = about;
  }

  setUserAvatar(avatar) {
    this._avatarElement.src = avatar;
  }
}

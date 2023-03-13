export default class UserInfo {
  constructor({ nameSelector, descSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._descElement = document.querySelector(descSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._descElement.textContent,
    };
  }

  setUserInfo({ name, description }) {
    this._nameElement.textContent = name;
    this._descElement.textContent = description;
  }
}

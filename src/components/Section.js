export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  setItems(items) {
    this._items = items;
  }

  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer(item);
      this.appendItem(element);
    });
  }

  prependItem(element) {
    this._container.prepend(element);
  }

  appendItem(element) {
    this._container.append(element);
  }
}

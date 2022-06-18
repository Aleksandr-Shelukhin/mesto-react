export default class Section {

  constructor({items, renderer}, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element, addToStart) {
    if(addToStart){
      this._container.prepend(element);
    } else {
      this._container.append(element);
    }
  }

  renderItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  }
}

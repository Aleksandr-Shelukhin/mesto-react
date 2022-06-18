import Popup from './Popup.js';

export default class PopupWithImage extends Popup {

  constructor(popupSelector) {
    super(popupSelector);
    this._foto = this._popupElement.querySelector('.popup__image');
    this._fotoTitle = this._popupElement.querySelector('.popup__image-caption');
  }

  open(fotoData) {
    this._fotoTitle.textContent = fotoData.name;
    this._foto.src = fotoData.link;
    this._foto.alt = fotoData.name;
    super.open();
  }
}

import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {

  constructor(popupSelector, { formSubmitter }) {
    super(popupSelector);
    this._formSubmitter = formSubmitter;
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__form-input');
  }

  showLoadingProcess(isLoading) {
    if (isLoading) {
      this._formElement.querySelector('.popup__form-button').textContent = 'Удаление...';
    } else {
      this._formElement.querySelector('.popup__form-button').textContent = 'Да';
    }
  }

  open(cardId, element, cardElement) {
    this._currentCardId = cardId;
    this._currentElement = element;
    this._cardElement = cardElement;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitter(this._currentCardId, this._currentElement, this._cardElement);
    });
  }
}

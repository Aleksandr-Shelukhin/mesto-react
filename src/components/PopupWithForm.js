import Popup from './Popup.js';

export default class PopupWithForm extends Popup {

  constructor(popupSelector, { formSubmitter }) {
    super(popupSelector);
    this._formSubmitter = formSubmitter;
    this._formElement = this._popupElement.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__form-input');
  }

  _getInputValues() {
    const data = {};
    this._inputList.forEach((input) => {
      data[input.name] = input.value
    });
    return data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSubmitter(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  showLoadingProcess(isLoading) {
    if (isLoading) {
      this._formElement.querySelector('.popup__form-button').textContent = "Сохранение...";
    } else {
      this._formElement.querySelector('.popup__form-button').textContent = "Сохранить";
    }
  }
}

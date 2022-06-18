
export default class FormValidator {
  constructor(formElement, validateSettings) {
    this._formElement = formElement;
    this._formSelector = validateSettings.formSelector,
    this._errorClass = validateSettings.errorClass,
    this._inputSelector = validateSettings.inputSelector,
    this._submitButtonSelector = validateSettings.submitButtonSelector,
    this._inactiveButtonClass = validateSettings.inactiveButtonClass,
    this._inputErrorClass = validateSettings.inputErrorClass,
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector)),
    this._formList = Array.from(this._formElement.querySelectorAll(this._formSelector)),
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector)
  }

    //Метод Добавляет отображение ошибки
  _showInputError(inputElement, errorMessage) {
     // Находим элемент ошибки внутри самой функции
     const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

     inputElement.classList.add(this._inputErrorClass);
     // Переданный параметр помещаем в span под полем ввода
     errorElement.textContent = errorMessage;
    // Делаем красным цветом нижнюю границу поля
    errorElement.classList.add(this._errorClass);
  }

  //Метод Удаляет отображение ошибки
  _hideInputError(inputElement) {
    // Находим элемент ошибки
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    // Очищаем span под полем ввода
    errorElement.textContent = '';
    // Убираем красный цвет у нижней границы поля
    errorElement.classList.remove(this._errorClass);
  }

  //Метод Проверяет валидность поля
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      // Если проходит, скроем
      this._hideInputError(inputElement);
    }
  }

  // Метод проверит наличие невалидных полей
  // Принимает массив полей
  _hasInvalidInput() {
     //проходим по массиву методом some
    return this._inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

      return !inputElement.validity.valid;
    });
  }

  // Метод переключения состояния кнопки
  // Принимает массив полей ввода
  // и элемент кнопки, состояние которой нужно менять
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this.disableButton();
    } else {
      // иначе сделай кнопку активной
      this._enableButton();
    }
  }

  //Метод блокировки кнопки submit
  disableButton(){
    this._buttonElement.disabled = true;
    this._buttonElement.classList.add(this._inactiveButtonClass);
  }

  //Метод разблокировки кнопки submit
  _enableButton(){
    this._buttonElement.disabled = false;
    this._buttonElement.classList.remove(this._inactiveButtonClass);
  }

  //Метод со слушателями
  _setEventListeners() {
    // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
    this._toggleButtonState();

    // Обойдём все элементы полученной коллекции
    this._inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        this._isValid(inputElement)

        // Вызоваем toggleButtonState и передаем ей массив полей и кнопку
        this._toggleButtonState();
      })
    });
  }

  enableValidation() {
    //отменяем стандартное поведение у элемента
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    //вешаем слушатель проверки вводимых данных
    this._setEventListeners();
  }

  clearAllInputErrors () { // очищаем все ошибки в формах
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

};

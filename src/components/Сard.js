export default class Card {
  //добавить в конструктор данные карточки
  constructor(cardElement, userId, templateSelector, handleCardClick, handleLikeClick, handleDeleteClick) {
    this._cardName = cardElement.name;
    this._cardLink = cardElement.link;
    this._id = cardElement._id;
    this.like = cardElement.likes;
    this._userId = userId;
    this._ownerId = cardElement.owner._id;
    
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;

    this._elementTemplate = this._getTemplate(); //записываем в _elementTemplate карточку клонированную из template
    this._elementHeart = this._elementTemplate.querySelector('.element__button_type_heart');
    this._elementLikeCounter = this._elementTemplate.querySelector('.element__like-counter');
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  handleLike(likes) {
    this._elementHeart.classList.toggle('element__button_active');
    this._elementLikeCounter.textContent = likes.length; //передаем длину массива в элемент-счетчик лайков
  }

  checkedId() {
    this.like.some((likeItem) => {
      return likeItem._id === this._userId
    })
  }

  addLike(likes) {
    this._elementHeart.classList.add('element__button_active');
    this._elementLikeCounter.textContent = likes.length;
  }

  removeLike(likes) {
    this._elementHeart.classList.remove('element__button_active');
    this._elementLikeCounter.textContent = likes.length;
  }

  deleteCard() {
    this._elementTemplate.remove();
    this._elementTemplate = null;
  }

  generateCard() {
    this.cardImage = this._elementTemplate.querySelector('.element__image');
    // Заполняем карточку данными
    this.cardImage.src = this._cardLink;
    this.cardImage.alt = this._cardName;
    this._elementTemplate.querySelector('.element__title').textContent = this._cardName;
    this._elementTemplate.querySelector('.element__like-counter').textContent = this.like.length;
    this._elementTemplate.querySelector('.element__button_type_trash').classList.add(
      this._userId === this._ownerId // если id текущего пользователя не совпадает с id пользователя загрузившего карточку, то скрываем кнопку удаления
      ? 'element__button_visible'
      : 'element__button_hidden'
      );
    this.like.forEach((likeItem) => {
      if (likeItem._id === this._userId) {
        this.addLike(this.like);
      }
    })
    this._setEventListeners();
    // Возвращаем заполненную данными карточку
    return this._elementTemplate;
  }

  _setEventListeners() {
    this._elementHeart.addEventListener('click', () => {
      this._handleLikeClick(this._id, this._elementTemplate, this);
    });

    this._elementTemplate.querySelector('.element__button_type_trash').addEventListener('click', () => {
      this._handleDeleteClick(this._id, this._elementTemplate, this);
    });

    this.cardImage.addEventListener('click', () => {
      this._handleCardClick({ name: this._cardName, link: this._cardLink });
    });

  }


}

import React from "react";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfilePopupOpen() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlacePopupOpen() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarPopupOpen() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleDeleteConfirmPopupOpen() {
    setIsDeleteConfirmPopupOpen(true);
  }

  function handleCardClick(cardItem) {
    setSelectedCard(cardItem);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeleteConfirmPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }


  return (
    <div className="page">
      <Header/>
      <Main
        onEditProfile={handleEditProfilePopupOpen}
        onEditAvatar={handleEditAvatarPopupOpen}
        onAddPlace={handleAddPlacePopupOpen}
        onConfirmDelete={handleDeleteConfirmPopupOpen}
        onCardClick={handleCardClick}
      />
      <Footer/>

      {/*Попап редактирования профиля*/}
      <PopupWithForm title={'Редактировать профиль'} name={'profile'} textButton={'Сохранить'}
                     isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__form-field" htmlFor="name-input">
          <input id="name-input" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required
                 className="popup__form-input"/>
          <span className="name-input-error popup__form-input-error"></span>
        </label>

        <label className="popup__form-field" htmlFor="job-input">
          <input id="job-input" type="text" name="job" placeholder="Род деятельности" minLength="2" maxLength="200"
                 required className="popup__form-input"/>
          <span className="job-input-error popup__form-input-error"></span>
        </label>
      </PopupWithForm>

      {/*Попап добавление нового места*/}
      <PopupWithForm title={'Новое место'} name={'cards'} textButton={'Добавить'} isOpen={isAddPlacePopupOpen}
                     onClose={closeAllPopups}>
        <label className="popup__form-field" htmlFor="place-input">
          <input id="place-input" type="text" name="place" placeholder="Название" minLength="2" maxLength="30"
                 required className="popup__form-input"/>
          <span className="place-input-error popup__form-input-error"></span>
        </label>

        <label className="popup__form-field" htmlFor="link-input">
          <input id="link-input" type="url" name="link" placeholder="Ссылка на картинку" required
                 className="popup__form-input"/>
          <span className="link-input-error popup__form-input-error"></span>
        </label>
      </PopupWithForm>

      {/*Попап обновления аватара*/}
      <PopupWithForm title={'Обновить аватар'} name={'avatar'} textButton={'Обновить'} isOpen={isEditAvatarPopupOpen}
                     onClose={closeAllPopups}>
        <label className="popup__form-field" htmlFor="avatar-link-input">
          <input id="avatar-link-input" type="url" name="avatar-link" placeholder="Ссылка на аватар" required
                 className="popup__form-input"/>
          <span className="avatar-link-input-error popup__form-input-error"></span>
        </label>
      </PopupWithForm>

      {/*Попап подтверждения удаления*/}
      <PopupWithForm title={'Вы уверены?'} name={'confirm'} textButton={'Да'} isOpen={isDeleteConfirmPopupOpen}
                     onClose={closeAllPopups}>

      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isImagePopupOpen}/>

    </div>
  );
}

export default App;

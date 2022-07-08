import React, {useState, useEffect} from 'react';
import {api} from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDeleteConfirmPopupOpen, setIsDeleteConfirmPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

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

  function handleUpdateUser(newInfo) {
    console.log(newInfo)
    api.addUserInfo(newInfo)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
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
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        {/*Попап добавление нового места*/}
        <PopupWithForm
          title={'Новое место'}
          name={'cards'}
          textButton={'Добавить'}
          isOpen={isAddPlacePopupOpen}
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
        <PopupWithForm
          title={'Обновить аватар'}
          name={'avatar'}
          textButton={'Обновить'}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
          <label className="popup__form-field" htmlFor="avatar-link-input">
            <input id="avatar-link-input" type="url" name="avatar-link" placeholder="Ссылка на аватар" required
                   className="popup__form-input"/>
            <span className="avatar-link-input-error popup__form-input-error"></span>
          </label>
        </PopupWithForm>

        {/*Попап подтверждения удаления*/}
        <PopupWithForm
          title={'Вы уверены?'}
          name={'confirm'}
          textButton={'Да'}
          isOpen={isDeleteConfirmPopupOpen}
          onClose={closeAllPopups}>
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          isOpen={isImagePopupOpen}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;

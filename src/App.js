import React from "react";
import './index.css';

function App() {
  return (

      <div className="page">

        <header className="header">
          <div className="header__logo"></div>
        </header>

        <main className="content">
          <div className="container">
            <section className="profile">
              <div className="profile__avatar-wrapper">
                <div className="profile__avatar-edit-icon"></div>
                <img className="profile__avatar" src="/" alt="Аватарка пользователя"/>
              </div>
              <div className="profile__info-wrapper">
                <div className="profile__info">
                  <h1 className="profile__title">Жак-Ив Кусто</h1>
                  <p className="profile__subtitle">Исследователь океана</p>
                </div>
                <button className="profile__edit-button transition-on-hover" type="button"></button>
              </div>
              <button className="profile__add-button transition-on-hover" type="button"></button>
            </section>

            <section className="elements">
              <ul className="elements__list">

              </ul>
            </section>


          </div>
        </main>

        <footer className="footer">
          <p className="footer__copyright">© 2022 Mesto Russia</p>
        </footer>

        <div className="popup popup_type_form" id="profilePopup">
          <div className="popup__container popup__container_includes_form">
            <h3 className="popup__name">Редактировать профиль</h3>
            <form className="popup__form popup__form_type_profile" name="profile" novalidate>

              <label className="popup__form-field" for="name-input">
                <input id="name-input" type="text" name="name" placeholder="Имя" minlength="2" maxlength="40" required className="popup__form-input"/>
                  <span className="name-input-error popup__form-input-error"></span>
              </label>

              <label className="popup__form-field" for="job-input">
                <input id="job-input" type="text" name="job" placeholder="Род деятельности" minlength="2" maxlength="200" required className="popup__form-input"/>
                  <span className="job-input-error popup__form-input-error"></span>
              </label>

              <button type="submit" className="popup__form-button transition-on-hover">Сохранить</button>

            </form>
            <button type="button" className="popup__close-button transition-on-hover" id="profilePopupCloseButton"></button>
          </div>
        </div>


        <div className="popup popup_type_form" id="profileAvatarEditPopup">
          <div className="popup__container popup__container_includes_form">
            <h3 className="popup__name">Обновить аватар</h3>
            <form className="popup__form popup__form_type_avatar" name="place" novalidate>
              <label className="popup__form-field" for="avatar-link-input">
                <input id="avatar-link-input" type="url" name="avatar-link" placeholder="Ссылка на аватар" required className="popup__form-input"/>
                  <span className="avatar-link-input-error popup__form-input-error"></span>
              </label>

              <button type="submit" className="popup__form-button transition-on-hover">Сохранить</button>

            </form>
            <button type="button" className="popup__close-button transition-on-hover"></button>
          </div>
        </div>


        <div className="popup popup_type_form" id="placePopup">
          <div className="popup__container popup__container_includes_form">
            <h3 className="popup__name">Новое место</h3>
            <form className="popup__form popup__form_type_place" name="place" novalidate>

              <label className="popup__form-field" for="place-input">
                <input id="place-input" type="text" name="place" placeholder="Название" minlength="2" maxlength="30" required className="popup__form-input"/>
                  <span className="place-input-error popup__form-input-error"></span>
              </label>

              <label className="popup__form-field" for="link-input">
                <input id="link-input" type="url" name="link" placeholder="Ссылка на картинку" required className="popup__form-input"/>
                  <span className="link-input-error popup__form-input-error"></span>
              </label>

              <button type="submit" className="popup__form-button transition-on-hover">Сохранить</button>

            </form>
            <button type="button" className="popup__close-button transition-on-hover"></button>
          </div>
        </div>


        <div className="popup popup_type_form" id="confirmPopup">
          <div className="popup__container popup__container_includes_form">
            <h3 className="popup__name popup__name_type_confirm">Вы уверены?</h3>
            <form className="popup__form popup__form_type_confirm" name="confirm" novalidate>
              <button type="submit" className="popup__form-button transition-on-hover">Да</button>
            </form>
            <button type="button" className="popup__close-button popup__close-button transition-on-hover"></button>
          </div>
        </div>


        <div className="popup popup_type_image" id="galleryPopup">
          <div className="popup__image-wrapper">
            <figure className="popup__figure">
              <picture>
                <img className="popup__image" src="/" alt="Фотография горы"/>
              </picture>
              <figcaption className="popup__image-caption">Элбрус</figcaption>
            </figure>
            <button type="button" className="popup__close-button transition-on-hover" id="galleryPopupCloseButton"></button>
          </div>


        </div>

      </div>
  );
}

export default App;

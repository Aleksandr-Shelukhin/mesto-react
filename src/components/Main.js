import React, {useState, useEffect, useContext} from 'react';
import {api} from "../utils/Api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) => {
  const [cards, setCards] = useState([]);

  const currentUser = useContext(CurrentUserContext)

  useEffect(() => {
    api.renderCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
      .then(() => {
        setCards((state) => state.filter((c) => !(c._id === card._id)));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <main className="content">
      <div className="container">
        <section className="profile">
          <div
            onClick={onEditAvatar}
            className="profile__avatar-wrapper">
            <div className="profile__avatar-edit-icon"></div>
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="Аватарка пользователя"/>
          </div>
          <div className="profile__info-wrapper">
            <div className="profile__info">
              <h1 className="profile__title">{currentUser.name}</h1>
              <p className="profile__subtitle">{currentUser.about}</p>
            </div>
            <button
              onClick={onEditProfile}
              className="profile__edit-button transition-on-hover"
              type="button">
            </button>
          </div>
          <button
            onClick={onAddPlace}
            className="profile__add-button transition-on-hover"
            type="button">
          </button>
        </section>

        <section className="elements">
          <ul className="elements__list">
            {
              cards.map((cardItem) => (
                <Card
                  card={cardItem}
                  key={cardItem._id}
                  onCardClick={onCardClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                />
              ))
            }

          </ul>
        </section>
      </div>
    </main>
  );
};

export default Main;
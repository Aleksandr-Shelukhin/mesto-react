import React, {useEffect} from 'react';
import {api} from "../utils/Api";
import Card from "./Card";

const Main = ({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) => {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.getNeededData()
      .then((res) => {
        const[userInfo, cards] = res;

        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);

        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <main className="content">
      <div className="container">
        <section className="profile">
          <div onClick={onEditAvatar} className="profile__avatar-wrapper">
            <div className="profile__avatar-edit-icon"></div>
            <img className="profile__avatar" src={userAvatar} alt="Аватарка пользователя"/>
          </div>
          <div className="profile__info-wrapper">
            <div className="profile__info">
              <h1 className="profile__title">{userName}</h1>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button onClick={onEditProfile} className="profile__edit-button transition-on-hover" type="button"></button>
          </div>
          <button onClick={onAddPlace} className="profile__add-button transition-on-hover" type="button"></button>
        </section>

        <section className="elements">
          <ul className="elements__list">
            {
              cards.map((cardItem) => (
                <Card card={cardItem} key={cardItem._id} onCardClick={onCardClick}/>
              ))
            }

          </ul>
        </section>
      </div>
    </main>
  );
};

export default Main;
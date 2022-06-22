import React from 'react';

const Card = (props) => {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (

    <li className="element">
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
      <div className="element__footer">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-wrapper">
          <button className="element__button element__button_type_heart transition-on-hover"
                  type="button"></button>
          <span className="element__like-counter">{props.card.likes.length}</span>
        </div>
      </div>
      <button className="element__button element__button_type_trash transition-on-hover"
              type="button"></button>
    </li>

  );
};

export default Card;
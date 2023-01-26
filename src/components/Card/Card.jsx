import React from 'react'
import './Card.css'
// import CardImage from './../../images/catalog01.jpg'

const Card = ({ card }) => {
    return (
        <li className="cards__list-item">
            <article className="card">
                <p className="card__chevron card__chevron_sale">Распродажа</p>
                <img className="card__image" src={card.image} alt="Фото товара" />
                <h2 className="card__title">{card.title}</h2>
                <p className="card__description">{card.about}</p>
                <p className="card__price">{card.price} <s>{card.discount}</s></p>
                <div className="card__button-wrapper">
                    <button className="card__button button card__button_type_more" type='button'>Подробнее</button>
                    <button className="card__button button card__button_type_add" type='button'>Купить</button>
                </div>
            </article>
        </li>
    )
}

export default Card
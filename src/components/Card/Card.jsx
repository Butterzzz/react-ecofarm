import React from 'react'
import './Card.css'

const Card = ({ card }) => {
    return (
        <li className="cards__list-item">
            <article className="card">
                <div className="card__chevron-container">
                    {card.isNew && <p className='card__chevron card__chevron_new'>Новинка</p>}
                    {card.isHit && <p className='card__chevron card__chevron_hit'>Хит продаж</p>}
                    {card.isSale && <p className='card__chevron card__chevron_sale'>Распродажа</p>}
                </div>
                <div className="card__image-container card__image-container_type_loading">
                    <img className="card__image" src={card.image} alt="Фото товара" />
                </div>
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
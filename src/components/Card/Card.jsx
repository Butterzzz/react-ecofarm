import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ card }) => {
    function handleClick() {
        alert('По кнопке кликнули');
    }

    return (
        <li className="cards__list-item">
            <article className="card">
                <div className="card__chevron-container">
                    {card.isNew && <p className='card__chevron card__chevron_new'>Новинка</p>}
                    {card.isHit && <p className='card__chevron card__chevron_hit'>Хит продаж</p>}
                    {card.isSale && <p className='card__chevron card__chevron_sale'>Распродажа</p>}
                </div>
                <div className="card__image-container card__image-container_type_loading">
                    <img className="card__image" src={card.image} alt={card.title} />
                </div>
                <h2 className="card__title">{card.title}</h2>
                <p className="card__description">{card.about}</p>
                <p className="card__price">{card.price} <s>{card.discount}</s></p>
                <div className="card__button-wrapper">
                    <Link to={`/catalog/${card.id}`} className="card__button button card__button_type_more">Подробнее</Link>
                    <button className="card__button button card__button_type_add" type='button' onClick={handleClick}>Купить</button>
                </div>
            </article>
        </li>
    )
}

export default Card
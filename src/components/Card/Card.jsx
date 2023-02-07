import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ card, setOrder, setIsVisible }) => {
    const newPrice = (card.price * (1 - card.discount)).toFixed(0);

    const handleBuy = () => {
        setOrder({
            id: card.id,
            image: card.image,
            title: card.title,
            price: newPrice,
            discount: card.discount,
        })
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    };

    return (
        <li className="cards__list-item">
            <article className="card">

                <div className="card__chevron-container">
                    {card.isNew && <p className='card__chevron card__chevron_new'>Новинка</p>}
                    {card.isHit && <p className='card__chevron card__chevron_hit'>Хит продаж</p>}
                    {card.isSale && <p className='card__chevron card__chevron_sale'>Распродажа</p>}
                </div>

                <div className="card__image-container">
                    <img className="card__image" src={card.image} alt={card.title} />
                </div>

                <h3 className="card__title">{card.title}</h3>
                <p className="card__description">{card.about}</p>

                <div className="card__prices-container">
                    <span className="card__price card__price_type_original">{newPrice} ₽</span>
                    {card.discount > 0 && (
                        <span className="card__price card__price_type_discount"><s>{card.price} ₽</s></span>
                    )}
                </div>

                <div className="card__buttons-container">
                    <Link
                        to={`/catalog/${card.id}`}
                        className="card__button button card__button_type_more">
                        Подробнее
                    </Link>
                    <button
                        className="card__button button card__button_type_buy"
                        onClick={handleBuy}>
                        Купить
                    </button>
                </div>
            </article>
        </li>
    )
}

export default Card
import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <li className="cards__list-item">
            <article className="card">
                <img className="card__image" src="" alt="Фото товара" />
                <div className="card__description">
                    <h2 className="card__title">Название</h2>
                    <div className="card__wrapper">
                        <p className="card__price"><span>Цена:</span> 300 ₽</p>
                        <button type='button' className="card__button button" />
                    </div>
                </div>
            </article>
        </li>
    )
}

export default Card
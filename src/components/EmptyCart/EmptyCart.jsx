import React from 'react'
import { Link } from 'react-router-dom'
import './EmptyCart.css'

const EmptyCart = ({ onClose }) => {
    return (
        <div className="empty-cart">
            <div className="empty-cart__image"></div>

            <div className="empty-cart__text-wrapper">
                <h3 className="empty-cart__title">Корзина пуста</h3>
                <p className="empty-cart__text">Посмотрите предложения на главной странице, воспользуйтесь каталогом или поиском</p>
            </div>

            <div className="empty-cart__buttons-wrapper">
                <Link to="/" className="empty-cart__button empty-cart__button_primary button" onClick={onClose}>На главную</Link>
                <Link to="/catalog/" className="empty-cart__button empty-cart__button_secondary button" onClick={onClose}>В каталог</Link>
            </div>
        </div>
    )
}

export default EmptyCart
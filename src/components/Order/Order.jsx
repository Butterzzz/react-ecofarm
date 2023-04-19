import React from 'react'
import './Order.css'

const Order = () => {
    return (
        <section className="order container" id="order">
            <h2 className="order__title section-title">Как заказать</h2>
            <p className="contacts__subtitle section-subtitle">Каждый день мы усердно работаем, чтобы сделать жизнь наших клиентов лучше и счастливее</p>

            <ul className="order__list">

                <li className="order__item">
                    <h3 className="order__caption">Оставьте заявку</h3>
                    <p className="order__text">Заполните заявку на сайте или позвоните нам</p>
                </li>

                <li className="order__item">
                    <h3 className="order__caption">Мы перезваниваем</h3>
                    <p className="order__text">Перезваниваем вам и обговариваем детали заказа</p>
                </li>

                <li className="order__item">
                    <h3 className="order__caption">Доставляем товар</h3>
                    <p className="order__text">Осуществляем доставку по указанному вами адресу</p>
                </li>

                <li className="order__item">
                    <h3 className="order__caption">Производите оплату</h3>
                    <p className="order__text">Вы производите оплату любым удобным способом</p>
                </li>

            </ul>
        </section>
    )
}

export default Order
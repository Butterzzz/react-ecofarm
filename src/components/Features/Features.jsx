import React from 'react'
import './Features.css'
import { GiEcology, GiGreenhouse, GiHandTruck } from 'react-icons/gi'

const Features = () => {
    return (
        <section className="features container">
            <h2 className="features__title section-title">Наши преимущества</h2>
            <p className="contacts__subtitle section-subtitle">Каждый день мы усердно работаем, чтобы сделать жизнь наших клиентов лучше и счастливее</p>

            <ul className="features__list">

                <li className="features__item">
                    <GiEcology className="features__icon" />
                    <h3 className="features__caption">100% Eco</h3>
                    <p className="features__text">Микрозелень выращивается только из органических семян без удобрений и нитратов</p>
                </li>

                <li className="features__item">
                    <GiGreenhouse className="features__icon" />
                    <h3 className="features__caption">Доступность весь год</h3>
                    <p className="features__text">Выращиваем и доставляем микрозелень 365 дней в году</p>
                </li>

                <li className="features__item">
                    <GiHandTruck className="features__icon" />
                    <h3 className="features__caption">Быстрая доставка</h3>
                    <p className="features__text">Благодаря быстрой доставке у вас на столе всегда будет только свежая и полезная микрозелень</p>
                </li>
                
            </ul>
        </section>
    )
}

export default Features
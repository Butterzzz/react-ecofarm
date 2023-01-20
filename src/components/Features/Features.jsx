import React from 'react'
import './Features.css'

const Features = () => {
    return (
        <section class="features">
            <h2 class="features__title section-title">Почему выбирают нас?</h2>
            <ul class="features__list">
                <li class="features__item">
                    <img class="features__img" src="" alt="100% Eco" />
                    <h3 class="features__caption">100% Eco</h3>
                    <p class="features__text">Микрозелень выращивается только из органических семян без удобрений и нитратов</p>
                </li>
                <li class="features__item">
                    <img class="features__img" src="" alt="Доступность весь год" />
                    <h3 class="features__caption">Доступность весь год</h3>
                    <p class="features__text">Выращиваем и доставляем микрозелень 365 дней в году</p>
                </li>
                <li class="features__item">
                    <img class="features__img" src="" alt="Быстрая доставка свежей продукции" />
                    <h3 class="features__caption">Быстрая доставка</h3>
                    <p class="features__text">Благодаря быстрой доставке у вас на столе всегда будет только свежая и полезная микрозелень</p>
                </li>
            </ul>
        </section>
    )
}

export default Features
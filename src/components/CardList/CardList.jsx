import React from 'react'
import './CardList.css'
import Card from '../Card/Card'
import Preloader from '../Preloader/Preloader'


const CardList = ({ cards, notFound, isLoading }) => {
  return (
    <section className="cards" aria-label="Карточки">
      {isLoading && <Preloader />}

      <p className={`cardlist__errors ${!notFound && 'cardlist__errors_type_hidden'}`}>Ничего не найдено</p>

      <ul className="cards__list">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isLoading={isLoading}
          />
        ))
        }
      </ul>
    </section>
  )
}

export default CardList
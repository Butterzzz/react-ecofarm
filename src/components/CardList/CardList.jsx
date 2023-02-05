import React from 'react'
import './CardList.css'
import Card from '../Card/Card'
import Preloader from '../Preloader/Preloader'


const CardList = ({ isLoading, notFound, cards, setOrder }) => {
  return (
    <section className="cards" aria-label="Карточки">
      {isLoading &&
        <Preloader />
      }

      {notFound &&
        <p className="cardlist__errors">Ничего не найдено</p>
      }

      <ul className="cards__list">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isLoading={isLoading}
            setOrder={setOrder}
            {...card}
          />
        ))
        }
      </ul>
    </section>
  )
}

export default CardList
import React from 'react'
import './CardList.css'
import Card from '../Card/Card'
import Preloader from '../Preloader/Preloader'


const CardList = ({ isLoading, notFound, cards, setOrder, setIsVisible }) => {
  return (
    <section className="cards" aria-label="Карточки">
      {isLoading &&
        <Preloader />
      }

      {(notFound && cards.length === 0 && !isLoading) &&
        <p className="cardlist__errors">Ничего не найдено</p>
      }

      <ul className="cards__list">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            isLoading={isLoading}
            setOrder={setOrder}
            setIsVisible={setIsVisible}
            {...card}
          />
        ))
        }
      </ul>
    </section>
  )
}

export default CardList
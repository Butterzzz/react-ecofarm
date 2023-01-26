import React from 'react'
import './CardList.css'
import Card from '../Card/Card'
import { cards } from '../../data/data'

const CardList = () => {
  // const newCard = cards.filter(item => item.new === true);
  // console.log(newCard);
  
  return (
    <section className="cards" aria-label="Карточки">
      <ul className="cards__list">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
          />
        ))
        }
      </ul>
    </section>
  )
}

export default CardList
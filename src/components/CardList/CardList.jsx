import React, { useState } from 'react'
import './CardList.css'
import Card from '../Card/Card'
import Preloader from '../Preloader/Preloader'
import { cards } from '../../data/data'

const CardList = () => {
  // const newCard = cards.filter(item => item.new === true);
  // console.log(newCard);
  
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 3000) // бутафория

  return (
    <section className="cards" aria-label="Карточки">
      {isLoading && <Preloader />}
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
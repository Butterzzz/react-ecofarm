import React from 'react'
import './CardList.css'
import Card from '../Card/Card'
// import cardsList from '../../data/cards'

const CardList = () => {
  return (
    <section className="cards" aria-label="Карточки">
      <ul className="cards__list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* {cardsList.map((card) => (
          <Card
            key={card._id}
            card={card}
          />
        ))
        } */}
      </ul>
    </section>
  )
}

export default CardList
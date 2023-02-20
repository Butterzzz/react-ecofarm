import React, { useState } from 'react'
import './CardList.css'
import Card from '../Card/Card'
import Preloader from '../Preloader/Preloader'
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'

const CardList = ({ isLoading, notFound, cards, setOrder, setIsVisibleToast, searchValue }) => {
  const [visibleCards, setVisibleCards] = useState(6); // Кол-во товаров для отображения

  const handleLoadMore = () => {
    setVisibleCards(visibleCards + 3);
  }

  return (
    <section className="cards" aria-label="Карточки">

      {isLoading &&
        <Preloader />
      }

      {(notFound && cards.length === 0 && !isLoading) &&
        <>
          <p className="cards__errors-title">Ничего не найдено</p>
          {searchValue.length > 0 &&
            <p className="cards__errors-text">По запросу "{searchValue}" ничего не нашлось, попробуйте изменить запрос</p>}
        </>
      }

      <ul className="cards__list">
        {cards.filter((card, index) => index < visibleCards).map((card) => (
          <Card
            key={card._id}
            card={card}

            // onBuy={(card) => onBuy(card)}
            setOrder={setOrder}
            setIsVisibleToast={setIsVisibleToast}
          />
        ))
        }
      </ul>

      {(visibleCards < cards.length) &&
        <LoadMoreButton
          onLoadMore={handleLoadMore}
        />
      }

    </section>
  )
}

export default CardList
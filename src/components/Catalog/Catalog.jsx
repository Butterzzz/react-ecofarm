import React, { useState } from 'react'
import './Catalog.css'
import Search from '../Search/Search'
import CardList from '../CardList/CardList'
import { cards } from '../../data/data'

const Catalog = () => {
  const [arr, setValue] = useState(cards);
  const [notFound, setNotFound] = useState(false);

  function handleSearchMovies(keyword) {
    const searchResult = searchByKeyword(cards, keyword);
    if (searchResult.length === 0) {
      setValue([]);
      setNotFound(true);
    }
    setValue(searchResult);
  }

  // Поиск по запросу пользователя
  function searchByKeyword(array, keyword) {
    let foundCards = [];
    array.forEach((card) => {
      const cardTitle = String(card.title).toLowerCase().trim();
      const userCard = keyword.toLowerCase().trim();
      if (cardTitle.indexOf(userCard) !== -1) {
        foundCards.push(card);
      }
    });
    return foundCards;
  }

  return (
    <section className="catalog" id="catalog">
      <h2 className="catalog__title section-title">Каталог</h2>

      <Search
        handleSearchMovies={handleSearchMovies}
      />
      <CardList
        cards={arr}
        notFound={notFound}
      />
    </section>
  )
}

export default Catalog
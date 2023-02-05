import React, { useState, useEffect } from 'react'
import './Catalog.css'
import Search from '../Search/Search'
import CardList from '../CardList/CardList'
// import { cards } from '../../data/data'

const Catalog = ({ setOrder }) => {
  const [apiCards, setApiCards] = useState([]); // Массив с данными с сервера
  // const [localCards, setLocalCards] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  function loadingCards() {
    setNotFound(false);
    setIsLoading(true);
    fetch('https://63d92eb9baa0f79e09b6c7dd.mockapi.io/catalog/cards')
      .then((res) => {
        return res.json();
      })
      .then((resCards) => {
        setApiCards(resCards);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  useEffect(() => {
    loadingCards();
  }, [])

  function handleSearchMovies(keyword) {
    const searchResult = searchByKeyword(apiCards, keyword);
    if (searchResult.length === 0) {
      setApiCards([]);
      setNotFound(true);
    }
    setApiCards(searchResult);
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

  function handleClean() {
    loadingCards();
  }

  return (
    <section className="catalog" id="catalog">
      <h2 className="catalog__title section-title">Каталог</h2>

      <Search
        handleSearchMovies={handleSearchMovies}
        onClear={handleClean}
      />
      <CardList
        cards={apiCards}
        notFound={notFound}
        isLoading={isLoading}
        setOrder={setOrder}
      />
    </section>
  )
}

export default Catalog
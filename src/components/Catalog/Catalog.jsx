import React, { useState, useEffect } from 'react'
import './Catalog.css'
// import Search from '../Search/Search'
import CardList from '../CardList/CardList'
import CatalogSearch from '../CatalogSearch/CatalogSearch'
// import { cards } from '../../data/data'

const Catalog = ({ setOrder }) => {
  const [apiCards, setApiCards] = useState([]); // Массив с данными с сервера
  const [filteredCatalog, setFilteredCatalog] = useState([]); // Отфильроованные карточки
  const [searchTerm, setSearchTerm] = useState(''); // Поисковое слово
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNoFound] = useState(false);

  function loadingCards() {
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

  useEffect(() => {
    const filteredData = apiCards.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase())
        || item.about.toLowerCase().includes(searchTerm.toLowerCase());
    });
    if (filteredData.length === 0) {
      setNoFound(true);
    }
    setFilteredCatalog(filteredData);
  }, [searchTerm, apiCards]);

  return (
    <section className="catalog" id="catalog">
      <h2 className="catalog__title section-title">Каталог</h2>

      <CatalogSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CardList
        cards={filteredCatalog}
        isLoading={isLoading}
        setOrder={setOrder}
        notFound={notFound}
      />
    </section>
  )
}

export default Catalog
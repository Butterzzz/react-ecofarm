import React, { useState, useEffect } from 'react'
import './Catalog.css'
import axios from 'axios'
// import Search from '../Search/Search'
import CardList from '../CardList/CardList'
import CatalogSearch from '../CatalogSearch/CatalogSearch'

const Catalog = ({ setOrder, setIsVisibleToast }) => {
  const [apiCards, setApiCards] = useState([]); // Массив с данными с сервера
  const [filteredCatalog, setFilteredCatalog] = useState([]); // Отфильтрованные карточки
  const [searchValue, setSearchValue] = useState(''); // Поисковое слово
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNoFound] = useState(false);


  // function loadingCards() {
  //   setIsLoading(true);
  //   fetch('https://63d92eb9baa0f79e09b6c7dd.mockapi.io/catalog/cards')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((resCards) => {
  //       setApiCards(resCards);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     })
  // }

  function loadingCards() {
    setIsLoading(true);
    axios.get('http://localhost:3003/catalog/cards')
      .then((resCards) => {
        setApiCards(resCards.data)
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
      return item.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (filteredData.length === 0) {
      setNoFound(true);
    }
    setFilteredCatalog(filteredData);
  }, [searchValue, apiCards]);

  return (
    <section className="catalog container" id="catalog">
      <h2 className="catalog__title section-title">Каталог микрозелени</h2>

      <CatalogSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <CardList
        cards={filteredCatalog}
        isLoading={isLoading}
        setOrder={setOrder}
        notFound={notFound}
        setIsVisibleToast={setIsVisibleToast}
      />

    </section>
  )
}

export default Catalog
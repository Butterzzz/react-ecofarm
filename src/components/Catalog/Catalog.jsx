import React from 'react'
import './Catalog.css'
import Search from '../Search/Search'
import CardList from '../CardList/CardList'

const Catalog = () => {
  return (
    <section className="catalog" id="catalog">
      <h2 className="catalog__title section-title">Каталог</h2>
      <Search />
      <CardList />
    </section>
  )
}

export default Catalog
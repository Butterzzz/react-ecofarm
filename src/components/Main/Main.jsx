import React from 'react'
import './Main.css'
import Catalog from '../Catalog/Catalog'
import Order from '../Order/Order'
import Blog from '../Blog/Blog'
import Contacts from '../Contacts/Contacts'
import Reviews from '../Reviews/Reviews'

const Main = () => {
  return (
    <main className="content">
      <Catalog />
      <Order />
      <Blog />
      <Reviews />
      <Contacts />
    </main>
  )
}

export default Main
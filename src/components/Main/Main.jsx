import React from 'react'
import './Main.css'
import Catalog from '../Catalog/Catalog'
import Blog from '../Blog/Blog'
import Contacts from '../Contacts/Contacts'
import Reviews from '../Reviews/Reviews'

const Main = () => {
  return (
    <main className="content">
      <Catalog />
      <Blog />
      <Reviews />
      <Contacts />
    </main>
  )
}

export default Main
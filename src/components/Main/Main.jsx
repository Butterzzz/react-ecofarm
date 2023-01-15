import React from 'react'
import './Main.css'
import Catalog from '../Catalog/Catalog'
import Contacts from '../Contacts/Contacts'

const Main = () => {
  return (
    <main className="content">
      <Catalog />
      <Contacts />
    </main>
  )
}

export default Main
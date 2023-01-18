import React from 'react'
import './Main.css'
import Order from '../Order/Order'
import Blog from '../Blog/Blog'
import Contacts from '../Contacts/Contacts'
import Reviews from '../Reviews/Reviews'

const Main = () => {
  return (
    <>
      <Order />
      <Blog />
      <Reviews />
      <Contacts />
    </>
  )
}

export default Main
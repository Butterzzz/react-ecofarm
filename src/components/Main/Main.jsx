import React from 'react'
import './Main.css'
import Order from '../Order/Order'
import Blog from '../Blog/Blog'
import Contacts from '../Contacts/Contacts'
import Reviews from '../Reviews/Reviews'
import Hero from '../Hero/Hero'
// import Slider from '../Slider/Slider'

const Main = () => {
  return (
    <>
      <Hero />
      {/* <Slider /> */}
      <Order />
      <Blog />
      <Reviews />
      <Contacts />
    </>
  )
}

export default Main
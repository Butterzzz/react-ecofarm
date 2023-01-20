import React from 'react'
import './Main.css'
import Order from '../Order/Order'
import Blog from '../Blog/Blog'
import Contacts from '../Contacts/Contacts'
import Reviews from '../Reviews/Reviews'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
// import Slider from '../Slider/Slider'

const Main = () => {
  return (
    <>
      <Hero />
      <Features />
      {/* <Slider /> */}
      <Order />
      <Blog />
      <Reviews />
      <Contacts />
    </>
  )
}

export default Main
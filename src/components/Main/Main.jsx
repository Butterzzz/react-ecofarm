import React from 'react'
import './Main.css'
import Hero from '../Hero/Hero'
import Features from '../Features/Features'
import Gallery from '../Gallery/Gallery'
import Order from '../Order/Order'
import Blog from '../Blog/Blog'
import Reviews from '../Reviews/Reviews'
import Contacts from '../Contacts/Contacts'
import Map from '../Map/Map'
// import Slider from '../Slider/Slider'

const Main = ({ onClickAbout, onClickImage }) => {
  return (
    <>
      <Hero onClickAbout={onClickAbout} />
      <Features />
      {/* <Slider /> */}
      <Order />
      <Blog />
      <Reviews />
      <Gallery
        onClickImage={onClickImage}
      />
      <Contacts />
      {/* <Map /> */}
    </>
  )
}

export default Main
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from '../Layout/Layout'
import Main from '../Main/Main'
import Catalog from '../Catalog/Catalog'
import CardPage from '../CardPage/CardPage'
import BlogPage from '../BlogPage/BlogPage'
import News from '../News/News'
import NewsPage from '../NewsPage/NewsPage'
import NotFoundPage from '../NotFoundPage/NotFoundPage'
import Popup from '../Popup/Popup'
import { IconContext } from 'react-icons'

const App = () => {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

  function handleVideoPopupClick() {
    setIsVideoPopupOpen(true);
  }

  function closeAllPopups() {
    setIsVideoPopupOpen(false);
  }

  return (
    <div className="page">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main onClickAbout={handleVideoPopupClick} />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="catalog/:id" element={<CardPage />} />
            <Route path="blog" element={<BlogPage />} >
              <Route path="recipes" element={<p>Рецепты</p>} />
              <Route path="news" element={<News />} />
              <Route path="news/:id" element={<NewsPage />} />
            </Route >
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Popup
          isOpen={isVideoPopupOpen}
          onClose={closeAllPopups}
        >
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7SW7BEJC56s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Popup>

      </IconContext.Provider>
    </div>
  )
}

export default App
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from '../Layout/Layout'
import Main from '../Main/Main'
import Catalog from '../Catalog/Catalog'
import NotFound from '../NotFound/NotFound'
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
          </Route>
            <Route path="*" element={<NotFound />} />
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
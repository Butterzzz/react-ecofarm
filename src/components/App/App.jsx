import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from '../Layout/Layout'
import Main from '../Main/Main'
import Catalog from '../Catalog/Catalog'
import NotFound from '../NotFound/NotFound'
import { IconContext } from 'react-icons'

const App = () => {
  return (
    <div className="page">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </IconContext.Provider>
    </div>
  )
}

export default App
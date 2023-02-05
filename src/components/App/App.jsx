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
import Drawer from '../Drawer/Drawer'
import { IconContext } from 'react-icons'

const App = () => {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [order, setOrder] = useState([]);

  function scrollDisable() {
    document.body.style.overflow = "hidden"
  }

  function scrollEnable() {
    document.body.style.overflow = ""
  }

  function handleVideoPopupClick() {
    scrollDisable();
    setIsVideoPopupOpen(true);
  }

  function handleDrawerClick() {
    scrollDisable();
    setIsDrawerOpen(true);
  }

  function closeAllPopups() {
    scrollEnable();
    setIsDrawerOpen(false);
    setIsVideoPopupOpen(false);
  }

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex(
      (item) => item.id === goodsItem.id
    );

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(order.map((item) => {
        if (item.id !== goodsItem.id) return item;

        return {
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
          quantity,
        };
      }),
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          title: goodsItem.title,
          price: goodsItem.price,
          image: goodsItem.image,
          quantity,
        },
      ],
      );
    }
  };

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  return (
    <div className="page">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <Routes>
          <Route path="/" element={<Layout onDrawerClick={handleDrawerClick} />}>
            <Route index element={<Main onClickAbout={handleVideoPopupClick} />} />
            <Route path="catalog" element={<Catalog setOrder={addToOrder} />} />
            <Route path="catalog/:id" element={<CardPage setOrder={addToOrder} />} />
            <Route path="blog" element={<BlogPage />} >
              <Route path="recipes" element={<p>Рецепты</p>} />
              <Route path="news" element={<News />} />
              <Route path="news/:id" element={<NewsPage />} />
            </Route >
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Drawer
          isOpen={isDrawerOpen}
          onClose={closeAllPopups}
          order={order}
          setOrder={removeFromOrder}
        />

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
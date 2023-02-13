import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
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
import Toast from '../Toast/Toast'
import { IconContext } from 'react-icons'

const App = () => {
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [order, setOrder] = useState([]); // Корзина
  const [isVisibleToast, setIsVisibleToast] = useState(false); // Всплывающая уведомляшка
  const [itemCount, setItemCount] = useState(0); // Количество товаров в корзине для бейджа
  // const [quantity, setQuantity] = useState(1);

  function addItem() {
    setItemCount(itemCount + 1);
  }

  useEffect(() => {
    setItemCount(order.length)
  }, [order])

  function removeItem() {
    setItemCount(itemCount - 1);
  }

  // Загрузка корзины с сервера mockAPI
  function loadingOrders() {
    axios.get('https://63d92eb9baa0f79e09b6c7dd.mockapi.io/catalog/order')
      .then((resOrders) => {
        setOrder(resOrders.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    loadingOrders();
  }, [])

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

  // Добавление товара в корзину
  // const addToOrder = (card) => {
  //   console.log(card, 'Добавили объект карточки');
  //   setOrder(prev => [...prev, card]);
  // };

  // Добавление товара в корзину
  const addToOrder = (goodsItem) => {
    axios.post('https://63d92eb9baa0f79e09b6c7dd.mockapi.io/catalog/order', goodsItem)
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
    addItem();
  };

  // console.log(order);

  // Удаление товара из корзины
  const removeFromOrder = (id) => {
    console.log(id);
    // дай мне предыдущий массив заказов,
    // возьми все что в нем есть,
    // пробежишь по нему,
    // отфильтруй тот элемент, у которого id тот, который я тебе передал
    setOrder((prev) => prev.filter((item) => item.id !== id));
    axios.delete(`https://63d92eb9baa0f79e09b6c7dd.mockapi.io/catalog/order/${id}`)
    removeItem();
  };

  return (
    <div className="page">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <Routes>
          <Route path="/" element={
            <Layout
              onDrawerClick={handleDrawerClick}
              itemCount={itemCount}
            />}
          >
            <Route index element={<Main onClickAbout={handleVideoPopupClick} />} />
            <Route path="catalog" element={
              <Catalog
                setOrder={addToOrder}
                setIsVisibleToast={setIsVisibleToast}
              />}
            />
            <Route path="catalog/cards/:id" element={<CardPage setOrder={addToOrder} setIsVisibleToast={setIsVisibleToast}/>} />
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

        <Toast
          isVisibleToast={isVisibleToast}
        />

      </IconContext.Provider>
    </div>
  )
}

export default App
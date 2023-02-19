import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
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
  const [order, setOrder] = useState(loadCartFromLocalStorage()); // Корзина
  const [isVisibleToast, setIsVisibleToast] = useState(false); // Всплывающая уведомляшка
  const [orderCount, setOrderCount] = useState(0); // Количество товаров в корзине для бейджа

  useEffect(() => {
    let count = 0;
    order.forEach(item => count += item.quantity);
    setOrderCount(count);
  }, [order]);

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
  const handleAddToOrder = (card) => {
    // Проверяем, есть ли товар с таким идентификатором в корзине
    const itemExists = order.some((orderItem) => orderItem.cardId === card.cardId);

    // Если товар уже есть в корзине, увеличиваем его количество
    if (itemExists) {
      const newItems = order.map((orderItem) => {
        if (orderItem.cardId === card.cardId) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        } else {
          return orderItem;
        }
      });
      setOrder(newItems);
    } else {
      // Если товара нет в корзине, добавляем его в список товаров
      setOrder([...order, { ...card, quantity: 1 }]);
    }
  }

  // Удаление товара из корзины
  const removeFromOrder = (cardId) => {
    // console.log(cardId);
    // дай мне предыдущий массив заказов,
    // возьми все что в нем есть,
    // пробежишь по нему,
    // отфильтруй тот элемент, у которого id тот, который я тебе передал
    setOrder((prev) => prev.filter((item) => item.cardId !== cardId));
    localStorage.removeItem("order");
  };

  // Сохраняем состояние корзины в localStorage
  function saveCartToLocalStorage(order) {
    localStorage.setItem("order", JSON.stringify(order));
  }

  // После каждого обновления состояния корзины, вызываем функцию
  useEffect(() => {
    saveCartToLocalStorage(order);
  }, [order]);

  // Загрузка состояния корзины из localStorage при инициализации компонента
  function loadCartFromLocalStorage() {
    const order = localStorage.getItem("order");
    if (order) {
      return JSON.parse(order);
    }
    return [];
  }

  //  Оформление заказа
  function handleCheckout() {
    // Создаем массив товаров с их количеством
    const products = order.map((item) => ({
      cardId: item.cardId,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    }));

    // console.log({ products });

    // Отправляем запрос на сервер с информацией о товарах
    axios.post('http://localhost:3003/order', { products })
      .then((response) => {
        console.log('Заказ успешно отправлен на сервер', response.data);
        setOrder([]);
      })
      .catch((error) => {
        console.error('Ошибка при отправке заказа на сервер', error);
      });
  }

  return (
    <div className="page">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <Routes>
          <Route path="/" element={
            <Layout
              onDrawerClick={handleDrawerClick}
              orderCount={orderCount}
            />}
          >
            {/* <Route index element={<Main onClickAbout={handleVideoPopupClick} />} />
            <Route path="catalog" element={
              <Catalog
                setOrder={handleAddToOrder}
                setIsVisibleToast={setIsVisibleToast}
              />}
            />
            <Route path="catalog/cards/:id" element={
              <CardPage
                setOrder={handleAddToOrder}
                setIsVisibleToast={setIsVisibleToast}
              />}
            />
            <Route path="blog" element={<BlogPage />} >
              <Route path="recipes" element={<p>Рецепты</p>} />
              <Route path="news" element={<News />} />
              <Route path="news/:id" element={<NewsPage />} />
            </Route > */}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <Drawer
          isOpen={isDrawerOpen}
          onClose={closeAllPopups}
          order={order}
          setOrder={removeFromOrder}
          onCheckout={handleCheckout}
        />

        <Popup
          isOpen={isVideoPopupOpen}
          onClose={closeAllPopups}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7SW7BEJC56s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </Popup>

        <Toast
          isVisibleToast={isVisibleToast}
        />

      </IconContext.Provider>
    </div>
  )
}

export default App
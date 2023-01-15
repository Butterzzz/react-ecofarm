import React from "react"
import "./Navigation.css"

const Navigation = () => {
  return (
    <nav className="menu">
      <a href="#catalog" className="menu__link link">Каталог</a>
      <a href="#order" className="menu__link link">Как заказать</a>
      <a href="#blog" className="menu__link link">Блог</a>
      <a href="#reviews" className="menu__link link">Отзывы</a>
      <a href="#contacts" className="menu__link link">Контакты</a>
    </nav>
  )
}

export default Navigation
import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="menu">
      <Link to='#catalog' className="menu__link link">Каталог</Link>
      <Link to='#order' className="menu__link link">Как заказать</Link>
      <Link to='#blog' className="menu__link link">Блог</Link>
      <Link to='#reviews' className="menu__link link">Отзывы</Link>
      <Link to='#contacts' className="menu__link link">Контакты</Link>
    </nav>
  )
}

export default Navigation
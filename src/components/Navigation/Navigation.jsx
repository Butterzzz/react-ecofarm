import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const Navigation = () => {
  return (
    <nav className="menu">
      <NavLink to="/catalog" className="menu__link link">Каталог</NavLink>
      <HashLink to="/#order" className="menu__link link">Как заказать</HashLink>
      <HashLink to="/#blog" className="menu__link link">Блог</HashLink>
      <HashLink to="/#reviews" className="menu__link link">Отзывы</HashLink>
      <HashLink to="/#contacts" className="menu__link link">Контакты</HashLink>
    </nav>
  )
}

export default Navigation
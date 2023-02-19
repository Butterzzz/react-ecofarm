import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navigation = ({ isOpen}) => {
  return (
    <nav className={`menu ${isOpen ? 'menu_active' : ''}`}>
      <NavLink to="/catalog" className="menu__link link">Каталог</NavLink>
      <HashLink to="/#order" className="menu__link link">Как заказать</HashLink>
      <NavLink to="/blog" className="menu__link link">Блог</NavLink>
      <HashLink to="/#reviews" className="menu__link link">Отзывы</HashLink>
      <HashLink to="/#contacts" className="menu__link link">Контакты</HashLink>
    </nav>
  )
}

export default Navigation
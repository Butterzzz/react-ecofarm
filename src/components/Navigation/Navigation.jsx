import React from 'react'
import './Navigation.css'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navigation = ({ isOpen, setIsOpen }) => {

  function closeMenu() {
    setIsOpen(false);
  };

  return (
    <nav className={`menu ${isOpen ? 'menu_active' : ''}`}>

      <NavLink
        to="/catalog"
        className="menu__link link"
        onClick={closeMenu}
      >
        Каталог
      </NavLink>

      <HashLink
        to="/#order"
        className="menu__link link"
        onClick={closeMenu}
      >
        Как заказать
      </HashLink>

      <NavLink
        to="/blog"
        className="menu__link link"
        onClick={closeMenu}
      >Блог
      </NavLink>

      <HashLink
        to="/#reviews"
        className="menu__link link"
        onClick={closeMenu}
      >
        Отзывы
      </HashLink>

      <HashLink
        to="/#contacts"
        className="menu__link link"
        onClick={closeMenu}
      >
        Контакты
      </HashLink>

    </nav>
  )
}

export default Navigation
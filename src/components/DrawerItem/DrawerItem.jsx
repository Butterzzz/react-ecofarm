import React from 'react'
import './DrawerItem.css'
import { MdOutlineClose } from 'react-icons/md'

const DrawerItem = ({ cardId, title, price, image, quantity, setOrder }) => {

  return (
    <li className="drawer__list-item">
      <article className="drawer__card drawer-card">

        <div className="drawer-card__image-container">
          <img className="drawer-card__image" src={image} alt={title} />
        </div>

        <div className="drawer-card__desc">
          <p className="drawer-card__title">{title}</p>
          <p className="drawer-card__price">{price} руб x {quantity}</p>
        </div>

        <button className="drawer-card__button button" type="button" onClick={() => setOrder(cardId)}>
          <MdOutlineClose className="drawer-card__button-icon" />
        </button>

      </article>
    </li>
  )
}

export default DrawerItem
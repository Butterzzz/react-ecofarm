import React from 'react'
import './DrawerItem.css'
import { MdOutlineClose } from 'react-icons/md'

const DrawerItem = (props) => {
  const { id, title, price, image, setOrder } = props

  return (
    <li className="drawer__list-item">
      <article className="drawer__card drawer-card">

        <div className="drawer-card__image-container">
          <img className="drawer-card__image" src={image} alt={title} />
        </div>

        <div className="drawer-card__desc">
          <p className="drawer-card__title">{title}Mueller - Kerluke</p>
          <p className="drawer-card__price">{price}950 ₽</p>
        </div>

        <button className="drawer-card__button button" type="button" onClick={() => setOrder(id)}>
          <MdOutlineClose className="drawer-card__button-icon" />
        </button>

        {/* {props.name} {props.price}руб x{props.quantity} */}

      </article>
    </li>
  )
}

export default DrawerItem
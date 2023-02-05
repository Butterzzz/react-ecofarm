import React from 'react'
import './UserBar.css'
import { MdOutlineShoppingCart } from 'react-icons/md'

export const UserBar = ({ onDrawerClick }) => {

    return (
        <div className="userBar">
            <button className="userBar__cart" type="button" onClick={onDrawerClick}>
                <MdOutlineShoppingCart className="userBar__icon" />
                <span className="userBar__text">Корзина</span>
            </button>
        </div>
    )
}

export default UserBar
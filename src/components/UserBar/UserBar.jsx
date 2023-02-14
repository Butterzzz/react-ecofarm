import React from 'react'
import './UserBar.css'
import { MdOutlineShoppingCart } from 'react-icons/md'

export const UserBar = ({ onDrawerClick, itemCount }) => {

    return (
        <div className="userBar">
            <button className="userBar__cart" onClick={onDrawerClick}>
                <MdOutlineShoppingCart className="userBar__icon" />
                {itemCount > 0 &&
                    <span className="userBar__badge">{itemCount}</span>
                }
                <span className="userBar__text">Корзина</span>
            </button>
        </div>
    )
}

export default UserBar
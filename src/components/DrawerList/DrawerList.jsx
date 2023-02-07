import React from 'react'
import './DrawerList.css'
import DrawerItem from '../DrawerItem/DrawerItem'
import EmptyCart from '../EmptyCart/EmptyCart'

const DrawerList = ({ order, setOrder, onClose }) => {

    if (!order.length) {
        return <EmptyCart onClose={onClose} />
    }

    return (
        <ul className="drawer__list">
            {order.map((item, index) => (
                <DrawerItem key={index} setOrder={setOrder} {...item} />
            ))}
        </ul>
    )
}

export default DrawerList
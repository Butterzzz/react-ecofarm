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

            <li className="drawer__list active">
                Общая стоимость:{' '}
                {order.reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                }, 0)}{' '}
                ₽
            </li>
        </ul>
    )
}

export default DrawerList
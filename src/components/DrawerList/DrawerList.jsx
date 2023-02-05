import React from 'react'
import './DrawerList.css'
import DrawerItem from '../DrawerItem/DrawerItem'

const DrawerList = ({ order, setOrder}) => {

    if (!order.length) {
        return (
            <ul className="drawer__list">
                <li className="drawer__list-item">Товаров нет</li>
            </ul>
        );
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
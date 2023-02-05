import React from 'react'
import './DrawerList.css'
import DrawerItem from '../DrawerItem/DrawerItem'

const DrawerList = () => {

    // if (!order.length) {
    //     return (
    //         <ul className="basket list-group">
    //             <li className="list-group-item">Товаров нет</li>
    //         </ul>
    //     );
    // }

    return (
        <ul className="drawer__list">
            <DrawerItem />
            <DrawerItem />


            {/* {order.map((item, index) => (
                <BasketItem key={index} setOrder={setOrder} {...item} />
            ))}
            
            <li className="list-group-item active">
                Общая стоимость:{' '}
                {order.reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                }, 0)}{' '}
                рублей.
            </li> */}
        </ul>
    )
}

export default DrawerList
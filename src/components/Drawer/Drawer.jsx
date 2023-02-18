import React from 'react'
import './Drawer.css'
import DrawerList from '../DrawerList/DrawerList'
import { MdOutlineClose } from 'react-icons/md'

const Drawer = ({ isOpen, onClose, order, setOrder, onCheckout }) => {

    const handleClose = (evt) => {
        if (evt.target.classList.contains('drawer_opened')) {
            onClose(false);
        }
    };

    return (
        <div className={`drawer ${isOpen && "drawer_opened"}`} onClick={handleClose}>
            <div className="drawer__container">

                <div className="drawer__top-wrapper">
                    <h2 className="drawer__title">Корзина</h2>

                    <button className="drawer__button drawer__button_type_close button"
                        aria-label="Закрыть корзину"
                        onClick={onClose}>
                        <MdOutlineClose className="drawer__button-icon" />
                    </button>
                </div>

                <DrawerList
                    order={order}
                    setOrder={setOrder}
                    onClose={onClose}
                />

                {order.length > 0 &&
                    <div className="drawer__botton-wrapper">
                        <div className="drawer__total">
                            Общая стоимость:{' '}
                            {order.reduce((acc, item) => {
                                return acc + item.price * item.quantity;
                            }, 0)}{' '}
                            ₽
                        </div>
                        <button
                            className="drawer__button drawer__button_type_checkout button"
                            onClick={onCheckout}
                        >
                            Оформить заказ
                        </button>
                    </div>
                }

            </div>

        </div>
    )
}

export default Drawer
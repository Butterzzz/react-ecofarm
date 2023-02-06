import React from 'react'
import './Drawer.css'
import DrawerList from '../DrawerList/DrawerList'
import { MdOutlineClose } from 'react-icons/md'

const Drawer = ({ isOpen, onClose, order, setOrder }) => {

    const handleClose = (evt) => {
        if (evt.target.classList.contains('drawer_opened')) {
            onClose(false);
        }
    };

    return (
        <div className={`drawer ${isOpen && "drawer_opened"}`} onClick={handleClose}>
            <div className="drawer__container">
                <div className="drawer__wrapper">
                    <h2 className="drawer__title">Корзина</h2>
                    <button className="drawer__button button"
                        type="button"
                        aria-label="Очистить"
                        onClick={onClose}
                    >
                        <MdOutlineClose className="drawer__icon" />
                    </button>
                </div>
                <DrawerList
                    order={order}
                    setOrder={setOrder}
                />
            </div>
        </div>
    )
}

export default Drawer
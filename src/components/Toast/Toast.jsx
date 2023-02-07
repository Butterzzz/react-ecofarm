import React from 'react'
import './Toast.css'

const Toast = ({ isVisible }) => {
    return (
        <div className={`toast ${isVisible && 'toast_opened'}`}>
            Товар добавлен в корзину!
        </div>
    )
}

export default Toast
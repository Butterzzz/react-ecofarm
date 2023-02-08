import React from 'react'
import './Toast.css'

const Toast = ({ isVisibleToast }) => {
    return (
        <div className={`toast ${isVisibleToast && 'toast_opened'}`}>
            Товар добавлен в корзину!
        </div>
    )
}

export default Toast
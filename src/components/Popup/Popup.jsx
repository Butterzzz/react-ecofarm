import React from 'react'
import './Popup.css'
import { GrFormClose } from 'react-icons/gr'

const Popup = ({ children, isOpen, onClose }) => {
    return (
        <div className={`popup popup_type_video ${isOpen && "popup_opened"}`}>
            <div className="popup__container">
                <h2 className="popup__heading">Технология выращивания семян микрозелени</h2>
                {children}
                <GrFormClose className="popup__button popup__button_action_close" onClick={onClose} />
            </div>
        </div>
    )
}

export default Popup
import React, { useEffect } from 'react'
import './Popup.css'
import { GrFormClose } from 'react-icons/gr'

const Popup = ({ children, isOpen, onClose }) => {

    const handleKeyDown = evt => {
        if (evt.key === "Escape") {
            onClose(false);
        }
    };

    const handleClose = (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            onClose(false);
        };
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div className={`popup popup_type_video ${isOpen && "popup_opened"}`} onClick={handleClose}>
            <div className="popup__container">
                <h2 className="popup__heading">Технология выращивания семян микрозелени</h2>
                {children}
                <GrFormClose className="popup__button popup__button_action_close" onClick={onClose} />
            </div>
        </div>
    )
}

export default Popup
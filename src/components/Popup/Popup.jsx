import React, { useEffect } from 'react'
import './Popup.css'
import { MdOutlineClose } from 'react-icons/md'

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
                <div className="popup__top-wrapper">
                    <h2 className="popup__title">Технология выращивания семян микрозелени</h2>

                    <button className="popup__button popup__button_type_close button"
                        aria-label="Закрыть модальное окно"
                        onClick={onClose}>
                        <MdOutlineClose className="popup__button-icon" />
                    </button>
                </div>
                <div className="popup__video">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Popup
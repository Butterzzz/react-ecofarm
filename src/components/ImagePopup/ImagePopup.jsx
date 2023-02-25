import React from 'react'
import './ImagePopup.css'
import { MdOutlineClose } from 'react-icons/md'

const ImagePopup = ({ name, image, onClose }) => {

    const handleClose = (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            onClose(false);
        };
    };

    return (
        <div className={`popup popup_type_${name} ${image && "popup_opened"}`} onClick={handleClose}>
            <div className="popup__image-container">

                <figure className="popup__figure">
                    <img className="popup__image" src={image && image.image} alt={image && image.title} />
                    <figcaption className="popup__image-caption">{image && image.title}</figcaption>
                </figure>

                <button className="popup__button popup__button_type_close"
                    aria-label="Закрыть модальное окно"
                    onClick={onClose}>
                    <MdOutlineClose className="popup__button-icon" />
                </button>
            </div>
        </div>
    )
}

export default ImagePopup
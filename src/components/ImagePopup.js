import React from 'react';

const ImagePopup = () => {
    return (
        <div className="popup popup_type_image" id="galleryPopup">
            <div className="popup__image-wrapper">
                <figure className="popup__figure">
                    <picture>
                        <img className="popup__image" src="/" alt="Фотография горы"/>
                    </picture>
                    <figcaption className="popup__image-caption">Элбрус</figcaption>
                </figure>
                <button type="button" className="popup__close-button transition-on-hover"
                        id="galleryPopupCloseButton"></button>
            </div>
        </div>
    );
};

export default ImagePopup;
import React from 'react'
import './Map.css'

const Map = () => {
    return (
        <section className="map">
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad1c94cb350f61ead2fb2101d55d947e970feb7dd076b5501090197999a1ad061&amp;source=constructor"
                width="100%"
                height="500px"
                frameBorder="0"
                title="Наше местоположение на карте">
            </iframe>
            <div className="map__info">
                <h2 className="map__title">Мы находимся по адресу:</h2>
                <address className="map__address">Благовещенск, ул. Амурская 24</address>
            </div>
        </section>
    )
}

export default Map
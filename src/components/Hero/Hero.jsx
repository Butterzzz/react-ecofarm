import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import { BsPlayCircle } from 'react-icons/bs'

const Hero = ({ onClickAbout }) => {
    return (
        <section className="hero">
            <div className="hero__container container">
                <h1 className="hero__title">Микрозелень в Благовещенске</h1>
                <p className="hero__subtitle">Свежая микрозелень с доставкой по всему городу</p>
                <div className="hero__button-container">
                    <Link
                        to="catalog"
                        className="hero__button hero__button_primary button"
                    >
                        Каталог
                    </Link>
                    <button
                        className="hero__button hero__button_secondary button"
                        onClick={onClickAbout}
                    >
                        <BsPlayCircle
                            className="hero__button_icon"
                        />
                        О производстве
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero
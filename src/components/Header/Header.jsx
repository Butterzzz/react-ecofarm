import React from 'react'
import './Header.css'
import Logo from '../../components/Logo/Logo'
import Navigation from '../../components/Navigation/Navigation'

const Header = () => {
    return (
        <header className="header">
            <div className="header__conatiner">
                <Logo />
                <Navigation />
            </div>
        </header>
    )
}

export default Header
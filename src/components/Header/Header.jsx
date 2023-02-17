import React from 'react'
import './Header.css'
import Logo from '../../components/Logo/Logo'
import Navigation from '../../components/Navigation/Navigation'
import UserBar from '../../components/UserBar/UserBar'

const Header = ({ onDrawerClick, orderCount }) => {
    return (
        <header className="header">
            <div className="header__container container">
                <Logo />
                <Navigation />
                <UserBar
                   onDrawerClick={onDrawerClick}
                   orderCount={orderCount}
                />
            </div>
        </header>
    )
}

export default Header
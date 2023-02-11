import React from 'react'
import './Header.css'
import Logo from '../../components/Logo/Logo'
import Navigation from '../../components/Navigation/Navigation'
import UserBar from '../../components/UserBar/UserBar'

const Header = ({ onDrawerClick, itemCount }) => {
    return (
        <header className="header">
            <div className="header__conatiner">
                <Logo />
                <Navigation />
                <UserBar
                   onDrawerClick={onDrawerClick}
                   itemCount={itemCount}
                />
            </div>
        </header>
    )
}

export default Header
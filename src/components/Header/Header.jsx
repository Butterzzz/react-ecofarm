import React, { useState } from 'react'
import './Header.css'
import Logo from '../../components/Logo/Logo'
import Navigation from '../../components/Navigation/Navigation'
import UserBar from '../../components/UserBar/UserBar'
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu'

const Header = ({ onDrawerClick, orderCount }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__container container">
                <Logo />
                <Navigation 
                    isOpen={isOpen}
                />
                <UserBar
                   onDrawerClick={onDrawerClick}
                   orderCount={orderCount}
                />
                <HamburgerMenu
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </div>
        </header>
    )
}

export default Header
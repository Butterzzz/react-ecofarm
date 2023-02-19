import React from 'react'
import './HamburgerMenu.css'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdOutlineClose } from 'react-icons/md'

const HamburgerMenu = ({ isOpen, setIsOpen }) => {

    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    // function handleMenuItemClick() {
    //     setIsOpen(false);
    // }

    return (
        <div className='hamburger-menu' onClick={toggleMenu}>
            {isOpen ?
                <MdOutlineClose
                    className='hamburger-menu__icon'
                />
                :
                <AiOutlineMenu
                    className='hamburger-menu__icon'
                />
            }
        </div >
    )
}

export default HamburgerMenu
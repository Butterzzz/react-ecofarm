import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ onDrawerClick, itemCount }) => {
    return (
        <>
            <Header
                onDrawerClick={onDrawerClick}
                itemCount={itemCount}
            />

            <main className="content">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout
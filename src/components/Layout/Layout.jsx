import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ onDrawerClick }) => {
    return (
        <>
            <Header
                onDrawerClick={onDrawerClick}
            />

            <main className="content">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout
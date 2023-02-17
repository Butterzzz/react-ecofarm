import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ onDrawerClick, orderCount }) => {
    return (
        <>
            <Header
                onDrawerClick={onDrawerClick}
                orderCount={orderCount}
            />

            <main className="content">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout
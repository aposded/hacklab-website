import React from 'react'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import MobileNavbar from '../sections/MobileNavbar'
import {Outlet} from 'react-router-dom'

export default function Main() {
    return (
        <div className={`min-h-full px-4 pb-10 mx-auto max-w-7xl`}>
            <Navbar />
            <MobileNavbar />
            <Outlet />
            <Footer />
        </div>
    )
}

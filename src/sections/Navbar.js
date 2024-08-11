import React from 'react'
import Heading from '../components/Text/Heading'
import logo from '../assets/logo.png'
import Link from '../components/Links/Link'
import SecondaryButton from '../components/Buttons/SecondaryButton'

export default function Navbar() {
    return (
        <div className='justify-between hidden w-full px-4 py-4 lg:flex'>
            <img src={logo} alt='logo' className='w-16 h-16' />
            <div className='flex items-center justify-center gap-4'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/events'>Events</Link>
                <SecondaryButton>Apply</SecondaryButton>

            </div>
        </div>
    )
}

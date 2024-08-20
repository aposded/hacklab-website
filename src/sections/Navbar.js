import React from 'react'
import Heading from '../components/Text/Heading'
import logo from '../assets/logo.png'
import Link from '../components/Links/Link'
import SecondaryButton from '../components/Buttons/SecondaryButton'
import MenuLink from '../components/Links/MenuLink'

export default function Navbar() {
    return (
        <div className='justify-between hidden w-full px-4 py-4 mb-4 lg:flex'>
            <img src={logo} alt='logo' className='w-16 h-16' />
            <div className='flex items-center justify-center gap-4'>
                <MenuLink to='/'>Home</MenuLink>
                <MenuLink to='/about'>About</MenuLink>
                <MenuLink to='/projects'>Projects</MenuLink>
                <MenuLink to='/team'>Our Team</MenuLink>
                <SecondaryButton>Apply</SecondaryButton>
            </div>
        </div>
    )
}

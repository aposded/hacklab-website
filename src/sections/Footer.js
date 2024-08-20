import React from 'react'
import hacklabLogo from '../assets/logo.png'
import Icon from '../components/Text/Icon'
import Link from '../components/Links/Link'
import SecondaryButton from '../components/Buttons/SecondaryButton'
import MenuLink from '../components/Links/MenuLink'

export default function Footer() {
    return (
        <div className='flex items-center justify-between w-full px-4 py-4 mt-8'>
            <div className='flex gap-4'>
                <a href='/'>
                    <img src={hacklabLogo} alt='logo' className='w-16 h-16' />
                </a>
            </div>
            <div>
                <div className='items-center justify-center hidden gap-4 text-white lg:flex'>
                    <MenuLink to='/'>Home</MenuLink>
                    <MenuLink to='/about'>About</MenuLink>
                    <MenuLink to='/projects'>Projects</MenuLink>
                    <MenuLink to='/team'>Our Team</MenuLink>
                    <SecondaryButton>Apply</SecondaryButton>
                </div>
                <div className='flex items-center justify-end gap-4 mt-4'>
                    <Link to='https://www.instagram.com/the.hack.lab/'><Icon icon='instagram' /></Link>
                    <Link to='https://www.linkedin.com/company/thehacklab/mycompany/'><Icon icon='linkedin' /></Link>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import hacklabLogo from '../assets/logo.png'
import Icon from '../components/Text/Icon'
import Link from '../components/Links/Link'
import MenuLink from '../components/Links/MenuLink'
import {useApply} from '../hooks/useApply'
import PrimaryButton from '../components/Buttons/PrimaryButton'

export default function Footer() {
    const {applyFinance,applyEntrepreneurship}=useApply()

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
                    <MenuLink to='/challenge'>The Challenge</MenuLink>
                    <MenuLink to='/projects'>Past Projects</MenuLink>
                    <MenuLink to='/team'>Our Team</MenuLink>
                    <MenuLink to='mailto:thehacklab.bocconi@gmail.com'>Contact Us</MenuLink>
                    <div className='flex gap-2'>
                        <PrimaryButton onClick={applyFinance}>Apply to Finance</PrimaryButton>
                        <PrimaryButton onClick={applyEntrepreneurship}>Apply to Entrepreneurship</PrimaryButton>
                    </div>
                </div>
                <div className='flex items-center justify-end gap-4 mt-4'>
                    <Link to='https://www.instagram.com/the.hack.lab/'><Icon icon='instagram' /></Link>
                    <Link to='https://www.linkedin.com/company/thehacklab/mycompany/'><Icon icon='linkedin' /></Link>
                </div>
            </div>
        </div>
    )
}

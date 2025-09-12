import React from 'react'
import logo from '../assets/logo.png'
import MenuLink from '../components/Links/MenuLink'
import {useApply} from '../hooks/useApply'
import PrimaryButton from '../components/Buttons/PrimaryButton'

export default function Navbar() {
    const {applyFinance,applyEntrepreneurship}=useApply()

    return (
        <div className='justify-between hidden w-full px-4 py-4 mb-4 lg:flex'>
            <img src={logo} alt='logo' className='w-16 h-16' />
            <div className='flex items-center justify-center gap-4'>
                <MenuLink to='/'>Home</MenuLink>
                <MenuLink to='/about'>About</MenuLink>
                <MenuLink to='/challenge'>The Challenge</MenuLink>
                <MenuLink to='/projects'>Past Projects</MenuLink>
                <MenuLink to='/team'>Our Team</MenuLink>
                <MenuLink to='mailto:thehacklab.bocconi@gmail.com'>Contact Us</MenuLink>
                <div className='flex gap-2'>
                    <PrimaryButton onClick={applyFinance}>Apply to Markets</PrimaryButton>
                    <PrimaryButton onClick={applyEntrepreneurship}>Apply to Startup</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

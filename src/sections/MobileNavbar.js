import React,{useState} from 'react'
import logo from '../assets/logo.png'
import SecondaryButton from '../components/Buttons/SecondaryButton'
import Icon from '../components/Text/Icon'
import MenuLink from '../components/Links/MenuLink'
import {useApply} from '../hooks/useApply'
import PrimaryButton from '../components/Buttons/PrimaryButton'

export default function MobileNavbar() {
    const [expanded,setExpanded]=useState(false)
    const {applyFinance,applyEntrepreneurship}=useApply()

    return (
        <>
            <div className='flex justify-between w-full px-4 py-4 mb-4 lg:hidden'>
                <img src={logo} alt='logo' className='w-16 h-16' />
                <div className='flex items-center justify-center gap-4'>
                    <SecondaryButton className='!py-0.5 !px-1 !bg-transparent' onClick={() => setExpanded(!expanded)}><Icon className='p-0 text-3xl' icon={expanded? 'x':'list'} /></SecondaryButton>
                </div>
            </div>
            {expanded&&<div className='flex flex-col w-full gap-4 px-4 py-4 lg:hidden'>
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
            </div>}
        </>
    )
}

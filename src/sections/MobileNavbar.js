import React,{useState} from 'react'
import logo from '../assets/logo.png'
import SecondaryButton from '../components/Buttons/SecondaryButton'
import Link from '../components/Links/Link'
import Icon from '../components/Text/Icon'
import MenuLink from '../components/Links/MenuLink'

export default function MobileNavbar() {
    const [expanded,setExpanded]=useState(false)

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
                <MenuLink to='/projects'>Projects</MenuLink>
                <MenuLink to='/team'>The Team</MenuLink>
                <SecondaryButton >Apply</SecondaryButton>
            </div>}

        </>
    )
}

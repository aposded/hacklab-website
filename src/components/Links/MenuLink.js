import React from 'react'
import {Link as RrdLink} from 'react-router-dom'

export default function MenuLink({to='',children}) {

    if(to.startsWith('http')) {
        return (
            <a href={to} className='font-semibold transition-colors cursor-pointer text-md lg:text-lg text-light hover:text-dark-200'>{children}</a>
        )
    }
    return <RrdLink to={to} className='font-semibold transition-colors cursor-pointer text-md lg:text-lg text-light hover:text-dark-200'>{children}</RrdLink>
}

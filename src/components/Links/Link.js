import React from 'react'
import {Link as RrdLink} from 'react-router-dom'

export default function Link({to='',children}) {

    if(to.startsWith('http')) {
        return (
            <a href={to} className='font-semibold underline transition-colors cursor-pointer text-md lg:text-lg text-light hover:text-dark-200'>{children}</a>
        )
    }
    return <RrdLink to={to} className='font-semibold underline transition-colors cursor-pointer text-md lg:text-lg text-light hover:text-dark-200'>{children}</RrdLink>
}

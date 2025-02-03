import React from 'react'
import {Link as RrdLink} from 'react-router-dom'

export default function MenuLink({to='',children}) {
    const handleColor=(e) => {
        e.target.className=e.target.className.replace('text-light',['text-hl-blue','text-hl-purple','text-hl-green'][Math.floor(Math.random()*3)])
    }

    const handleRemoveColor=(e) => {
        e.target.className=e.target.className.replace('text-hl-blue','text-light').replace('text-hl-purple','text-light').replace('text-hl-green','text-light')
    }

    if(to.startsWith('http')) {
        return (
            <a onMouseOver={handleColor} onMouseOut={handleRemoveColor} href={to} className='font-semibold transition-colors cursor-pointer text-md lg:text-lg text-light'>{children}</a>
        )
    }
    return <RrdLink onMouseOver={handleColor} onMouseOut={handleRemoveColor} to={to} className='font-semibold transition-colors cursor-pointer text-md lg:text-lg text-light '>{children}</RrdLink>
}

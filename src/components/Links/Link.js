import classNames from 'classnames'
import React from 'react'
import {Link as RrdLink} from 'react-router-dom'

export default function Link({to='',children,className}) {

    if(to.startsWith('http')) {
        return (
            <a href={to} className={classNames('font-semibold underline transition-colors cursor-pointer text-md lg:text-lg text-light hover:text-dark-200',className)}>{children}</a>
        )
    }
    return <RrdLink to={to} className={classNames('font-semibold underline transition-colors cursor-pointer text-md lg:text-lg text-light hover:text-dark-200',className)}>{children}</RrdLink>
}

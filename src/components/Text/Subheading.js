import React from 'react'
import classNames from 'classnames'


export default function Subheading({children,className}) {
    return (
        <h2 className={classNames('px-0 text-2xl font-semibold lg:text-2xl text-light',className)}>{children}</h2>
    )
}

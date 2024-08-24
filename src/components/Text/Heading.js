import React from 'react'
import classNames from 'classnames'

export default function Heading({children,className}) {

    return (
        <h1 className={classNames('px-0 text-4xl font-bold lg:text-4xl text-light',className)}>{children}</h1>
    )
}

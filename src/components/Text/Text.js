import React from 'react'
import classNames from 'classnames'


export default function Text({children,className}) {
    return (
        <p className={classNames('p-0 text-md font-normal text-light lg:text-lg',className)}>{children}</p>
    )
}

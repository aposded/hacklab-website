import React from 'react'
import classNames from 'classnames'

export default function Icon({icon,className}) {
    return (
        <i className={classNames('text-light','bi bi-'+icon,className)}></i>
    )
}

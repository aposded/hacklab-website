import React from 'react'
import classNames from 'classnames'

export default function PrimaryButton({onClick,children,className}) {
    return (
        <button onClick={onClick} className={classNames('px-4 py-2 font-semibold transition-colors rounded-lg text-dark bg-light hover:bg-dark-100',className)}>
            {children}
        </button>
    )
}

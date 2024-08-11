import React from 'react'
import classNames from 'classnames'

export default function SecondaryButton({onClick,children,className}) {
    return (
        <button onClick={onClick} className={classNames('px-4 py-2 font-semibold transition-colors border rounded-lg text-light border-light hover:bg-light hover:bg-opacity-20',className)}>
            {children}
        </button>
    )
}

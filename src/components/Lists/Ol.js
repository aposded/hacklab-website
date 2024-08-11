import React from 'react'

export default function Ol({children}) {
    return (
        <ol className="px-0 list-decimal list-inside text-light">
            {children}
        </ol>
    )
}

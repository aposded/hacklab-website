import classNames from 'classnames'
import React from 'react'

export default function Ul({children,className}) {
    return (
        <ul className={classNames('px-0 list-disc list-outside text-light [&>li]:pl-2 [&>li]:mt-1',className)}>{children}</ul>
    )
}

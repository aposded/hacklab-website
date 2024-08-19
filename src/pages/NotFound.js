import React from 'react'
import Icon from '../components/Text/Icon'
import Link from '../components/Links/Link'
import Text from '../components/Text/Text'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center w-full h-screen'>
            <Icon icon='balloon' className='-mt-36 text-9xl text-light animate-bounce' />
            <h1 className='mt-12 text-3xl text-light'>Page Not Found</h1>
            <Text className='w-1/3 mt-2 text-center text-light'>You probably came here for the balloons and confetti. They have been moved to the <Link to='/'>homepage</Link>!</Text>
        </div>
    )
}

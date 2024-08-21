import React from 'react'
import Heading from '../components/Text/Heading'

export default function Hero() {
    return (
        <div className='relative h-128'>
            <iframe src='/hero.html' className='absolute z-50 object-cover w-full -translate-x-1/2 -translate-y-1/2 h-128 top-1/2 left-1/2' title='Hero Video' />
            <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-row-reverse items-center justify-center'>
                <div className='flex flex-col items-center justify-center w-full h-full px-4 opacity-50 text-light'>
                    <Heading className='lg:!text-4xl w-full text-center'>code.connect.create.code.connect.create.code.connect.create.</Heading>
                </div>
            </div>
        </div>
    )
}

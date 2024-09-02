import React from 'react'
import Heading from '../components/Text/Heading'
import bg from '../assets/hl.png'

export default function Hero() {

    const getHeadings=() => {
        let noOfHeadings=2
        if(window.screen.width>900) {
            noOfHeadings=3
        } else if(window.screen.width<550) {
            noOfHeadings=2
        }
        let headings=[]
        for(let i=0;i<noOfHeadings;i++) {
            headings.push('code.connect.create.')
        }
        return headings.join('')
    }

    return (
        <div className='relative h-64 lg:h-128'>
            <iframe src='/hero.html' className='absolute z-50 object-cover w-full h-64 -translate-x-1/2 -translate-y-1/2 lg:h-128 top-1/2 left-1/2' title='Hero Video' />
            <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-row-reverse items-center justify-center w-full'>
                <div className='flex flex-col items-center justify-center w-full h-full px-4 opacity-50 text-light'>
                    <img src={bg} alt='bg' className='object-contain w-full h-full' />
                </div>
            </div>
            <div className='absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center w-full h-full px-4 mt-4f top-1/2 text-zinc-400/50'>
                <Heading className='text-2xl text-center text-zinc-400/50'>code.connect.create.</Heading>
            </div>
        </div>
    )
}

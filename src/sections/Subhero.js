import React from 'react'
import Subheading from '../components/Text/Subheading'
import Heading from '../components/Text/Heading'
import Text from '../components/Text/Text'
import PrimaryButton from '../components/Buttons/PrimaryButton'

/**
 * 
 * @param {Object} data - The data of the subhero
 * @property {string} title - The title of the column
 * @property {string} description - The description of the column
 * @property {string} image - The image of the column
 * @property {string} buttonText - The text of the button
 * @property {function} onClick - The function to run when the button is clicked
 * @property {boolean} reverse - Whether to reverse the image and text
 */

export default function Subhero({image,children,reverse}) {
    return (
        <div className={'flex flex-col items-center justify-center py-8 w-full gap-12 mt-8 '+(reverse? 'flex-col lg:flex-row-reverse':' flex-col lg:flex-row')}>
            <div className='w-full lg:w-1/2'>
                <div className='w-4/5 mx-auto mb-8 rounded-full bg-dark-200 bg-opacity-20 aspect-square lg:mb-0'>
                    <img src={image} alt='decorative' className='object-cover p-4 rounded-full lg:p-8 aspect-square' />
                </div>
            </div>
            <div className='flex items-center justify-center w-full px-1 -mt-8 h-max lg:w-1/2'>
                <div className='w-full px-8 text-light'>
                    {children}
                </div>
            </div>
        </div>
    )
}

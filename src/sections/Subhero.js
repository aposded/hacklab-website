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
        <div className={'flex flex-col items-start justify-center w-full gap-12 mt-8 '+(reverse? 'flex-col-reverse lg:flex-row-reverse':' flex-col lg:flex-row')}>
            <div className='w-full lg:w-1/2'>
                <div className='w-4/5 mx-auto rounded-full bg-dark-200 bg-opacity-20 aspect-square'>
                    <img src={image} alt='decorative' className='object-contain aspect-square' />
                </div>
            </div>
            <div className='w-full px-8 mt-8 lg:w-1/2 text-light'>
                {children}
            </div>
        </div>
    )
}

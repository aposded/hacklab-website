import React from 'react'
import Heading from '../components/Text/Heading'
import Text from '../components/Text/Text'
import Subheading from '../components/Text/Subheading'
import PrimaryButton from '../components/Buttons/PrimaryButton'

/**
 * 
 * @param {Object} data - An array of objects containing the following
 * @property {string} title - The title of the column
 * @property {string} description - The description of the column
 * @property {string} image - The image of the column
 * @property {string} buttonText - The text of the button
 * @property {function} onClick - The function to run when the button is clicked
 * @param {string} heading - The heading of the columns
 */

export default function Columns({data,heading}) {
    return (
        <div className='w-full'>
            <Heading className='w-full text-center'>{heading}</Heading>
            <div className='grid w-full grid-cols-1 gap-4 lg:grid-cols-3'>
                {data.map((item,index) => {
                    return (
                        <div key={index} className='p-4'>
                            <div className='mb-4 rounded-full bg-dark-200 bg-opacity-20 aspect-square'>
                                <img src={item.image||''} alt={item.title} className='object-cover w-full h-32' />
                            </div>
                            <Subheading className='w-full text-center'>{item.title||''}</Subheading>
                            <Text className='w-full text-justify'>{item.description||''}</Text>
                            {item.buttonText&&<PrimaryButton onClick={item.onClick||null}>{item.buttonText}</PrimaryButton>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

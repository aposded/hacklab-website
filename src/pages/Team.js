import React from 'react'
import Heading from '../components/Text/Heading'
import Subheading from '../components/Text/Subheading'
import Text from '../components/Text/Text'
import icon from '../assets/logo.png'
import Link from '../components/Links/Link'
import Icon from '../components/Text/Icon'

export default function Team() {

    const teamMembers=[
        {name: 'John Doe',image: icon,linkedin: '',department: 'IT'},
        {name: 'John Doe',image: icon,linkedin: '',department: 'IT'},
        {name: 'John Doe',image: icon,linkedin: '',department: 'IT'},
        {name: 'John Doe',image: icon,linkedin: '',department: 'IT'},
        {name: 'John Doe',image: icon,linkedin: '',department: 'Marketing'},
        {name: 'John Doe',image: icon,linkedin: '',department: 'Marketing'},
        {name: 'John Doe',image: icon,linkedin: '',department: 'Marketing'},
        {name: 'John Doe',image: icon,linkedin: '',department: 'Design'},
        {name: 'John Doe',image: icon,linkedin: '',department: 'Design'},
        {name: 'John Doe',image: icon,linkedin: '',department: 'Design'},
    ]

    const departments=['Marketing','IT','Design']

    return (
        <div>
            <Heading className='w-full !py-12 text-center'>Our team</Heading>
            <div className='grid w-full grid-cols-3 gap-12'>
                {departments.map(department => (
                    <><Subheading className='col-span-3 py-6 text-2xl text-left lg:text-3xl'>{department}</Subheading>
                        {teamMembers.map(member => (member.department===department&&
                            <div className='flex flex-col items-center justify-center gap-4'>
                                <div className='relative w-48 h-48'>
                                    <Link className='absolute bottom-0 right-4' to={member.linkedin}><Icon icon='linkedin' className='text-3xl' /></Link>
                                    <img src={member.image} alt='profile' className='w-48 h-48 rounded-full' />
                                </div>
                                <Text className='font-semibold'>{member.name}</Text>
                            </div>
                        ))}
                    </>))}
            </div>
        </div>
    )
}

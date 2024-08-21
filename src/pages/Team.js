import React from 'react'
import Heading from '../components/Text/Heading'
import Subheading from '../components/Text/Subheading'
import Text from '../components/Text/Text'
import icon from '../assets/logo.png'
import Link from '../components/Links/Link'
import Icon from '../components/Text/Icon'

export default function Team() {

    const teamMembers=[
        {name: 'Davide Bacchini',image: icon,role: 'President',linkedin: '',department: 'The Board'},
        {name: 'Alessandro Di Bernardo',role: 'Vice President',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Riccardo Scibetta',role: 'Strategic Advisor',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Francesco Arconte',role: 'Strategic Advisor',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Apostolos Dedeloudis',role: 'Co-Head of IT & Mentors',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Danilo Scholz',role: 'Co-Head of IT & Mentors',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Alessandro Ferraiolo',role: 'Head of Projects',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Giacomo Cordella',role: 'Head of HR',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Damir Maksut',role: 'Co-Head of Events',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Albert Loog',role: 'Co-Head of Events',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Giulio Conti',role: 'Co-Head of Digital',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Beatrice Banciamore',role: 'Co-Head of Digital',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Matteo',role: 'Digital',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Lorenzo Faella',role: 'Digital',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Carlo Maria Calvanico',role: 'Outreach',image: icon,linkedin: '',department: 'The Board'},
        {name: 'Apostolos Dedeloudis',image: icon,linkedin: '',department: 'Mentors'},
        {name: 'Danilo Scholz',image: icon,linkedin: '',department: 'Mentors'},
        {name: 'Giacomo Cordella',image: icon,linkedin: '',department: 'Mentors'},
        {name: 'Damir Maksut',image: icon,linkedin: '',department: 'Mentors'},
        {name: 'Alessandro Ferraiolo',image: icon,linkedin: '',department: 'Mentors'},
        {name: 'Andrea Bonarrigo',image: icon,linkedin: '',department: 'Mentors'},

    ]

    const departments=['The Board','Mentors']

    return (
        <div>
            <Heading className='w-full !py-12 text-center'>Our team</Heading>
            <div className='grid w-full grid-cols-4 gap-12'>
                {departments.map(department => (
                    <><Subheading className='col-span-4 py-6 text-2xl text-left lg:text-3xl'>{department}</Subheading>
                        {teamMembers.map(member => (member.department===department&&
                            <div className='flex flex-col items-center justify-center gap-0'>
                                <div className='relative w-48 h-48'>
                                    <Link className='absolute bottom-0 right-4' to={member.linkedin}><Icon icon='linkedin' className='text-3xl' /></Link>
                                    <img src={member.image} alt='profile' className='w-48 h-48 rounded-full' />
                                </div>
                                <Text className='mt-4 font-semibold'>{member.name}</Text>
                                <Text className='text-sm'>{member.role}</Text>
                            </div>
                        ))}
                    </>))}
            </div>
        </div>
    )
}

import React from 'react'
import Heading from '../components/Text/Heading'
import Subheading from '../components/Text/Subheading'
import Text from '../components/Text/Text'
import icon from '../assets/logo.png'
import Link from '../components/Links/Link'
import Icon from '../components/Text/Icon'
import AledibeIcon from '../assets/team/Aledibe.jpg'
import ApostolosIcon from '../assets/team/Apostolos.jpg'
import DavideIcon from '../assets/team/Davide.jpg'
import DaniloIcon from '../assets/team/Danilo.jpg'
import RiccardoIcon from '../assets/team/Riccardo.jpg'
import AlessandroIcon from '../assets/team/Alessandro.jpg'
import DamirIcon from '../assets/team/Damir.jpg'
import JackIcon from '../assets/team/Jack.jpg'
import AndreaIcon from '../assets/team/Andrea.jpg'
import MicheleMatozzaIcon from '../assets/team/MicheleMatozza.png'
import CarloIcon from '../assets/team/Carlo.jpg'
import AmedeoMarineIcon from '../assets/team/AmedeoMarine.png'
import NicolasIcon from '../assets/team/Nicolas.jpeg'
import RiccardoMazzariniIcon from '../assets/team/RiccardoMazzarini.png'
import LiviaIcon from '../assets/team/Livia.jpeg'

export default function Team() {

    const teamMembers=[
        {name: 'Michele Matozza',role: 'President',image: MicheleMatozzaIcon,linkedin: 'https://www.linkedin.com/in/michele-francesco-matozza',department: 'The Board'},
        {name: 'Amedeo Marine',role: 'President',image: AmedeoMarineIcon,linkedin: 'https://www.linkedin.com/in/amedeo-marine/',department: 'The Board',zoom: 1.2},
        {name: 'Nicolas Leonardo Razzotti',role: 'Strategic Advisor',image: NicolasIcon,linkedin: 'https://www.linkedin.com/in/nicolas-leonardo-razzotti/',department: 'The Board'},
        {name: 'Riccardo Mazzarini',role: 'Head of Markets Competition',image: RiccardoMazzariniIcon,linkedin: 'https://www.linkedin.com/in/riccardo-mazzarini/',department: 'The Board'},
        {name: 'Livia Deltombe',role: 'Head of Digital',image: LiviaIcon,linkedin: 'https://www.linkedin.com/in/livia-deltombe/',department: 'The Board'},
        {name: 'Alessandro Ferraiolo',role: 'Head of Startup Competition',image: AlessandroIcon,linkedin: 'https://www.linkedin.com/in/alessandroferraiolo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',department: 'The Board'},
        {name: 'Apostolos Dedeloudis',role: 'Head of IT',image: ApostolosIcon,linkedin: 'https://www.linkedin.com/in/dedeloudis/',department: 'The Board'},
        {name: 'Carlo Maria Calvanico',role: 'Coordination Strategist',image: CarloIcon,linkedin: 'https://www.linkedin.com/in/carlo-maria-calvanico-542a96292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',department: 'The Board'},
        {name: 'Davide Bacchini',image: DavideIcon,role: 'External Advisor',linkedin: 'https://www.linkedin.com/in/davide-bacchini',department: 'The Board'},
        {name: 'Alessandro Di Bernardo',role: 'Head of Startup Competition',image: AledibeIcon,linkedin: 'https://www.linkedin.com/in/alessandro-di-bernardo-9a7b15294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',department: 'The Board'},
        {name: 'Riccardo Scibetta',role: 'External Advisor',image: RiccardoIcon,linkedin: 'https://it.linkedin.com/in/riccardo-scibetta-064180239',department: 'The Board'},
    ]

    const departments=['The Board']

    return (
        <div>
            <Heading className='w-full !py-12 text-center'>Our team</Heading>
            <div style={{placeItems: 'start center'}} className='grid grid-cols-2 gap-12 w-full lg:grid-cols-4'>
                {departments.map(department => (
                    <><Subheading className='col-span-2 py-6 text-2xl text-left lg:col-span-4 lg:text-3xl'>{department}</Subheading>
                        {teamMembers.map(member => (member.department===department&&
                            <div className='flex flex-col gap-0 justify-center items-center'>
                                <div className='relative w-32 h-32 lg:w-48 lg:h-48'>
                                    {member.linkedin&&<Link className='absolute bottom-0 right-1 lg:right-4' to={member.linkedin}><Icon icon='linkedin' className='text-3xl' /></Link>}
                                    <img
                                        src={member.image}
                                        alt='profile'
                                        style={{
                                            // Slightly off center the image
                                            objectPosition: 'center 10%',
                                            transform: member.zoom ? `scale(${member.zoom})` : 'scale(1)'
                                        }}
                                        className='object-cover w-32 h-32 rounded-full lg:w-48 lg:h-48'
                                    />
                                </div>
                                <Text className='mt-4 font-semibold text-center'>{member.name}</Text>
                                <Text className='text-sm text-center'>{member.role}</Text>
                            </div>
                        ))}
                    </>))}
            </div>
        </div>
    )
}




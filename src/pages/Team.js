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
import BeatriceIcon from '../assets/team/Beatrice.jpg'
import LorenzoIcon from '../assets/team/Lorenzo.jpg'
import AndreaIcon from '../assets/team/Andrea.jpg'
import AlbertIcon from '../assets/team/Albert.jpg'
import FrancescoIcon from '../assets/team/Francesco.jpg'
import MatteoIcon from '../assets/team/Matteo.jpg'
import CarloIcon from '../assets/team/Carlo.jpg'
import GiulioIcon from '../assets/team/Giulio.jpg'
import MatteoMIcon from '../assets/team/MatteoM.jpeg'

export default function Team() {

    const teamMembers=[
        {name: 'Davide Bacchini',image: DavideIcon,role: 'President',linkedin: 'https://www.linkedin.com/in/davide-bacchini',department: 'The Board'},
        {name: 'Alessandro Di Bernardo',role: 'Vice President',image: AledibeIcon,linkedin: 'https://www.linkedin.com/in/alessandro-di-bernardo-9a7b15294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',department: 'The Board'},
        {name: 'Riccardo Scibetta',role: 'Strategic Advisor',image: RiccardoIcon,linkedin: 'https://it.linkedin.com/in/riccardo-scibetta-064180239',department: 'The Board'},
        {name: 'Francesco Arconte',role: 'Strategic Advisor',image: FrancescoIcon,linkedin: 'https://www.linkedin.com/in/francesco-arconte-02b5892a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',department: 'The Board'},
        {name: 'Apostolos Dedeloudis',role: 'Co-Head of IT & Mentors',image: ApostolosIcon,linkedin: 'https://www.linkedin.com/in/dedeloudis/',department: 'The Board'},
        {name: 'Danilo Scholz',role: 'Co-Head of IT & Mentors',image: DaniloIcon,linkedin: 'https://www.linkedin.com/in/danilo-scholz-202234275/',department: 'The Board'},
        {name: 'Alessandro Ferraiolo',role: 'Head of Competition',image: AlessandroIcon,linkedin: 'https://www.linkedin.com/in/alessandroferraiolo?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',department: 'The Board'},
        {name: 'Giacomo Cordella',role: 'Head of HR',image: JackIcon,department: 'The Board'},
        {name: 'Damir Maksut',role: 'Co-Head of Events',image: DamirIcon,department: 'The Board'},
        {name: 'Albert Loog',role: 'Co-Head of Events',image: AlbertIcon,linkedin: 'https://www.linkedin.com/in/albertloog?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',department: 'The Board'},
        {name: 'Beatrice Branciamore',role: 'Head of Digital',image: BeatriceIcon,linkedin: 'https://www.linkedin.com/in/beatrice-branciamore-262353289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',department: 'The Board'},
        {name: 'Lorenzo Faella',role: 'Digital',image: LorenzoIcon,linkedin: 'https://www.linkedin.com/in/lorenzo-bernardo-faella-1a5892292/',department: 'The Board'},
        {name: 'Matteo Mendicini',role: 'Coordination Strategist',image: MatteoMIcon,linkedin: 'https://www.linkedin.com/in/matteomendicini/',department: 'The Board'},
        {name: 'Carlo Maria Calvanico',role: 'Coordination Strategist',image: CarloIcon,linkedin: 'https://www.linkedin.com/in/carlo-maria-calvanico-542a96292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',department: 'The Board'},
        {name: 'Apostolos Dedeloudis',image: ApostolosIcon,linkedin: 'https://www.linkedin.com/in/dedeloudis/',department: 'Mentors'},
        {name: 'Danilo Scholz',image: DaniloIcon,linkedin: 'https://www.linkedin.com/in/danilo-scholz-202234275/',department: 'Mentors'},
        {name: 'Giacomo Cordella',image: JackIcon,department: 'Mentors'},
        {name: 'Damir Maksut',image: DamirIcon,department: 'Mentors'},
        {name: 'Andrea Bonarrigo',image: AndreaIcon,linkedin: 'https://www.linkedin.com/in/andrea-bonarrigo/',department: 'Mentors'},
    ]

    const departments=['The Board','Mentors']

    return (
        <div>
            <Heading className='w-full !py-12 text-center'>Our team</Heading>
            <div style={{placeItems: 'start center'}} className='grid w-full grid-cols-2 gap-12 lg:grid-cols-4'>
                {departments.map(department => (
                    <><Subheading className='col-span-2 py-6 text-2xl text-left lg:col-span-4 lg:text-3xl'>{department}</Subheading>
                        {teamMembers.map(member => (member.department===department&&
                            <div className='flex flex-col items-center justify-center gap-0'>
                                <div className='relative w-32 h-32 lg:w-48 lg:h-48'>
                                    {member.linkedin&&<Link className='absolute bottom-0 right-1 lg:right-4' to={member.linkedin}><Icon icon='linkedin' className='text-3xl' /></Link>}
                                    <img src={member.image} alt='profile' style={{
                                        // Slightly off center the image    
                                        objectPosition: 'center 10%'

                                    }} className='object-cover w-32 h-32 rounded-full lg:w-48 lg:h-48' />
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

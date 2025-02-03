import React from 'react'
import Icon from '../components/Text/Icon'
import Text from '../components/Text/Text'
import Subhero from '../sections/Subhero'
import Subheading from '../components/Text/Subheading'
import Heading from '../components/Text/Heading'
import AcquaAltaLogo from '../assets/acquaalta.png'
import NexusLogo from '../assets/nexus.png'
import RemoireLogo from '../assets/remoire.png'

export default function Projects() {
    return (
        <div className='flex flex-col items-center justify-center w-full pb-12'>
            <Heading className='lg:pt-16'>Fall 2024 Projects</Heading>
            <div className='flex items-center justify-center w-full pt-8 pb-4 lg:pt-32 lg:pb-16 lg:w-1/2 text-light'>
                <Text className='px-4 text-xl italic border-l border-white lg:text-2xl !text-left'>"Design innovative solutions that connect people with shared interests under the theme of <b>Community</b>." <br /><br />Theme of Fall 2024 Challenge</Text>
            </div>
            <Subhero image={AcquaAltaLogo} index={0} reverse>
                <Subheading>Winner - AcquaAlta</Subheading>
                <Text className='mt-2 !leading-relaxed'>AcquaAlta is a digital application with an intuitive, user-friendly design that aggregates crowdsourced data about flooded areas during heavy rainfall in Milan. It empowers urban citizens to contribute collectively to safely navigate the city. The data collected on flooded areas can be used to train predictive machine learning models and inform infrastructure improvements for a more adaptive and resilient future.</Text>
            </Subhero>
            <Subhero image={RemoireLogo} index={1}>
                <Subheading>2nd Place - Remoire</Subheading>
                <Text className='mt-2 !leading-relaxed'>Remoire is a cutting-edge app designed to transform the way people engage with fashion and connect
                    through their clothing choices. By combining digital wardrobe management, social interaction, and
                    fashion inspiration, Remoire serves as a one-stop platform for style enthusiasts and casual users alike.</Text>
            </Subhero>
            <Subhero image={NexusLogo} reverse index={2}>
                <Subheading>3rd Place - Nexus</Subheading>
                <Text className='mt-2 !leading-relaxed'>Nexus is a mobile application that helps students living in Milan to connect with each other and explore the city. It allows students to easily organize their study spots and explore new ones, while empowering them to meet new like-minded students that have sahred interests and hobbies.</Text>
            </Subhero>
        </div>
    )
}

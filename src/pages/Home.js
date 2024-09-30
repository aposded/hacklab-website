import React from 'react'
import Navbar from '../sections/Navbar'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import SecondaryButton from '../components/Buttons/SecondaryButton'
import Heading from '../components/Text/Heading'
import Subheading from '../components/Text/Subheading'
import Link from '../components/Links/Link'
import Ol from '../components/Lists/Ol'
import Ul from '../components/Lists/Ul'
import Text from '../components/Text/Text'
import MobileNavbar from '../sections/MobileNavbar'
import Subhero from '../sections/Subhero'
import logo from '../assets/logo.png'
import Hero from '../sections/Hero'
import nightImage from '../assets/night.webp'
import sdaImage from '../assets/sda.jpg'
import teamImage from '../assets/team.jpg'
import Icon from '../components/Text/Icon'
import {useApply} from '../hooks/useApply'

export default function Home() {
    const {handleApply}=useApply()

    return (
        <div>
            <Hero></Hero>
            <div style={{
                placeItems: 'start center'
            }} className='grid w-full grid-cols-1 gap-6 my-12 lg:grid-cols-3 '>
                <div className='flex flex-col items-center justify-center w-4/5 gap-6'>
                    <div className='flex items-center justify-center w-24 h-24 rounded-full bg-dark-200 bg-opacity-20 aspect-square'>
                        <Icon icon='code' className='text-6xl text-dark' />
                    </div>
                    <Heading>Code</Heading>
                    <Text className='text-center'>Develop hands-on skills in innovation and entrepreneurship.</Text>
                </div>
                <div className='flex flex-col items-center justify-center w-4/5 gap-6'>
                    <div className='flex items-center justify-center w-24 h-24 rounded-full bg-dark-200 bg-opacity-20 aspect-square'>
                        <Icon icon='people-fill' className='text-5xl text-dark' />
                    </div>
                    <Heading>Connect</Heading>
                    <Text className='text-center'>Collaborate with peers, mentors, and industry professionals.</Text>
                </div>
                <div className='flex flex-col items-center justify-center w-4/5 gap-6'>
                    <div className='flex items-center justify-center w-24 h-24 rounded-full bg-dark-200 bg-opacity-20 aspect-square'>
                        <Icon icon='rocket-takeoff-fill' className='mt-1 text-5xl mr-0.5 text-dark' />
                    </div>
                    <Heading>Create</Heading>
                    <Text className='text-center'>
                        Showcase your work and present your prototype to a panel of judges.
                    </Text>
                </div>
            </div>
            <Subhero image={sdaImage}>
                <Subheading>What is the theHackLab?</Subheading>
                <Text className='mt-2'>
                    theHackLab is a student-driven innovation hub at Bocconi. We bring together students from technical and business backgrounds to:
                </Text>
                <Ul className='mt-4 text-lg font-semibold'>
                    <li>Tackle real-world challenges</li>
                    <li>Develop prototypes over a semester</li>
                    <li>Collaborate in diverse, interdisciplinary teams</li>
                </Ul>
                <Text className='mt-4 text-center lg:mt-16'>Join us to turn ideas into impactful solutions!</Text>
                <div className='flex items-center justify-center w-full'>
                    <PrimaryButton onClick={handleApply} className='mx-auto mt-4'>Apply Now</PrimaryButton>
                </div>
            </Subhero>
            <Subhero reverse image={teamImage}>
                <Subheading>Why should I join the theHackLab?</Subheading>
                <Text className='mt-2'>Unlock unique opportunities:</Text>
                <Ul className='mt-4 text-lg'>
                    <li><span className='font-semibold'>Collaborate</span>: Work in teams with both tech and business students.</li>
                    <li><span className='font-semibold'>Gain Experience</span>: Develop hands-on skills in innovation and entrepreneurship.</li>
                    <li><span className='font-semibold'>Network</span>: Connect with peers, mentors, and industry professionals.</li>
                    <li><span className='font-semibold'>Showcase Your Work</span>: Present your prototype to a panel of judges.</li>
                </Ul>
            </Subhero>
            <Subhero image={nightImage} >
                <Subheading>What will I do as a member of the theHackLab?</Subheading>
                <Ul className='mt-4 text-lg'>
                    <li><span className='font-semibold'>Tackle a real-world challenge</span>: Work on a meaningful problem relevant to current industry or societal needs.</li>

                    <li><span className='font-semibold'>Develop a prototype solution</span>: Create and refine a tangible prototype over the semester.</li>

                    <li><span className='font-semibold'>Access workshops and mentorship</span>: Receive guidance and support through specialized workshops and expert mentors.</li>
                </Ul>
            </Subhero>
            <div className='py-8 pt-18 lg:pt-32 bg-dark text-light'>
                <div className='container flex flex-col items-center justify-center mx-auto'>
                    <Heading className='text-center'>Ready to join the theHackLab?</Heading>
                    <Text className='mt-4 text-center'>Applications are now closed. Don't worry, they will open again in February.</Text>
                    <PrimaryButton onClick={handleApply} className='mt-4'>Apply Now</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

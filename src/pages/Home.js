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

export default function Home() {

    return (
        <div>
            <Hero></Hero>
            <Subhero>
                <Subheading>What is the Hacklab?</Subheading>
                <Text className='mt-2'>
                    HackLab is a student-driven innovation hub at Bocconi. We bring together students from technical and business backgrounds to:
                </Text>
                <Ul className='mt-4 text-lg font-semibold'>
                    <li>Tackle real-world challenges</li>
                    <li>Develop prototypes over a semester</li>
                    <li>Collaborate in diverse, interdisciplinary teams</li>
                </Ul>
                <Text className='mt-4'>Join us to turn ideas into impactful solutions!</Text>
                <PrimaryButton className='mt-4'>Apply Now</PrimaryButton>
            </Subhero>
            <Subhero reverse>
                <Subheading>Why should I join the Hacklab?</Subheading>
                <Text className='mt-2'>Unlock unique opportunities:</Text>
                <Ul className='mt-4 text-lg'>
                    <li><span className='font-semibold'>Collaborate</span>: Work in teams with both tech and business students.</li>
                    <li><span className='font-semibold'>Gain Experience</span>: Develop hands-on skills in innovation and entrepreneurship.</li>
                    <li><span className='font-semibold'>Network</span>: Connect with peers, mentors, and industry professionals.</li>
                    <li><span className='font-semibold'>Showcase Your Work</span>: Present your prototype to a panel of judges.</li>
                </Ul>
            </Subhero>
            <Subhero >
                <Subheading>What will I do as a member of the HackLab?</Subheading>
                <Ul className='mt-4 text-lg'>
                    <li><span className='font-semibold'>Tackle a real-world challenge</span>: Work on a meaningful problem relevant to current industry or societal needs.</li>

                    <li><span className='font-semibold'>Develop a prototype solution</span>: Create and refine a tangible prototype over the semester.</li>

                    <li><span className='font-semibold'>Access workshops and mentorship</span>: Receive guidance and support through specialized workshops and expert mentors.</li>
                </Ul>
            </Subhero>
            <div className='py-8 pt-32 bg-dark text-light'>
                <div className='container flex flex-col items-center justify-center mx-auto'>
                    <Heading className='text-center'>Ready to join the Hacklab?</Heading>
                    <Text className='mt-4'>Applications are now open for the Fall 2024 semester.</Text>
                    <PrimaryButton className='mt-4'>Apply Now</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

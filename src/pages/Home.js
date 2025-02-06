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
import piSchoolLogo from '../assets/pi_school_logo.PNG'
import b4iLogo from '../assets/b4i_logo.PNG'
import bcgx_logo from '../assets/bcgx_logo.png'
import bg from '../assets/hl.png'
import ph1 from '../assets/ph1.jpeg'
import ph2 from '../assets/ph2.jpeg'
import ph3 from '../assets/ph3.jpeg'
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const {handleApply}=useApply()
    const navigate=useNavigate()

    return (
        <div className='pb-16'>
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
            <Subhero image={ph1} index={0}>
                <Subheading>What is the theHackLab's startup challenge?</Subheading>
                <Text className='mt-2'>
                    It's a semester-long innovation competition where student teams develop innovative software solutions to tackle real-world challenges.</Text>
                <Ul className='mt-4 text-lg'>
                    <li><span className='font-semibold'>Build something impactful</span> - Develop solutions to real problems designing a product with market potential.</li>
                    <li><span className='font-semibold'>Gain hands-on experience</span> - Design, develop, and launch your fully functional software solution.</li>
                    <li><span className='font-semibold'>Showcase your work </span> - Pitch your solution to industry experts on <span className='font-semibold'>Pitch Day</span>.</li>
                </Ul>
                {/* <Text className='mt-2'>
                    theHackLab is a student-driven innovation hub at Bocconi. We bring together students from technical and business backgrounds to:
                </Text>
                <Ul className='mt-4 text-lg font-semibold'>
                    <li>Tackle real-world challenges</li>
                    <li>Develop prototypes over a semester</li>
                    <li>Collaborate in diverse, interdisciplinary teams</li>
                </Ul> */}
            </Subhero>
            <Subhero reverse image={ph2} index={1}>
                <Subheading>Why should I join the theHackLab?</Subheading>
                <Text className='mt-2'>This is more than just a competition—it's a launchpad for your skills and future opportunities.</Text>
                <Ul className='mt-4 text-lg'>
                    <li><span className='font-semibold'>Collaborate across disciplines</span> - Team up with tech and business students.</li>
                    <li><span className='font-semibold'>Learn from experts</span> - Get mentorship from industry leaders.</li>
                    <li><span className='font-semibold'>⁠Expand your network</span> - Connect with peers, professionals, and potential employers.</li>
                </Ul>
                <Text className='mt-4 text-center lg:mt-16'>Join us to turn ideas into impactful solutions!</Text>
                <div className='flex items-center justify-center w-full'>
                    <PrimaryButton onClick={handleApply} className='mx-auto mt-4'>Join the challenge!</PrimaryButton>
                </div>
            </Subhero>
            <Subhero image={ph3} index={2}>
                <Subheading>Can I join theHackLab Team?</Subheading>
                <Text className='mt-2'>Yes! We’re always looking for new members of theHackLab team. Choose a role that fits your skills:</Text>
                <Ul className={'mt-4 text-lg'}>
                    <li><span className='font-semibold'>Digital</span> - Drive content creation, social media, and event promotion.</li>
                    <li><span className='font-semibold'>IT</span> - Help develop and maintain our technical infrastructure.</li>
                    <li><span className='font-semibold'>Mentorship</span> - Guide and support project teams with your expertise.</li>
                </Ul>
                {/* <Text className='mt-2'>No matter your background, there's a place for you in theHackLab!</Text> */}
                <Text className='mt-4 text-center lg:mt-16'>Help us make theHackLab better!</Text>
                <div className='flex flex-col items-center justify-around w-full gap-2 mt-4 lg:flex-row'>
                    <SecondaryButton onClick={() => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSeb6UPwLdChXQ9I2ZWk1EiK-NYVUIgIQllauI8ZKhnRXiV-Ow/viewform?usp=header'} className='mx-auto lg:mt-4 !w-full'>Join Digital</SecondaryButton>
                    <SecondaryButton onClick={() => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLScywAibOLGgJYNk-KHiGQdvSdJ_0NQdATpc1C27lASyxHPP6Q/viewform?usp=header'} className='mx-auto lg:mt-4 !w-full'>Join IT</SecondaryButton>
                    <SecondaryButton onClick={() => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSep7SM4O9LreJiHum-UQ55DV-41Xx1C3nknBnTlMzWdQ3jPug/viewform?usp=header'} className='mx-auto lg:mt-4 !w-full'>Become a mentor</SecondaryButton>
                </div>
            </Subhero>
            <div className='relative flex flex-col items-center justify-center w-full py-8 mx-auto rounded-lg lg:w-1/2 pt-18 lg:pt-32 bg-dark bg-opacity-40 bg-blur text-light'>
                <Subheading>Judges have come from:</Subheading>
                <div className='flex flex-col items-center justify-center w-full gap-16 p-4 lg:flex-row'>
                    <Link to='https://www.b4i.unibocconi.it/'><img src={b4iLogo} alt='b4i Logo' className='w-32' /></Link>
                    <Link to='https://picampus-school.com/'><img src={piSchoolLogo} alt='piSchool Logo' className='w-64' /></Link>
                    <Link to='https://www.bcg.com/x'><img src={bcgx_logo} alt='bcg Logo' className='w-64' /></Link>
                </div>
                {/* <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-row-reverse items-center justify-center w-full'>
                    <div className='flex flex-col items-center justify-center w-full h-full px-4 opacity-50 text-light'>
                        <img src={bg} alt='bg' className='object-contain w-full h-full' />
                    </div>
                </div> */}
            </div>
            <div className='py-8 pt-18 lg:pt-32 text-light'>
                <div className='container flex flex-col items-center justify-center mx-auto'>
                    <Heading className='text-center'>Ready to join the theHackLab?</Heading>
                    <Text className='mt-4 text-center'>Applications are now open for the Spring 2025 semester!</Text>
                    <PrimaryButton onClick={handleApply} className='mt-4'>Join the challenge!</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

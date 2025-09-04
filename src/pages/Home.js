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
import piSchoolLogo from '../assets/sponsors/pi_school_logo.PNG'
import b4iLogo from '../assets/sponsors/b4i_logo.PNG'
import bcgxLogo from '../assets/sponsors/bcgx_logo.png'
import chapeauLogo from '../assets/sponsors/chapeau_logo.png'
import sdaBocconiLogo from '../assets/sponsors/sda_bocconi_logo.png'
import kymaTeamLogo from '../assets/sponsors/kyma_team.svg'
import khHoldingsLogo from '../assets/sponsors/kh_holdings_logo.png'
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
            }} className='grid grid-cols-1 gap-6 my-12 w-full lg:grid-cols-3'>
                <div className='flex flex-col gap-6 justify-center items-center w-4/5'>
                    <div className='flex justify-center items-center w-24 h-24 bg-opacity-20 rounded-full bg-dark-200 aspect-square'>
                        <Icon icon='code' className='text-6xl text-dark' />
                    </div>
                    <Heading>Code</Heading>
                    <Text className='text-center'>Develop hands-on skills in innovation and entrepreneurship.</Text>
                </div>
                <div className='flex flex-col gap-6 justify-center items-center w-4/5'>
                    <div className='flex justify-center items-center w-24 h-24 bg-opacity-20 rounded-full bg-dark-200 aspect-square'>
                        <Icon icon='people-fill' className='text-5xl text-dark' />
                    </div>
                    <Heading>Connect</Heading>
                    <Text className='text-center'>Collaborate with peers, mentors, and industry professionals.</Text>
                </div>
                <div className='flex flex-col gap-6 justify-center items-center w-4/5'>
                    <div className='flex justify-center items-center w-24 h-24 bg-opacity-20 rounded-full bg-dark-200 aspect-square'>
                        <Icon icon='rocket-takeoff-fill' className='mt-1 mr-0.5 text-5xl text-dark' />
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
                <div className='flex justify-center items-center w-full'>
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
                <div className='flex flex-col gap-2 justify-around items-center mt-4 w-full lg:flex-row'>
                    <SecondaryButton onClick={() => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSeb6UPwLdChXQ9I2ZWk1EiK-NYVUIgIQllauI8ZKhnRXiV-Ow/viewform?usp=header'} className='mx-auto lg:mt-4 !w-full'>Join Digital</SecondaryButton>
                    <SecondaryButton onClick={() => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLScywAibOLGgJYNk-KHiGQdvSdJ_0NQdATpc1C27lASyxHPP6Q/viewform?usp=header'} className='mx-auto lg:mt-4 !w-full'>Join IT</SecondaryButton>
                    <SecondaryButton onClick={() => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSep7SM4O9LreJiHum-UQ55DV-41Xx1C3nknBnTlMzWdQ3jPug/viewform?usp=header'} className='mx-auto lg:mt-4 !w-full'>Become a mentor</SecondaryButton>
                </div>
            </Subhero>
            <div className='flex relative flex-col justify-center items-center py-8 mx-auto w-full bg-opacity-40 rounded-lg lg:w-3/4 pt-18 lg:pt-32 bg-dark bg-blur text-light'>
                <Subheading>Judges have come from:</Subheading>
                <div className='grid grid-cols-4 gap-16 justify-center items-center p-4 w-full'>
                    <Link to='https://www.b4i.unibocconi.it/'><img src={b4iLogo} alt='b4i Logo' className='w-32' /></Link>
                    <Link to='https://picampus-school.com/'><img src={piSchoolLogo} alt='piSchool Logo' className='w-64' /></Link>
                    <Link to='https://www.bcg.com/x'><img src={bcgxLogo} alt='bcg Logo' className='w-64' /></Link>
                    <Link to='https://www.chapeaumedia.it/'><img src={chapeauLogo} alt='chapeau Logo' className='w-64' /></Link>
                    <Link to='https://www.sdabocconi.it/it/home'><img src={sdaBocconiLogo} alt='sda Logo' className='w-64' /></Link>
                    <Link to='https://www.kymateam.com/'><img src={kymaTeamLogo} alt='kyma Logo' className='w-64' /></Link>
                    <Link to='https://www.khholdings.eu/'><img src={khHoldingsLogo} alt='kh Holdings Logo' className='px-8 w-64' /></Link>
                </div>
                {/* <div className='flex absolute top-0 right-0 bottom-0 left-0 flex-row-reverse justify-center items-center w-full'>
                    <div className='flex flex-col justify-center items-center px-4 w-full h-full opacity-50 text-light'>
                        <img src={bg} alt='bg' className='object-contain w-full h-full' />
                    </div>
                </div> */}
            </div>
            <div className='py-8 pt-18 lg:pt-32 text-light'>
                <div className='container flex flex-col justify-center items-center mx-auto'>
                    <Heading className='text-center'>Ready to join the theHackLab?</Heading>
                    <Text className='mt-4 text-center'>Applications are now open for the Spring 2025 semester!</Text>
                    <PrimaryButton onClick={handleApply} className='mt-4'>Join the challenge!</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

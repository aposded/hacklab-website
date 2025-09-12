import React from 'react'
import Navbar from '../sections/Navbar'
import PrimaryButton from '../components/Buttons/PrimaryButton'
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
import ph1 from '../assets/S25_PIC_5.JPG'
import ph2 from '../assets/ph2.jpeg'
import ph3 from '../assets/ph3.jpeg'

export default function Home() {
    const {applyFinance,applyEntrepreneurship}=useApply()

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
                <Subheading>Our Two Flagship Challenges</Subheading>
                <Text className='mt-2'>
                    Each semester, we organize two distinct challenges that bring together students from diverse backgrounds to tackle real-world problems in finance and entrepreneurship. Choose the track that matches your interests and skills.</Text>
                <Ul className='mt-4 text-lg'>
                    <li><span className='font-semibold'>Markets Challenge</span> - Develop innovative fintech solutions, analyze market data, and create financial models that address industry challenges.</li>
                    <li><span className='font-semibold'>Entrepreneurship Challenge</span> - Build startup ideas from concept to prototype, focusing on product development and business strategy.</li>
                    <li><span className='font-semibold'>Expert mentorship</span> - Get guidance from industry professionals in both finance and entrepreneurship sectors.</li>
                </Ul>
            </Subhero>
            <Subhero reverse image={ph2} index={1}>
                <Subheading>Why should I join the theHackLab?</Subheading>
                <Text className='mt-2'>Whether you're passionate about finance or entrepreneurship, our challenges offer the perfect platform to develop your skills and make meaningful connections.</Text>
                <Ul className='mt-4 text-lg'>
                    <li><span className='font-semibold'>Collaborate across disciplines</span> - Team up with finance, business, and tech students from different backgrounds.</li>
                    <li><span className='font-semibold'>Learn from experts</span> - Get mentorship from industry leaders in finance and entrepreneurship.</li>
                    <li><span className='font-semibold'>⁠Expand your network</span> - Connect with peers, professionals, and potential employers in both sectors.</li>
                </Ul>
                <Text className='mt-4 text-center lg:mt-16'>Join us to turn ideas into impactful solutions!</Text>
                <div className='flex flex-wrap justify-center items-center w-full gap-2 mt-4'>
                    <PrimaryButton onClick={applyFinance}>Apply to Markets</PrimaryButton>
                    <PrimaryButton onClick={applyEntrepreneurship}>Apply to Startup</PrimaryButton>
                </div>
            </Subhero>
            <Subhero image={ph3} index={2}>
                <Subheading>Can I join theHackLab Team?</Subheading>
                <Text className='mt-2'>Yes! We're always looking for passionate students to join our team. Whether you're interested in digital marketing, technical development, mentorship, or other areas, there's a place for you at theHackLab.</Text>
                <Ul className={'mt-4 text-lg'}>
                    <li><span className='font-semibold'>Digital</span> - Drive content creation, social media, and event promotion.</li>
                    <li><span className='font-semibold'>IT</span> - Help develop and maintain our technical infrastructure.</li>
                    <li><span className='font-semibold'>Mentorship</span> - Guide and support project teams with your expertise.</li>
                    <li><span className='font-semibold'>Operations</span> - Support event planning, logistics, and community management.</li>
                </Ul>
                <Text className='mt-4 text-center lg:mt-16'>Help us make theHackLab better!</Text>
                <div className='flex justify-center items-center w-full'>
                    <PrimaryButton onClick={() => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSeb6UPwLdChXQ9I2ZWk1EiK-NYVUIgIQllauI8ZKhnRXiV-Ow/viewform?usp=header'} className='mx-auto mt-4'>Join the Team</PrimaryButton>
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
                    <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
                        <PrimaryButton onClick={applyFinance}>Apply to Markets</PrimaryButton>
                        <PrimaryButton onClick={applyEntrepreneurship}>Apply to Startup</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

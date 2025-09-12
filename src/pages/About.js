import React from 'react'
import Heading from '../components/Text/Heading'
import Text from '../components/Text/Text'
import Ul from '../components/Lists/Ul'
import Subheading from '../components/Text/Subheading'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import {useApply} from '../hooks/useApply'
import Subhero from '../sections/Subhero'
import ph1 from '../assets/S25_PIC_3.JPG'
import ph2 from '../assets/S25_PIC_6.JPG'
import ph3 from '../assets/S25_PIC_2.JPG'


export default function About() {
    const {applyFinance,applyEntrepreneurship}=useApply()


    return (
        <div className='pb-16'>
            <Heading className='py-12 w-full text-center'>About Us</Heading>
            <div className='mx-auto max-w-4xl text-justify'>
                <Text className='mt-12'>Welcome to theHackLab Bocconi Students, a dynamic and innovative student association that organizes two flagship challenges each semester: Finance and Entrepreneurship. Whether you're passionate about financial innovation or building the next big startup, we're here to help you grow, connect, and make an impact.</Text>

                <Subheading className='mt-8'>Mission</Subheading>
                <Text>At theHackLab, our mission is to empower students through hands-on experience in finance and entrepreneurship while fostering a collaborative learning environment. We believe in the power of learning by doing, connecting students with industry professionals, and providing practical skills that bridge academic knowledge with real-world applications in both financial services and startup ecosystems.</Text>
            </div>

            <Subhero image={ph1} index={0}>
                <Subheading>Markets Challenge</Subheading>
                <Text className='mt-2'>
                    Our Markets Challenge brings together students passionate about financial innovation, data analysis, and fintech solutions. Teams work on real-world financial problems using cutting-edge tools and methodologies.
                </Text>
                <Ul className='mt-4 text-lg'>
                    <li><span className='font-semibold'>Financial Modeling</span> - Build sophisticated models to analyze market trends and investment opportunities.</li>
                    <li><span className='font-semibold'>Fintech Innovation</span> - Develop digital solutions for banking, payments, and financial services.</li>
                    <li><span className='font-semibold'>Industry Mentorship</span> - Learn from professionals at leading financial institutions and fintech companies.</li>
                </Ul>
            </Subhero>

            <Subhero reverse image={ph2} index={1}>
                <Subheading>Entrepreneurship Challenge</Subheading>
                <Text className='mt-2'>
                    Our Entrepreneurship Challenge focuses on building innovative startups from concept to prototype. Students develop business ideas, create viable products, and learn essential entrepreneurial skills.
                </Text>
                <Ul className='mt-4 text-lg'>
                    <li><span className='font-semibold'>Product Development</span> - Design and build minimum viable products (MVPs) using modern technologies.</li>
                    <li><span className='font-semibold'>Business Strategy</span> - Develop comprehensive business models, market analysis, and go-to-market strategies.</li>
                    <li><span className='font-semibold'>Startup Mentorship</span> - Get guidance from successful entrepreneurs and venture capital professionals.</li>
                </Ul>
            </Subhero>

            <Subhero image={ph3} index={2}>
                <Subheading>Learning & Development</Subheading>
                <Text className='mt-2'>
                    Beyond our two main challenges, we provide comprehensive learning opportunities through workshops, networking events, and skill-building sessions for both finance and entrepreneurship tracks.
                </Text>
                <Ul className='mt-4 text-lg'>
                    <li><span className='font-semibold'>Technical Workshops</span> - Learn financial modeling tools, programming languages, and product development frameworks.</li>
                    <li><span className='font-semibold'>Industry Networking</span> - Connect with professionals from finance, consulting, and startup ecosystems.</li>
                    <li><span className='font-semibold'>Cross-Track Collaboration</span> - Opportunities to work with students from both finance and entrepreneurship challenges.</li>
                </Ul>
            </Subhero>
            <div className='py-8 pt-18 lg:pt-32 bg-dark text-light'>
                <div className='container flex flex-col justify-center items-center mx-auto'>
                    <Heading className='text-center'>Ready to join theHacklab?</Heading>
                    <Text className='mt-4 text-center'>Applications are now open for the Spring 2025 semester!</Text>
                    <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
                        <PrimaryButton onClick={applyFinance}>Apply to Markets</PrimaryButton>
                        <PrimaryButton onClick={applyEntrepreneurship}>Apply to Entrepreneurship</PrimaryButton>
                    </div>
                </div>
            </div>

        </div>
    )
}

import React from 'react'
import Heading from '../components/Text/Heading'
import Text from '../components/Text/Text'
import Ul from '../components/Lists/Ul'
import Subheading from '../components/Text/Subheading'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import {useApply} from '../hooks/useApply'

export default function About() {
    const {handleApply}=useApply()


    return (
        <div className='max-w-4xl mx-auto text-justify'>
            <Heading className='w-full py-12 text-center'>About Us</Heading>
            <Text className='mt-12'>Welcome to theHackLab Bocconi Students, a dynamic and innovative student association dedicated to nurturing a community of passionate software developers. Whether you're an experienced coder or just starting, we're here to help you grow, connect, and make an impact.</Text>

            <Subheading className='mt-8'>Mission</Subheading>
            <Text>At theHackLab, our mission is to empower students by providing hands-on experience in software development and fostering a collaborative learning environment. We believe in the power of learning by doing, and our goal is to help our members develop not only their technical skills but also their social and professional abilities. By bridging the gap between experienced coders and newcomers, we aim to create a supportive community where everyone can thrive.</Text>

            <Subheading className='mt-8'>Activities</Subheading>
            <Text>We bring our mission and vision to life through a variety of engaging activities, including:</Text>
            <Ul className='mt-4 text-lg'>
                <li><span className='font-semibold'>Semester-Long Projects</span>: Our flagship activity where teams of students work together to develop software solutions addressing real-world challenges.</li>

                <li><span className='font-semibold'>Collaborative Workshops</span>: We host coding challenges, games, and development workshops that encourage teamwork, creativity, and problem-solving in a fun, competitive environment.</li>

                <li><span className='font-semibold'>Talks and Conferences</span>: We organize talks, interviews, and conferences featuring industry experts, external professors, and company representatives. These events are open to all Bocconi students and provide insights to the challenge of each semester.</li>
            </Ul>
            <div className='py-8 pt-18 lg:pt-32 bg-dark text-light'>
                <div className='container flex flex-col items-center justify-center mx-auto'>
                    <Heading className='text-center'>Ready to join theHacklab?</Heading>
                    <Text className='mt-4 text-center'>Applications are now open for the Fall 2024 semester.</Text>
                    <PrimaryButton onClick={handleApply} className='mt-4'>Apply Now</PrimaryButton>
                </div>
            </div>

        </div>
    )
}

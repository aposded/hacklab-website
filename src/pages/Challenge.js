import React from 'react'
import Heading from '../components/Text/Heading'
import Text from '../components/Text/Text'
import Ul from '../components/Lists/Ul'
import Subheading from '../components/Text/Subheading'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import {useApply} from '../hooks/useApply'

export default function Challenge() {
    const {handleApply}=useApply()


    return (
        <div className='max-w-4xl mx-auto text-justify'>
            <Heading className='w-full py-12 text-center'>The Challenge</Heading>
            <Text className='mt-12'>In today’s market, customers have endless choices. They can easily switch from
                one service or product to another. This constant change is a challenge for every
                business. We invite you to explore this challenge by choosing one of two tracks.
                Each track offers a unique way to tackle the problem of customer loss, also known
                as churn. Join a team of 4 to 5 members and let your ideas make a real impact.
                You can choose your own teammates or get matched based on your interests.</Text>

            <Subheading className='mt-8 mb-4'>Data Track</Subheading>
            <Text>Your mission is to uncover the hidden business opportunities behind customer
                loss. Imagine a situation where understanding why customers leave could lead to
                better products and improved services. You will dive into real-world information
                about customer behaviors and feedback to see beyond the numbers. Your goal is
                not just to predict who might leave, but to tell a story about what drives their
                decisions.</Text>
            <Text className='mt-4'>
                Using a machine learning and AI approach, you will design an algorithm that
                brings clarity to the mystery of churn. As you work through the challenge, your
                insights will help businesses keep their customers happy and loyal.</Text>
            <Subheading className='mt-8 mb-4'>Entrepreneur Track</Subheading>
            <Text>Find a sector where customers often change their minds and switch services.
                Your challenge is to design a product or service—from a mobile app to a web
                platform—that uses creative ideas to attract and keep users.</Text>
            <Text className='mt-4'>
                Think about how you can use elements of fun and engagement to make your
                solution unique. Your product should not only capture attention but also offer real
                ways to measure and improve user satisfaction.</Text>

            <Subheading className='mt-8 mb-4'>Final Deliverables</Subheading>
            <Text><span className='font-semibold'>Final Deliverables</span>: At the end of the event, each team will present:</Text>
            <Ul className='pl-8 mt-4 text-lg'>
                <li><Text>A minimum viable product (MVP) or prototype.</Text></li>

                <li><Text>A pitch deck that outlines your business insights and the approach you
                    took to address churn.</Text></li>

                <li><Text>A clear presentation of your process, findings, and recommendations.</Text></li>
            </Ul>
            <Text className='mt-4'>
                If you love solving problems with data, exploring business challenges, or diving
                into new tech ideas, we want you on our team. Show what you're made of and
                make a real impact.
            </Text>
            <div className='py-8 pt-18 lg:pt-32 bg-dark text-light'>
                <div className='container flex flex-col items-center justify-center mx-auto'>
                    <Heading className='text-center'>Ready to join theHacklab?</Heading>
                    <Text className='mt-4 text-center'>Applications are now open for the Spring 2025 semester!</Text>
                    <PrimaryButton onClick={handleApply} className='mt-4'>Join the challenge!</PrimaryButton>
                </div>
            </div>

        </div>
    )
}

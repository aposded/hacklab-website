import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Heading from '../components/Text/Heading'
import Text from '../components/Text/Text'
import Subheading from '../components/Text/Subheading'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import {useApply} from '../hooks/useApply'
import lovableLogo from '../assets/sponsors/lovable_logo.png'

export default function Challenge() {
    const {applyFinance,applyEntrepreneurship}=useApply()
    const [selectedSemester,setSelectedSemester]=useState('Spring 26')

    const challengeData={
        'Fall 24': {
            theme: 'Community',
            tracks: [
                {
                    name: 'Entrepreneurship Challenge',
                    description: 'Build innovative products and services that connect people with shared interests. Teams will identify market opportunities in community building and develop comprehensive business solutions.',
                    details: 'Focus on creating user-centric products that solve real community building problems. Develop business models, conduct market research, and build minimum viable products that demonstrate clear value propositions.'
                }
            ]
        },
        'Spring 25': {
            theme: 'Customer Churn',
            tracks: [
                {
                    name: 'Data Challenge',
                    description: 'Focus on financial innovation and data-driven solutions. In Fall 2024, teams tackled customer churn analysis in financial services, developing predictive models and retention strategies.',
                    details: 'Using advanced analytics and machine learning, teams built sophisticated models to understand customer behavior patterns, predict churn probability, and recommend actionable retention strategies for financial institutions.'
                },
                {
                    name: 'Startup Challenge',
                    description: 'Build innovative products and services from concept to prototype. Teams identified market opportunities in customer retention and developed comprehensive business solutions.',
                    details: 'Focus on creating user-centric products that solve real retention problems. Develop business models, conduct market research, and build minimum viable products that demonstrate clear value propositions.'
                }
            ]
        },
        'Fall 25': {
            description: 'The Fall 2025 challenges will bring fresh perspectives to finance and entrepreneurship. Get ready for another semester of innovation across both tracks!',
            tracks: [
                {
                    name: 'Markets Challenge',
                    description: 'The Markets Challenge is a fast-paced trading competition where teams of four battle to build the best-performing portfolio. Over two high-intensity rounds, players will trade multiple asset classes while adapting to real-time shocks and surprises.',
                    details: 'Each team will analyze data, respond to breaking news, and make quick investment decisions across six different assets. From geopolitical turmoil to sudden macroeconomic shifts, the game will test both strategy and resilience under pressure. The top performers will advance to a final round, pitching their portfolio approach to judges for the ultimate win.'
                },
                {
                    name: 'Entrepreneurship Challenge',
                    description: 'Details will be announced soon'
                }
            ]
        },
        'Spring 26': {
            intro: 'Each semester, theHackLab organizes two distinct challenges that allow students to dive deep into either finance or entrepreneurship. Choose the track that aligns with your interests and career goals.',
            tracks: [
                {
                    name: 'Markets Challenge',
                    description: 'The Markets Challenge is a fast-paced trading competition where teams of four battle to build the best-performing portfolio. Over two high-intensity rounds, players will trade multiple asset classes while adapting to real-time shocks and surprises.',
                    details: 'Each team will analyze data, respond to breaking news, and make quick investment decisions across six different assets. From geopolitical turmoil to sudden macroeconomic shifts, the game will test both strategy and resilience under pressure. The top performers will advance to a final round, pitching their portfolio approach to judges for the ultimate win.'
                },
                {
                    name: 'Entrepreneurship Challenge',
                    description: 'Develop innovative products and services that address real-world problems and create meaningful value. Teams will identify market opportunities, design impactful solutions, and build comprehensive business concepts.',
                    details: 'Focus on creating user-centric products that solve practical problems. Participants are encouraged to explore different industries, conduct market research, design strong business models, and develop minimum viable products (MVPs) that clearly demonstrate their value proposition. This challenge has no predefined theme, allowing teams full freedom to explore ideas across any domain and pursue the problems they are most passionate about. The event is sponsored by Lovable, and teams will build their projects using the platform to rapidly prototype and develop their solutions.'
                }
            ],
            closing: "Whether you're passionate about finance, entrepreneurship, technology, or innovation, this is an opportunity to collaborate, experiment, and make a real impact with your ideas."
        }
    }

    const currentChallenge=challengeData[selectedSemester]

    return (
        <div className='mx-auto max-w-4xl text-justify'>
            <Heading className='py-12 w-full text-center'>The Challenge</Heading>

            {/* Semester Selection */}
            <div className='flex gap-4 justify-center mt-8 mb-12'>
                {Object.keys(challengeData).map((semester) => (
                    <button
                        key={semester}
                        onClick={() => setSelectedSemester(semester)}
                        className={`px-6 py-2 rounded-lg font-semibold transition-all ${selectedSemester===semester
                            ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            :'bg-primary text-white'
                            }`}
                    >
                        {semester}
                    </button>
                ))}
            </div>

            <div className='mb-8 text-center'>
                <Subheading className='mb-4'>{selectedSemester} Challenge</Subheading>
                {currentChallenge.theme&&<Text className='mb-4 text-lg font-semibold text-primary'>Theme: {currentChallenge.theme}</Text>}
            </div>

            <Text className='mt-12'>{currentChallenge.intro || 'Each semester, theHackLab organizes two distinct challenges that allow students to dive deep into either finance or entrepreneurship. Choose the track that aligns with your interests and career goals.'}</Text>

            {currentChallenge.tracks.length>0? (
                <>
                    {currentChallenge.tracks.map((track,index) => (
                        <div key={index}>
                            <Subheading className='mt-8 mb-4'>{track.name}</Subheading>
                            <Text>{track.description}</Text>
                            {track.details && <Text className='mt-4'>{track.details}</Text>}
                        </div>
                    ))}
                </>
            ):(
                <div className='flex flex-col justify-center items-center py-16'>
                    <Text className='text-xl text-center text-gray-600'>
                        Challenge details for {selectedSemester} will be announced soon.
                        Join our community to be the first to know when applications open!
                    </Text>
                </div>
            )}


            <Text className='mt-4'>
                {currentChallenge.closing || "Whether you're passionate about finance, entrepreneurship, or both, we want you on our team. Choose your track and make a real impact in your field of interest."}
            </Text>

            {selectedSemester === 'Spring 26' && (
                <div className='flex flex-col items-center mt-12 mb-8'>
                    <img src={lovableLogo} alt='Lovable' className='h-12 object-contain' />
                    <Link to='/challenge/resources' className='mt-6'>
                        <PrimaryButton>Resources</PrimaryButton>
                    </Link>
                </div>
            )}

            <div className='py-8 pt-18 lg:pt-32 bg-dark text-light'>
                <div className='container flex flex-col justify-center items-center mx-auto'>
                    <Heading className='text-center'>Ready to join theHacklab?</Heading>
                    <Text className='mt-4 text-center'>Applications are now open for the Fall 2025 semester!</Text>
                    <div className='flex flex-wrap justify-center items-center gap-2 mt-4'>
                        <PrimaryButton onClick={applyFinance}>Apply to Markets</PrimaryButton>
                        <PrimaryButton onClick={applyEntrepreneurship}>Apply to Startup</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

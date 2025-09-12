import React,{useState} from 'react'
import Text from '../components/Text/Text'
import Subhero from '../sections/Subhero'
import Subheading from '../components/Text/Subheading'
import Heading from '../components/Text/Heading'
import AcquaAltaLogo from '../assets/acquaalta.png'
import NexusLogo from '../assets/nexus.png'
import RemoireLogo from '../assets/remoire.png'
import ChurnDownForWhatLogo from '../assets/CDFW_S25.JPG'
import UniMarketLogo from '../assets/UM_S25.JPG'

export default function Projects() {
    const [selectedSemester,setSelectedSemester]=useState('Spring 25')

    const semesterData={
        'Fall 24': {
            theme: 'Community',
            themeDescription: 'Design innovative solutions that connect people with shared interests under the theme of Community.',
            projects: [
                {
                    name: 'AcquaAlta',
                    place: 'Winner',
                    logo: AcquaAltaLogo,
                    description: 'AcquaAlta is a digital application with an intuitive, user-friendly design that aggregates crowdsourced data about flooded areas during heavy rainfall in Milan. It empowers urban citizens to contribute collectively to safely navigate the city. The data collected on flooded areas can be used to train predictive machine learning models and inform infrastructure improvements for a more adaptive and resilient future.',
                    reverse: true
                },
                {
                    name: 'Remoire',
                    place: '2nd Place',
                    logo: RemoireLogo,
                    description: 'Remoire is a cutting-edge app designed to transform the way people engage with fashion and connect through their clothing choices. By combining digital wardrobe management, social interaction, and fashion inspiration, Remoire serves as a one-stop platform for style enthusiasts and casual users alike.',
                    reverse: false
                },
                {
                    name: 'Nexus',
                    place: '3rd Place',
                    logo: NexusLogo,
                    description: 'Nexus is a mobile application that helps students living in Milan to connect with each other and explore the city. It allows students to easily organize their study spots and explore new ones, while empowering them to meet new like-minded students that have shared interests and hobbies.',
                    reverse: true
                }
            ]
        },
        'Spring 25': {
            theme: 'Customer Churn',
            themeDescription: 'Design innovative solutions that address customer churn.',
            projects: [
                {
                    name: 'Churn Down For What',
                    place: 'Winner of Data Challenge',
                    logo: ChurnDownForWhatLogo,
                    description: 'Churn Down For What developed precise machine learning models to predict customer churn and recommend tailored retention strategies. Their solution helped companies reduce churn-related losses by targeting the right users with the right interventions.'
                },
                {
                    name: 'UniMarket',
                    place: 'Winner of Startup Challenge',
                    logo: UniMarketLogo,
                    description: 'UniMarket is a trusted, student-verified marketplace designed to make buying and selling goods and services on campus safe, affordable, and community-driven. By leveraging university email verification, hyper-local filters, and future features like gamification and loyalty rewards, UniMarket fosters a vibrant, scalable ecosystem for students, alumni, and faculty'
                }
            ]
        }
    }

    const currentData=semesterData[selectedSemester]

    return (
        <div className='flex flex-col justify-center items-center pb-12 w-full'>
            <Heading className='lg:pt-16'>Past Projects</Heading>

            {/* Semester Selection */}
            <div className='flex gap-4 mt-8 mb-8'>
                {Object.keys(semesterData).map((semester) => (
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

            <div className='flex justify-center items-center pt-8 pb-4 w-full lg:pt-16 lg:pb-16 lg:w-1/2 text-light'>
                <Text className='px-4 text-xl italic border-l border-white lg:text-2xl !text-left'>
                    "{currentData.themeDescription||''}" <br /><br />
                    {currentData.theme!=='TBD'? `Theme of ${selectedSemester} Challenge`:`${selectedSemester} Challenge`}
                </Text>
            </div>

            {currentData.projects.length>0? (
                currentData.projects.map((project,index) => (
                    <Subhero key={project.name} image={project.logo} index={index} reverse={project.reverse}>
                        <Subheading>{project.place} - {project.name}</Subheading>
                        <Text className='mt-2 !leading-relaxed'>{project.description}</Text>
                    </Subhero>
                ))
            ):(
                <div className='flex flex-col justify-center items-center py-16'>
                    <Text className='text-xl text-center text-gray-600'>
                        Projects for {selectedSemester} will be showcased here after the challenge concludes.
                    </Text>
                </div>
            )}
        </div>
    )
}

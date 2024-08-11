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
import Columns from '../sections/Columns'
import MobileNavbar from '../sections/MobileNavbar'

export default function Home() {

    return (
        <div>
            <Navbar />
            <MobileNavbar />
            <PrimaryButton>Primary</PrimaryButton>
            <SecondaryButton>Secondary</SecondaryButton>
            <Heading>Heading</Heading>
            <Subheading>Subheading</Subheading>
            <Text>Text</Text>
            <Link to='/hello'>Link</Link>
            <Ol>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </Ol>
            <Ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </Ul>
            <Columns data={[{title: 'Hi',description: 'Lorem ipsum'},{},{}]} heading='Columns' />
        </div>
    )
}

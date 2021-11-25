import React from 'react'
import Button from './Button'
import TextSection from './Heading'





export const HeroSection = () => {
    return (
            <TextSection>
                <h1>Take care of yours <br /> family's <span type="danger">health.</span></h1>
                <p>All in one destination for COVID-19 health queries. <br /> Consult 10,000+ health workers about your concerns.</p>
                <Button type="danger">Get Started</Button>
            </TextSection>
    )
}

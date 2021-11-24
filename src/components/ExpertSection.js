import React from 'react'
import { TwoDivSection } from '../styles/TwoDiv.Section'
import { TextSection } from './HeroSection'
import { Button } from '../styles/Button'
import styled from 'styled-components'
import ExpertUpperBoxSection from './ExpertUpperBoxSection'
import Doctor from "../images/doctor.png"
const ExpertWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 90px;
`
const DoctorSection = styled.div `
    width: 50%;
`

const ExpertSection = () => {
    return (
        <ExpertWrapper>
            <ExpertUpperBoxSection />
        <TwoDivSection>
            <TextSection>
                <h2>Talk to <span>experts.</span></h2>
                <p>Book appointments or submit queries into thousands of <br /> forums concerning health issues and prevention <br /> against noval Corona Virus.</p>
                <Button>Features</Button>
            </TextSection>
            <DoctorSection><img src={Doctor} alt="" /></DoctorSection>
        </TwoDivSection>
        </ExpertWrapper>
    )
}

export default ExpertSection

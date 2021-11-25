import React from 'react'
import styled from 'styled-components'
import TextSection from './Heading'
import { HealthCareCards } from './HealthCareCard'
import HealthBoxesBg from "../images/healthcareboxes.png"
const HealthCareWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    grid-gap: 80px;
`
const ThreeCards= styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    background: url(${HealthBoxesBg}) no-repeat;
    min-height: 371px;
    background-position: center;
    background-size: contain;
    flex-wrap: wrap;
    grid-gap: 24px;
`




const HealthCare = () => {
    return (
        <HealthCareWrapper>
            <TextSection>
            <h2> <span type="blue">Healthcare </span> at your Fingertips.</h2>
            <p>Bringing premium healthcare features to your fingertips. User friendly mobile platform to <br /> bring healthcare to your fingertips. Signup and be a part of the new health culture.</p>
            </TextSection>
            <ThreeCards>
                <HealthCareCards />
            </ThreeCards>
        </HealthCareWrapper>
    )
}

export default HealthCare

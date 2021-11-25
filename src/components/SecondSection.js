import React from 'react'
import { TwoDivSection } from "../styles/TwoDiv.Section"
import Appimg from '../images/featuresSignup.png'
import styled from "styled-components";
import Button from './Button'
import TextSection from './Heading';
const LeftSideApp = styled.div `
    display: inline-block;
`


const SecondSection = () => {
    return (
             <TwoDivSection>
                <LeftSideApp><img src={Appimg} alt="App" /></LeftSideApp>
                <TextSection>
                    <h2>Stay safe with <br /> Go <span>Corona.</span></h2>
                    <p>24x7 Support and user friendly mobile platform to bring <br /> healthcare to your fingertips. Signup and be a part of <br /> the new health culture.</p>
                    <Button type="danger">Features</Button>
                </TextSection>
            </TwoDivSection>
    )
}

export default SecondSection

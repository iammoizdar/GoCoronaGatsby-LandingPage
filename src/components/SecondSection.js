import React from 'react'
import { TwoDivSection } from "../styles/TwoDiv.Section"
import Appimg from '../images/featuresSignup.png'
import styled from "styled-components";
import { Button } from '../styles/Button'
const LeftSideApp = styled.div `
    width: 50%;
`
const RightSide = styled.div `
    width: 50%;
    grid-gap: 16px;
    display: flex;
    flex-direction: column;
    h2{
        font-size: 44px;
        font-weight: bold;
    }
    p{
        font-size: 13px;
        color: #616161;
    }
    span{
        color: ${({theme})=> theme.spans.color2};
    }
`

const SecondSection = () => {
    return (
             <TwoDivSection>
                <LeftSideApp><img src={Appimg} alt="App" /></LeftSideApp>
                <RightSide>
                    <h2>Stay safe with <br /> Go <span>Corona.</span></h2>
                    <p>24x7 Support and user friendly mobile platform to bring <br /> healthcare to your fingertips. Signup and be a part of <br /> the new health culture.</p>
                    <Button>Features</Button>
                </RightSide>
            </TwoDivSection>
    )
}

export default SecondSection

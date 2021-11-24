import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button'

 export const TextSection = styled.div`
    display: flex;
    /* width: 50%; */
    flex-direction: column;
    grid-gap: 16px;
    h1,h2{
        font-size: 44px;
        font-weight: bold;
    }
 
    span{
        color: ${({theme})=> theme.spans.color1};
    }
    p{
        font-size: 13px;
        color: #616161;
        letter-spacing: 1px;
    }
`




export const HeroSection = () => {
    return (
            <TextSection>
                <h1>Take care of yours <br /> family's <span>health.</span></h1>
                <p>All in one destination for COVID-19 health queries. <br /> Consult 10,000+ health workers about your concerns.</p>
                <Button>Get Started</Button>
            </TextSection>
    )
}

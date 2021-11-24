import React from 'react'
import styled from 'styled-components'
import UserSymptomLogo from '../images/Symptomlogo.png'


const CardWrapper= styled.div`
    display: flex;
    flex-direction: column;
    width: 278px;
    height: 276px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #FFFFFF;
box-shadow: 0px 4px 18px rgba(88, 126, 236, 0.18);
border-radius: 8px;
`
const UsersLogo= styled.div`
    width: 100%;
`


// FUNCTIONS

export function HealthCareCards (){
    return(
        <>

        <HealthCareCard
        Cards ={
            {
                logo: {UserSymptomLogo},
                name: "Symptom Checker",
                Text: "Check if you are infected by COVID-19 with our Symptom Checker"
            }
        }
        />
        <HealthCareCard
        Cards ={
            {
                logo: {UserSymptomLogo},
                name: "24x7 Medical support",
                Text: "Consult with 10,000+ health workers about your concerns."
            }
        }
        />
        <HealthCareCard
        Cards ={
            {
                logo: {UserSymptomLogo},
                name: "Conditions",
                Text: "Bringing premium healthcare features to your fingertips."
            }
        }
        />
        </>
    )
}







const HealthCareCard = (props) => {
    return (
       <CardWrapper>
           <UsersLogo>
           <img src={props.Cards.logo} alt="Userlogo"/>
           </UsersLogo>
           <h3>{props.Cards.name}</h3>
           <p>{props.Cards.Text}</p>
        </CardWrapper>
    )
}

export default HealthCareCard

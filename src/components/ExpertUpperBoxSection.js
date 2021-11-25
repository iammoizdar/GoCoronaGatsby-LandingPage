import React from "react"
import styled from "styled-components"
import Boxes from"../images/Boxes.png"
import { device } from "../styles/Responsive"
const BoxWrapper = styled.div `
    width: 100%;
    height: 200px;
    background: url(${Boxes}) no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-size: contain;
`
const InnerBox = styled.div`
    width: 654px;
    height: 117px;
    background: #fff;
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 2px 24px 0px rgba(88, 126, 236, 15%);

`
const Userbox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  h4{
      font-size: 36px;
      color: #EC5863;
  }
  span{
      font-size: 12px;
      font-weight: bold;
      color: #000;
      letter-spacing: 3px;
      text-transform: uppercase;
      padding-top: 8px;
  }
  
     @media ${device.mobileL} { 
   h4{
      font-size: 23px;  }
      span{
          font-size: 8px;
          letter-spacing: 2px;
      }
  }
`
function UsersNames(props) {
  return (<Userbox>
  <h4>{ props.Names.User }</h4>
  <h4>{ props.Names.Countries }</h4>
  <h4>{ props.Names.Medicalexperts }</h4>
   </Userbox> )
}
function Caption(props) {
  return (<Userbox>
  <span>{ props.Info.Person }</span>
  <span>{ props.Info.State }</span>
  <span>{ props.Info.Experts }</span>
   </Userbox> )
}


const ExpertUpperBoxSection = () => {
    const UsersNamesinfo = { User: "2m", Countries: "78", Medicalexperts:"10,000+"};
    const CaptionInfotext = { Person: "Users", State: "Countries", Experts:"Medical experts"};
    return (
        <BoxWrapper>
            <InnerBox>
              <UsersNames Names={UsersNamesinfo}/>
              <Caption Info={CaptionInfotext}/>
            </InnerBox>
        </BoxWrapper>
    )
}

export default ExpertUpperBoxSection

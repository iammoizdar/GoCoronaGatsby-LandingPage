 import styled from "styled-components"
import { device } from "../../styles/Responsive"

 export const TextSection = styled.div`
    display: flex;
    /* width: 50%; */
    flex-direction: column;
    grid-gap: 16px;
    h1,h2{
        font-size: 44px;
        font-weight: bold;
    }
        
    p{
        font-size: 13px;
        color: #616161;
        letter-spacing: 1px;
    }
    span{
        color: ${({type}) => type==="danger" ? ({theme}) => theme.colors.danger : ({theme}) => theme.colors.Blue}
    }

    @media ${device.mobileL} { 
    h1,h2{
        font-size: 34px;
    }
    span{
        font-size: 34px;
    }
    @media ${device.mobileL} { 
    align-items: center;
    text-align: center;
  }
  }
`
// const Span = styled.span`
//     color: ${({type}) => type==="danger" ? ({theme}) => theme.colors.danger : ({theme}) => theme.colors.Blue};
    
// `
import styled, {css} from "styled-components";
import { device } from "../../styles/Responsive";
export const StyledButton = styled.button `
    width: 130px;
    height: 40px;
    justify-content: center;
    display: flex;
    color: #fff;
    align-items: center;
    font-weight: 400;
    letter-spacing: 1.3px;
    font-size: 11.5px;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: ${({type}) => type==="danger" ? ({theme}) => theme.colors.danger : ({theme}) => theme.colors.Blue};

      @media ${device.mobileL} { 
    width: 100px;
    height: 40px;
    font-size: 9.5px;
  }

`
/* ${({circle}) => circle && css`
    border-radius: 100%;
` */
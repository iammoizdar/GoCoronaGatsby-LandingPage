import styled from "styled-components";

export const Button = styled.div `
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
    background-color: ${({theme})=> theme.buttons.color1};
`
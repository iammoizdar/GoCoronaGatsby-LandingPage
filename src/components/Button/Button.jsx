import React from 'react'
import {StyledButton} from "./Button.styles";

const Button = ({type,children}) => {
    return(
        <StyledButton type={type}>{children}</StyledButton>
    )
}

export default Button;
import React from 'react'
import { TextSection } from "./Heading.styles";
const Heading = ({type,children}) => {
    return(
        <TextSection type={type}>{children}</TextSection>
    )
}

export default Heading;
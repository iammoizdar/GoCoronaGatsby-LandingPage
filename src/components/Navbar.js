import React from 'react'
import styled from 'styled-components'
import Logo from "../images/logo.png"
import { Link as GatsbyLink} from 'gatsby'
import { Button } from '../styles/Button'
const NavBar = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
const Logodiv = styled.div`
    cursor: pointer;
    width: 30%;
`
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 44px;
  color: #fff;
  text-transform: uppercase;

`
const StyledLink = styled(GatsbyLink)`
    color: #000;
    font-weight: 600;
    border-bottom: 2px solid transparent;
    padding-bottom: 5px;
    letter-spacing: 1px;
    font-size: 13px;
    transition: 0.3s ease;
    &:hover{
        border-bottom: 2px solid #4285F4;
    }

`


const Navbar = () => {
    return (
       <NavBar>
           <Logodiv><img src={Logo} alt="Logo" /> </Logodiv>
           <NavLinks>
               <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/about">Features</StyledLink>
                <StyledLink to="/">Support</StyledLink>
                <StyledLink to="/">Contact Us</StyledLink>
                </NavLinks>
                <Button>Download</Button>
       </NavBar>
    )
}

export default Navbar

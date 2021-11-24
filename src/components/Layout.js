import React from 'react'
import Navbar from './Navbar'
import { Container } from '../styles/Container'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/Themes'
import { HeroSection } from './HeroSection'
import SecondSection from './SecondSection'
import ExpertSection from './ExpertSection'
import HealthCare from './HealthCare'
import Googleplay from '../images/googleplay.png'
import Appstore from '../images/appstore.png'
const Layout = ({children}) => {
    return (
        <ThemeProvider theme = {theme}>
        <div className="banner">
            <Container>
                <Navbar />
                <HeroSection />
                <SecondSection />
                <ExpertSection />
                <HealthCare/>
                <div className="content">
                    {children}
                </div>
                <footer>
                    <img src={Googleplay} alt="" />
                    <img src={Appstore} alt="" />
                </footer>
            </Container>
        </div>
</ThemeProvider>
    )
}

export default Layout

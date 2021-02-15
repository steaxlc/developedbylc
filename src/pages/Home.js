import React from 'react'


import styled from 'styled-components';
import Skills from '../components/Skills'

//import components
import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

const Home = () => {
    return (
        <BodyHome>
            <HeroSection />
            <ProjectSection />
            <Skills />
            <ContactSection/>
        </BodyHome>
    )
}

const BodyHome = styled.div`
    
    h2{
        margin-top: 5rem;
        text-align: center;
        font-weight: 600;
    }
    
`;



export default Home

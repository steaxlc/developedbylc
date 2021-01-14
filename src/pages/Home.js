import React from 'react'


import styled from 'styled-components';
import Skills from '../components/Skills'

//import components
import HeroSection from '../components/HeroSection'
import ProjectSection from '../components/ProjectsSection'

const Home = () => {
    return (
        <BodyHome>
            <HeroSection />
            
            <h2>
                Projects
            </h2>
            
            <ProjectSection />
            <Skills/>
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

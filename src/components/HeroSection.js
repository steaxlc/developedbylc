import React from 'react'
import styled from 'styled-components'
import Scroll from './Scroll'
import HeroImage from './HeroImage'


//Imports reactstrap
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
    return (
        <StyledHeroSection>
            <StyledContainer>
                <ContentHero>
                    <h1>Hi,</h1>
                    <h1>I'm <span>Luciano Castro</span></h1>
                    <h4>Front-End Web Developer</h4>
                    <div className="animate-scroll-down">
                        <p><span><Scroll/></span> Scroll down to see my projects</p>
                    </div>
                </ContentHero>
                <StyledHeroImage>
                    <RelativeAdjust>
                        <AbsoluteAdjust><HeroImage /></AbsoluteAdjust></RelativeAdjust>
                </StyledHeroImage>
                
            </StyledContainer>
        </StyledHeroSection>
    )
} 

const RelativeAdjust = styled.div`
    display: relative;

`;

const AbsoluteAdjust = styled.div`
    display: absolute;
    top: 0;
    left: 0;
    margin-top: 10%;
    margin-left: -50.5%;

`;


const StyledContainer = styled(Container)`
    @media only screen and (min-width: 1050px){
        display: grid;
        grid-template-columns: 66% auto;
        background: unset;
    }
`;

const StyledHeroSection = styled.div`
    background: #88D317;
    color: white;
    transition: all 0.3s ease;
    @media only screen and (min-width: 1050px){
        height: 90vh;
    }
`;

const StyledHeroImage = styled.div`
    @media only screen and (min-width: 1050px){
        height: 120vh;
        width: 100vh;
        display: unset;
        background: white;
        z-index: 2;
        margin-top: -20%;
    }
    @media only screen and (max-width: 1049px){
        display: none;
    }
`;

const ContentHero = styled.div`
    background: #88d317;
    height: 50vh;
    margin-left:1rem;
    display: grid;
    text-align: left;
    padding: 4rem 0 4rem 0;
    span{
        color: #78156C;
        font-weight: bold;
        margin-right: 1rem;
    }
    .animate-scroll-down{
        margin-top: 2rem;
    }
    @media only screen and (max-width: 1049px){
        display: grid;
        grid-template-columns: 100%;
    }
`;

export default HeroSection

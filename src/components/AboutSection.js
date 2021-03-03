import React from 'react'
import { Container } from 'reactstrap';
import styled from 'styled-components'
import pic from '../img/pic.jpeg'

import Timeline from './TimelineComponent'

const AboutSection = () => {
    return (
        <StyledAbout>
            <Container>
                <Content>
                    <ContentText>
                        <h2>About Me</h2>
                        <p>Hi, I'm Luciano Castro, brazilian front-end web developer. I like to learn,
                        new challenges, try to create or replicate designs. I'm finishing my graduation in
                        Computer Science. I have experience with Customer Service and database manipulation, 
                        in particular, with SQL Server.</p>
                    </ContentText>
                    <ContentImg>
                        <img src={pic} alt="me"/>
                    </ContentImg>
                </Content>
                <Timeline/>
            </Container>
        </StyledAbout>
    )
}

const StyledAbout = styled.div`
    margin: 0em 1em;
`;

const Content = styled.div`
    @media only screen and (min-width: 1000px){
        display: grid;
        grid-template-columns: 60% auto;
    }
    margin: 2em 1em;
    h2{
        font-size: 3em;
        font-weight: bold;
        letter-spacing: 5px;
    }

`;

const ContentText = styled.div`
    margin-right: 2em;
    
    p{
        text-align: justify;
        margin: 2em 0;
        font-size: 1.5em;
    }
`;
const ContentImg = styled.div`
    img{
        width:90%;
        height:100%;
        border-radius: 30px;
        box-shadow: 13px 10px 5px -4px rgba(0,0,0,0.25);
    }
`;

export default AboutSection

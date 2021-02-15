import React from 'react'

import iconfrontend from '../img/icon-frontend.svg'
import iconmobile from '../img/icon-mobile.svg'
import iconux from '../img/icon-ux.svg'

//Imports reactstrap
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from '../components/Card'

import styled from 'styled-components'

const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <ul>
            <li>
                    <Card
                        image={iconfrontend}
                        title="Clean Code"
                        description="Good structure that makes easy to read and do maintenance."
                    />
                </li>
                <li>
                    <Card
                        image={iconmobile}
                        title="Responsive"
                        description="Pages that can be viewed on any devide."
                    />
                </li>
                <li>
                    <Card
                        image={iconux}
                        title="Adobe"
                        description="If necessary i have experience with adobe materials."
                    />
                </li>
            </ul>
            </Container>
        </StyledSkills>
    )
}


const StyledSkills = styled.div`
    background: #00ffee;
    z-index: 2;
    width:100%;
    margin-top: 10rem;
    padding: 2em 0;
    ul{
        grid-gap: 1em;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
    }
    @media only screen and (min-width: 1000px){
        ul{
            display: flex;
            grid-template-columns: repeat(3, auto);}
    }
    @media only screen and (max-width: 999px){
        ul{
            display: grid;
            grid-template-columns: 100%;}
    }
    
`;

export default Skills

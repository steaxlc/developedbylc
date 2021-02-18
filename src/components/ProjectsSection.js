import React from 'react'

//import components
import Skills from './Skills'
import ProjectContentRight from './ProjectContentRight'
import ProjectContentLeft from './ProjectContentLeft'

//import images
import musicplayer from '../img/musicplayer.png'
import rockband from '../img/rockband.png'

import styled from 'styled-components'


//Imports reactstrap
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectsSection = () => {
    
    return (
        <StyledProject>
            <Container>
            <h2>
                Projects
            </h2>
                <ProjectContentRight
                title="Music App"
                catchphrase="To listen your favorites musics"
                    description="Lorem10" page="#" github="#"
                    image ={musicplayer}
                />
                <div className="line"></div>
                <ProjectContentLeft
                    title="Rock Band"
                    catchphrase="To your band"
                    description="Lorem10" page="#" github="#"
                    image ={rockband}
                />
            </Container>
            
        </StyledProject>
    )
}

const StyledProject = styled.div`

    .line{
        height: 3px;
        background: #81c51a;
        width:100%;
        margin: 2rem 0;
    }
    position: relative;
    margin: 0 1rem;
    img{
        width: 100%;
    }
    ::before{
        content:"";
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: #DBEBC4;
        top: 0;
        left: 0;
        z-index: -1;
    }
`;



export default ProjectsSection

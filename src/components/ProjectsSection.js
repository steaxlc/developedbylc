import React from 'react'

//import components
import Skills from './Skills'
import ProjectContentRight from './ProjectContentRight'
import ProjectContentLeft from './ProjectContentLeft'

//import images
import musicplayer from '../img/musicplayer.png'
import rockband from '../img/rockband.png'
import Ignite from '../img/Ignite.png'
import NetflixClone from '../img/NetflixClone.png'

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
                title="Netflix Clone"
                catchphrase="To watch and relax"
                    description="A website built with Next JS, Styled Components and API. 
                    Replicating the main page of Netflix, was used an APi to get the Tv Shows and Movie datas."
                    page="https://netflixclone-steaxlc.vercel.app"
                    github="https://github.com/steaxlc/netflixclone"
                    image ={NetflixClone}
                />
                <div className="line"></div>
            <ProjectContentLeft
                    title="Ignite"
                    catchphrase="Games for you"
                    description="A website built with React, Styled Components, API and Redux. Using an API to
                    request the data of the games, then using Redux to control the data recieved and redering in the
                    main page. Was used too a method to search other games and render dynamicaly depending on the results."
                    page="https://steaxlc.github.io/ignite/"
                    github="https://github.com/steaxlc/ignite"
                    image ={Ignite}
            />
                <div className="line"></div>
                <ProjectContentRight
                title="Music App"
                catchphrase="To listen your favorites musics"
                    description="A Music Player built with React and SASS. 
                    It's used a list with the informations of the music, 
                    like as  Cover Album, color scheme and link to the music so can be render dynamically."
                    page="https://steaxlc.github.io/musicplayer/" github="https://github.com/steaxlc/musicplayer"
                    image ={musicplayer}
                />
                <div className="line"></div>
                <ProjectContentLeft
                    title="Rock Band"
                    catchphrase="To your Band"
                    description="A website built with HTML, CSS and Bootstrap. It contains four pages,
                    the Home Page it have the news about the band in card format, a About Us page with a parallax effect,
                    a page with their songs, inspired in Coldplay website design, and a form page to Contact.
                    
                    Just an expositive website, non functional.
                    " page="https://steelhands.steax.repl.co/index.html" github="/"
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

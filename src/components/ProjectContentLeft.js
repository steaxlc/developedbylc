import React from 'react'
import styled from 'styled-components'

//import components
import TextProject from './TextProject'

const ProjectContentLeft = ({title, catchphrase, description, page, github, image}) => {
    return (
        <Left>
            <a href={page}><img src={image} alt={title}/></a>
            <TextProject
                title={title}
                catchphrase={catchphrase}
                description={description} page={page} github={github}
            />
        
    </Left>
    )
}

const Left = styled.div`
    margin: 10rem 0;
    @media only screen and (min-width: 1000px){
        display: grid;
        a{
            margin-right: 2em;
            margin-top: 1em;
        }
        grid-template-columns: 60% auto;
        div{
            place-content: center;
        }
    }
`;

export default ProjectContentLeft

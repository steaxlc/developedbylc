import React from 'react'
import styled from 'styled-components'
 
import TextProject from './TextProject'
 
 const ProjectContentRight = ({title, catchphrase, description, page, github, image}) => {
     return (
         <Right>
             <TextProject
                title={title}
                 catchphrase={catchphrase}
                 description={description} page={page} github={github}
             />
             <a href={page}><img src={image} alt={title}/></a>
         </Right>
     )
}
 
const Right = styled.div`
    margin: 2rem 0;
    @media only screen and (min-width: 1000px){
        display: grid;
        grid-template-columns: 40% auto;
        a{
            margin-left: 2em;
            margin-top: 1em;
        }
        div{
            place-content: center;
        }
    }
`;
 
 export default ProjectContentRight
 
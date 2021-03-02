import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const TextProject = ({title, catchphrase, description, page, github}) => {
    return (
        <StyledText>
            <p className="title">{title}</p>
            <p className="catchphrase">{catchphrase}</p>
            <p className="description">{description}</p>
            <Botoes>
                <a href={page}>View project</a>
                <a href={github}>GitHub</a>
            </Botoes>
            
        </StyledText>
    )
}

const Botoes = styled.div`
    padding: 2rem 0;
    margin: 0 1rem;
    float: right;
    a{
        border: 3px solid #81c51a;
        padding: 0.7rem;
        border-radius: 30px;
        text-decoration: none;
        color: black;
        font-weight: 600;
        margin-left: 1rem;
        :hover{
            background: #81c51a;
            color: white;
        }
    }
`;

const StyledText = styled.div`
    .title{
        margin-top: 2rem;
        text-transform: uppercase;
        font-weight: bold;
        color: #81c51a;
        letter-spacing: 0.5em;
        font-size: 0.7em;
    }
    .catchphrase{
        color: black;
        font-weight: bold;
        font-size: 1.3em;
        margin-top: -.4em;
        display: block;
    }
    .description{
        color: #3b3b3b;
        margin-bottom: 3em;
        font-size: 0.9em;
        line-height: 1.8em;
        font-weight: 600;
    }
`;

export default TextProject

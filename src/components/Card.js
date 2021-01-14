import React from 'react'
import styled from 'styled-components'

const Card = ({image, title, description}) => {
    return (
        <StyledCard>
            <div><img src={image} alt="icon" /></div>
            <p>{title}</p>
            <p>{description}</p>
        </StyledCard>
    )
}

const StyledCard = styled.div`
    background: white;
    padding: 2em;
    border-radius: 1em;
    margin-bottom: 1em;
    img{
        height: 70px;
        max-width: 110px;
    }
    div{
        margin: 2em;
        display: grid;
        place-content: center;
    }
`;


export default Card

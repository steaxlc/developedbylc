import React, {useState} from 'react'
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'
import styled from 'styled-components'


//Imports reactstrap
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Link} from 'react-router-dom'

const NavBar = () => {

    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const changeActiveHandler = () => {
        setIsActiveMenu(!isActiveMenu);
    }

    return (
        <StyledNav>
            <Container>
                <Custom>
                    <StyledElements activeMenu={isActiveMenu}>
                        <Link to="/developedbylc"><Logo>Luciano Castro</Logo></Link>

                        <nav>
                            <ul >
                                <li><Link to="/developedbylc">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/resume">Resume</Link></li>
                            </ul>
                        </nav>
                        <MenuBtn onClick={changeActiveHandler}>
                            {isActiveMenu ? <FaTimes size="25" /> : <FaBars size="25" />}
                        </MenuBtn>
                    </StyledElements>
                    
                </Custom>
                
                
            </Container>

        </StyledNav>
    )
}

const Custom = styled.div`
    @media only screen and (min-width: 1050px){
        display: grid;
        grid-template-columns: 66% auto;
    }
`;


const MenuBtn = styled.div`
    color: white;
    cursor: pointer;
    z-index: 999;
    @media (max-width: 564px){
        display:show;
    }
    @media (min-width: 565px){
        display:none;
    }
`;

const StyledNav = styled.div`
    background: #81c51a;
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
    }
    nav{
        float: right;
    }
    a{
        display:block;
        padding: 0 1rem;
        text-decoration: none;
        color: white;
        &hover{
            color: white;
        }
    }
`;

const StyledElements = styled.div`
    
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0 1rem 0;
    @media (max-width: 564px){
        display: flex;
        ul{
            background: #81c51a;
            position: fixed;
            height: 100vh;
            width: 100%;
            transition: all 0.3s ease;
            ${props => props.activeMenu ? `
            left:0;
            `: `left:-100%;`}   
            top: 0;
            text-align: center;
            padding-top: 80px;
            display: block;

            li{
                display: block;
                a{
                    display: inline-block;
                    margin: 20px 0;
                    font-size: 25px;
                }
            }
        }
    }
    @media (min-width: 565px){
        display: flex;
        nav{
        display:show;}
    }
`;

const Logo = styled.span`
    color:#78156c;
    font-family: 'Courgette', cursive;
    font-size: 1.5rem;
`;

export default NavBar

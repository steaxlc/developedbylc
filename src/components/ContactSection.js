import React from 'react'
import styled from 'styled-components'
import photo from '../img/Ph.jpg'
import { FaGithub, FaPhone, FaMailBulk, FaLinkedin } from 'react-icons/fa'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { motion } from "framer-motion";

const ContactSection = () => {

    const circleOne = {
        hidden: {
            y: 0,
            x: 0
        },
        show: {
            y: [0, -50, 100, 400, -200],
            x: [500, -50, 0, -200, 700],
            transition: {duration: 5, ease: "easeOut", repeat: Infinity, repeatType: "reverse",}
        }
    }

    const circleTwo = {
        hidden: {
            y: 0,
            x: 0,
        },
        show: {
            y: [50, 100, -400, 0, 150],
            x: [250, 0, 700, 100, 1000],
            transition: {duration: 6, ease: "easeOut", repeat: Infinity, repeatType: "reverse",}
        }
    }

    const circleThree = {
        hidden: {
            y: 0,
            x: 0,
        },
        show: {
            y: [-350, -100, 150, -400, 150],
            x: [150, 700, 400, -200, 900],
            transition: {duration: 7, ease: "easeOut", repeat: Infinity, repeatType: "reverse",}
        }
    }
    const circleFour = {
        hidden: {
            y: 0,
            x: 0
        },
        show: {
            y: [0, 50, 100, -300, 0],
            x: [0, -900, 100, 900, -200],
            transition: {duration: 8, ease: "easeOut", repeat: Infinity, repeatType: "reverse",}
        }
    }

    const circleFive = {
        hidden: {
            y: 0,
            x: 0,
        },
        show: {
            y: [-150, 100, -200, 200, -300],
            x: [50, -200, 400, 0, 1200],
            transition: {duration: 9, ease: "easeOut", repeat: Infinity, repeatType: "reverse",}
        }
    }

    const circleSix = {
        hidden: {
            y: 0,
            x: 0,
        },
        show: {
            y: [-50, 300, -200, -200, -700],
            x: [-350, 1000, 150, 900, -150],
            transition: {duration: 10, ease: "easeOut", repeat: Infinity, repeatType: "reverse",}
        }
    }

    return (
        <ContactBody>
            <Glowing>
                <One  variants={circleOne} initial="hidden" animate="show" ></One>
                <Two variants={circleTwo} initial="hidden" animate="show" ></Two>
                <Three variants={circleThree} initial="hidden" animate="show"></Three>
                <Four  variants={circleFour} initial="hidden" animate="show" ></Four>
                <Five variants={circleFive} initial="hidden" animate="show" ></Five>
                <Six variants={circleSix} initial="hidden" animate="show"></Six>
            </Glowing>
            <Glass>
                <DashBoard>
                    <div className="photo">
                        <img src={photo} alt="me" />
                        <h3>Luciano Castro</h3>
                    </div>
                    <div className="information">
                        <div className="link">
                            <FaGithub size="30"/> <a href="https://www.linkedin.com/in/jlucianocastro/">JLucianoCastro</a>
                        </div>
                        <div className="link">
                            <FaLinkedin size="30"/> <a href="https://github.com/steaxlc/">sTeaxLC</a>
                        </div>
                        <div className="link">
                            <FaMailBulk size="30"/> contatolucianocastro@gmail.com
                        </div>
                        <div className="link">
                            <FaPhone size="30"/> +55 (85) 9.9986-6662
                        </div>
                    </div>
                </DashBoard>
                <Formulario>
                    <h2>Get in touch!</h2>
                        <Form>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Your email" />
                                <Label for="subject">Subject</Label>
                                <Input type="subject" name="subject" id="subject" placeholder="Subject" />
                                <Label for="exampleText">Message</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                                <button>Submit</button>
                            </FormGroup>
                        </Form>
                </Formulario>
            </Glass>
        </ContactBody>
    )
}

const Formulario = styled.div`
    width: 60%;
    padding: 2em;
    button{
        float: right;
        margin-top: 1em;
        text-decoration: none;
        color: white;
        background: black;
        padding: 0.8em;
        border-radius: 30px;
        box-shadow: none;
        border: none;
    }
    h2{
        margin-bottom: 1em;
    }
    label{
        margin-top: 0.5em;
        font-weight: bold;
        font-size: 20px;
    }
`;

const DashBoard = styled.div`
    background: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3));
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    
    .photo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            margin: 2em;
            width: 120px;
            border-radius: 50%;
        }
    }
    a{
        text-decoration: none;
        color: black;
    }
    .link{
        margin-top: 1em;
    }
    h3{
        margin-bottom: 2em;
        font-weight: bold;
    }
    width: 40%;
    .information{
        padding: 2em;
        flex-direction: column;
        display: flex;
        align-items: left;
        justify-content: center;
    }
`;

const Glass = styled.div`
    display: flex;
    background: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3));
    min-height: 80vh;
    width: 60%;
    z-index: 3;
    border-radius: 30px;
    margin: 3em;
    
    
`;

const ContactBody = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
    
    background: black;
`;

const Glowing = styled.div`
    position: relative;
`;
const One = styled(motion.span)`
    position: absolute;
    top: calc(80px * 1);
    left: calc(80px * 1);
    bottom: calc(80px * 1);
    right:  calc(80px * 1);
    :before{
        content: '';
        position: absolute;
        top: 50%;
        left: -8px;
        width: 20px;
        height: 20px;
        border-radius:50%;
        background: rgba(134,255,0,1);
        box-shadow: 0 0 20px rgba(134,255,0,1),
                    0 0 40px rgba(134,255,0,1),
                    0 0 60px rgba(134,255,0,1),
                    0 0 80px rgba(134,255,0,1),
                    0 0 8px rgba(134,255,0,.1);
    }
`;
const Two = styled(motion.span)`
    position: absolute;
    top: calc(80px * 1);
    left: calc(80px * 2);
    bottom: calc(80px * 1);
    right:  calc(80px * 2);
    :before{
        content: '';
        position: absolute;
        top: 50%;
        left: -8px;
        width: 20px;
        height: 20px;
        border-radius:50%;
        background: rgba(255,214,0,1);
        box-shadow: 0 0 20px rgba(255,214,0,1),
                    0 0 40px rgba(255,214,0,1),
                    0 0 60px rgba(255,214,0,1),
                    0 0 80px rgba(255,214,0,1),
                    0 0 8px rgba(255,214,0,.1);
    }
`;
const Three = styled(motion.span)`
    position: absolute;
    top: calc(80px * 1);
    left: calc(80px * 3);
    bottom: calc(80px * 1);
    right:  calc(80px * 3);
    :before{
        content: '';
        position: absolute;
        top: 50%;
        left: -8px;
        width: 20px;
        height: 20px;
        border-radius:50%;
        background: rgba(0,226,255,1);
        box-shadow: 0 0 20px rgba(0,226,255,1),
                    0 0 40px rgba(0,226,255,1),
                    0 0 60px rgba(0,226,255,1),
                    0 0 80px rgba(0,226,255,1),
                    0 0 8px rgba(0,226,255,.1);
    }
`;

const Four = styled(motion.span)`
    position: absolute;
    top: calc(40px * 1);
    left: calc(40px * 1);
    bottom: calc(40px * 1);
    right:  calc(40px * 1);
    :before{
        content: '';
        position: absolute;
        top: 50%;
        left: -8px;
        width: 20px;
        height: 20px;
        border-radius:50%;
        background: rgba(210,105,30,1);
        box-shadow: 0 0 20px rgba(210,105,30,1),
                    0 0 40px rgba(210,105,30,1),
                    0 0 60px rgba(210,105,30,1),
                    0 0 80px rgba(210,105,30,1),
                    0 0 8px rgba(210,105,30,.1);
    }
`;
const Five = styled(motion.span)`
    position: absolute;
    top: calc(40px * 1);
    left: calc(40px * 2);
    bottom: calc(40px * 1);
    right:  calc(40px * 2);
    :before{
        content: '';
        position: absolute;
        top: 50%;
        left: -8px;
        width: 20px;
        height: 20px;
        border-radius:50%;
        background: rgba(255,0,0,1);
        box-shadow: 0 0 20px rgba(255,0,0,1),
                    0 0 40px rgba(255,0,0,1),
                    0 0 60px rgba(255,0,0,1),
                    0 0 80px rgba(255,0,0,1),
                    0 0 8px rgba(255,0,0,.1);
    }
`;
const Six = styled(motion.span)`
    position: absolute;
    top: calc(40px * 1);
    left: calc(40px * 3);
    bottom: calc(40px * 1);
    right:  calc(40px * 3);
    :before{
        content: '';
        position: absolute;
        top: 50%;
        left: -8px;
        width: 20px;
        height: 20px;
        border-radius:50%;
        background: rgba(255,0,255,1);
        box-shadow: 0 0 20px rgba(255,0,255,1),
                    0 0 40px rgba(255,0,255,1),
                    0 0 60px rgba(255,0,255,1),
                    0 0 80px rgba(255,0,255,1),
                    0 0 8px rgba(255,0,255,.1);
    }
`;

export default ContactSection

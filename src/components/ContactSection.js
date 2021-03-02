import React from 'react'
import styled from 'styled-components'
import photo from '../img/Ph.jpg'
import { FaGithub, FaPhone, FaMailBulk, FaLinkedin } from 'react-icons/fa'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import emailjs from 'emailjs-com'

import { motion } from "framer-motion";

const ContactSection = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_eytuxko', 'template_8u69vdb', e.target, 'user_z0IUDgWEdNfo7VzI5t1VW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
      }

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
                        <Form  onSubmit={ sendEmail}>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" placeholder="Your name or Company name" />
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" placeholder="Your email" />
                                <Label for="subject">Subject</Label>
                                <Input type="text" name="subject" id="subject" placeholder="Subject" />
                                <Label for="message">Message</Label>
                                <Input type="textarea" name="message" id="message" />
                                <Input type="submit" name="submit" id="submit" value="Send Message"/>
                            
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
    @media only screen and (min-width: 1050px){
        
        width: 60%;
    }
    @media only screen and (max-width: 1049px){
        width: 100%;
    }
`;

const DashBoard = styled.div`
    background: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3));
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 1050px){
        
        width: 40%;
    }
    @media only screen and (max-width: 1049px){
        width: 100%;
    }
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
    .information{
        padding: 2em;
        flex-direction: column;
        display: flex;
        align-items: left;
        justify-content: center;
    }
`;

const Glass = styled.div`
    background: linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3));
    min-height: 80vh;
    width: 80%;
    z-index: 3;
    border-radius: 30px;
    margin: 3em;
    @media only screen and (min-width: 1050px){
        
            display: flex;
            flex-direction: row;
            grid-template-columns: repeat(3, auto);
    }
    @media only screen and (max-width: 1049px){
        
            display: flex;
            flex-direction: column;
            grid-template-columns: 100%;
    }
    
`;

const ContactBody = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
    background: lightgrey;
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

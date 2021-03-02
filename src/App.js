import React, {useState} from 'react'
//npm install --save styled-components
import styled from 'styled-components'

//Import Components
import NavBar from './components/NavBar'

//Imports reactstrap
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'

import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <ConfigGeral>
      <NavBar />
      <Switch>
        <Route path="/developedbylc" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/resume">
          <Resume/>
        </Route>
      </Switch>
      
    </ConfigGeral>
  );
}

const ConfigGeral = styled.div`
  font-family: 'Nunito', sans-serif;
  overflow-x: hidden;
`;

export default App;

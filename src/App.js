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


function App() {

  return (
    <ConfigGeral>
      <NavBar/>
      <Home />
    </ConfigGeral>
  );
}

const ConfigGeral = styled.div`
  font-family: 'Nunito', sans-serif;
  overflow-x: hidden;
`;

export default App;

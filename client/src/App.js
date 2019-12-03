import React, { Component } from 'react';
import Header from './Components/Header';
import Bracket from './Components/Bracket';
import { Container } from 'reactstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  render() {
    return (
      <React.Fragment className="App">
        <Header />
        <Container>
        <Bracket/>
        </Container>
      </React.Fragment>
    )
  }
}

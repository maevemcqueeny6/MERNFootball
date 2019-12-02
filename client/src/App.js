import React, { Component } from 'react';
import Header from './Components/Header';
import Bracket from './Components/Bracket';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Bracket/>
      </div>
    )
  }
}

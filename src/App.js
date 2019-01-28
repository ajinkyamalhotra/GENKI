import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Game from './game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Game />
      </div>
    );
  }
}

export default App;

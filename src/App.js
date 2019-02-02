import React, { Component } from 'react';
import Navigation from './components/Navigation';
import TitleBar from './components/TitleBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <Navigation />
      </div>
    );
  }
}

export default App;

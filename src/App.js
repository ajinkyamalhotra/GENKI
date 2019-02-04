import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Profile from './Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Profile />
      </div>
    );
  }
}

export default App;

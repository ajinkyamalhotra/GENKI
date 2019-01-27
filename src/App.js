import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Login from './login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Login />
      </div>
    );
  }
}

export default App;

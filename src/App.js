import React, { Component } from 'react';
import Navigation from './components/Navigation';
import TitleBar from './components/TitleBar';
import './App.css';


/**
 * The base component of the Genki VN application.  It renders the Navigation
 * component only.
 */
class App extends Component {
  render() {
    return (
      // Render the Navigation component
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;

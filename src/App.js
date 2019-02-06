import React, { Component } from 'react';
<<<<<<< HEAD
import Navigation from './components/Navigation';
import TitleBar from './components/TitleBar';
=======
import NavigationBar from './NavigationBar';
import Profile from './Profile';
>>>>>>> AM/EM-Branch
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
<<<<<<< HEAD
        <TitleBar />
        <Navigation />
=======
        <NavigationBar />
        <Profile />
>>>>>>> AM/EM-Branch
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Routes from './routing/Routes';

import './App.css';


/**
 * The base component of the Genki VN application.  It renders the Navigation
 * component only.
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  userHasAuthenticated(authenticated) {
    this.setState({ isAuthenticated: authenticated });
  }

  /**
   * Function passed to the login component meant to handle a login event.
   * @param  userPromise          The login component passes back a Promise
   */
  handleLogin(userAttributes, userType) {
    let username = userAttributes.sub;
    let email = userAttributes.email;
    let firstName = userAttributes.name;
    let lastName = userAttributes.family_name;

    this.setState({ isAuthenticated: true, username, email, firstName, lastName, userType });
    console.log(username + ' ' + email + ' ' + firstName + ' ' + lastName + ' ' + userType);
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      handleLogin: this.handleLogin,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      userType: this.state.userType
    };
    
    return (
        // Render the Navigation component
        <div className="App">
          <Navigation {...childProps}/>
          <div>
            {this.state.isUser ?
              'Logged In as ' + this.state.userType  : 'Not Logged in'}
          </div>
          <Routes childProps={childProps}/>
        </div>
      );
  }
}

export default App;

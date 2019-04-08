import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Routes from './routing/Routes';
import { Auth } from 'aws-amplify';

import './App.css';

var jwt = require('jsonwebtoken');

/**
 * The base component of the Genki VN application.  It renders the Navigation
 * component only.
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      console.log('Session found');
      this.userHasAuthenticated(true);
      this.handleLogin();
    }
    catch(e) {
      console.log(e);
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated(authenticated) {
    this.setState({ isAuthenticated: authenticated });
  }

  async handleLogin() {
    try {
      let user = await Auth.currentAuthenticatedUser();
      const { attributes } = user;
      console.log(user);
      console.log(attributes);
      let decoded = jwt.decode(user.signInUserSession.accessToken.jwtToken);
      let userType = decoded['cognito:groups'];
      userType = userType[0];
      let username = attributes.sub;
      let email = attributes.email;
      let firstName = attributes.name;
      let lastName = attributes.family_name;

      this.setState({ username, email, firstName, lastName, userType });
      console.log(username + ' ' + email + ' ' + firstName + ' ' + lastName + ' ' + userType);
    } catch (e) {
      console.log(e);
    }

  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      handleLogin: this.handleLogin,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      userType: this.state.userType,
      username: this.state.username
    };

    return (
        // Render the Navigation component
        <div className="App">
          <Navigation childProps={childProps}/>
          <div>
            {this.state.isAuthenticated ?
              'Logged In as ' + this.state.userType  : 'Not Logged in'}
          </div>
          <Routes childProps={childProps}/>
        </div>
      );
  }
}

export default App;

import React, { Component } from 'react';
import Navigation from './components/Navigation';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Game from './Game';
import Login from './components/Login';
import Profile from './components/Profile';
import Progress from './components/Progress';
import SignUp from './components/SignUp';
import SignUpConfirmation from './components/SignUpConfirmation';

import './App.css';


/**
 * The base component of the Genki VN application.  It renders the Navigation
 * component only.
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isUser: false,
    }

    this.handleLogin = this.handleLogin.bind(this);
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

    this.setState({ isUser: true, username, email, firstName, lastName, userType });
    console.log(username + ' ' + email + ' ' + firstName + ' ' + lastName + ' ' + userType);
  }


   render() {
     const userType = this.state.userType;
     return (
        // Render the Navigation component
        <div className="App">
          <Navigation />
          <div>
            {this.state.isUser ?
              'Logged In as ' + this.state.userType  : 'Not Logged in'}
          </div>

          <Switch>
            <Route
              exact
              path='/'
              render={() => (
                <HomePage userType={this.state.userType} />)} />

            <Route exact path='/Game' component={Game} />

            <Route
              exact
              path='/Login'
              render={(props) => (
                <Login {...props} onLogin={this.handleLogin}/>)} />

            <Route
              exact
              path='/Profile'
              render={(userType) => (
                <Profile userType={userType} />)} />

            <Route exact path='/Progress' component={Progress} />

            <Route
              exact
              path='/SignUp'
              render={(props) => (
                <SignUp {...props}/>)} />

            <Route
              exact
              path='/SignUpConfirmation'
              component={SignUpConfirmation} />

          </Switch>
        </div>
      );
  }
}

export default App;

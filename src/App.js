import React, { Component } from 'react';
import AWS from 'aws-sdk';
import Navigation from './components/Navigation';
//import NavigationHome from './components/NavigationHome';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Game from './Game';
import Login from './components/Login';
import Profile from './components/Profile';
import Progress from './components/Progress';
import SignUp from './components/SignUp';
import SignUpConfirmation from './components/SignUpConfirmation';
import SendEmail from './components/email';


const URL = 'http://localhost:5000';

/**
 * The base component of the Genki VN application.  It renders the Navigation
 * component only.
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false,
      username: ''
    }

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(username) {
    this.setState({isUser: true, username});
    SendEmail();
  }

  render() {
    return (
      // Render the Navigation component
      <div className="App">
        <Navigation />
        <div>
          {this.state.isUser ?
            'Logged In as ' + this.state.username : 'Not Logged in'}
        </div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Game' component={Game} />

          <Route
            exact
            path='/Login'
            render={(props) => (
              <Login {...props} onLogin={this.handleLogin}/>)} />

          <Route exact path='/Profile' component={Profile} />
          <Route exact path='/Progress' component={Progress} />
          <Route
            exact
            path='/SignUp'
            render={(props) => (<SignUp {...props} serverUrl={URL}/>)} />
          <Route  exact path='/SignUpConfirmation'
                  component={SignUpConfirmation} />
        </Switch>
      </div>
    );
  }
}

export default App;

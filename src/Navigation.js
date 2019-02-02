import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Table, Button} from 'semantic-ui-react';
import Game from './Game.js';
import Login from './Login.js';

class Navigation extends Component {


  render() {
    return (
      <Router>
      <div className="navigation-bar">
        {
          <Table color='grey' inverted>
            <Table.Header>
              <Table.Row>
                <Button.Group floated='right'>
                  <Link to='/homepage'>
                    <Button>Home Page</Button>
                  </Link>
                  <Link to='/public/Profile.html'>
                    <Button>Profile</Button>
                  </Link>
                  <Link to='/game'>
                    <Button>Game</Button>
                  </Link>
                  <Link to='/public/LoginPage.html'>
                    <Button>Log Out</Button>
                  </Link>
                </Button.Group>
              </Table.Row>
            </Table.Header>
          </Table>
        }
        <Route path='/homepage' component={ Login }/>
        <Route path='/game'component={ Game }/>
      </div>
    </Router>
    )
  }
}


export default Navigation;

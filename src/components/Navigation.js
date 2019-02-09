import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Table, Button, Image} from 'semantic-ui-react';
import HomePage from './HomePage';
import Game from '../Game';
import Login from './Login';
import Profile from './Profile';

const logo= require('../images/logo.png');

/**
 * Component which contains all routing logic for the Genki VN application.
 * This component returns the rendered component corresponding to the button
 * which was clicked by the user.
 *
 * Read more about the routing technique used here at
 * https://reacttraining.com/react-router/web/guides/quick-start
 */
class Navigation extends Component {
  render() {
    return (
      <Router>
      <div className="navigation-bar">
        {
          <Table color='black' inverted attached >
            <Table.Header>
              <Table.Row>
                  <Table.HeaderCell rowSpan='2'>
                    <Image size='tiny' src={logo} style={{}} />
                  </Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                <Table.HeaderCell>
                <Button.Group floated='right'>
                  <Link to='/'>
                    <Button color='orange' floated='left' size='large' style={{borderStyle: 'solid'}}>Home Page</Button>
                  </Link>
                  <Link to='/Profile'>
                    <Button color='orange' floated='left' size='large' style={{borderStyle: 'solid'}}>Profile</Button>
                  </Link>
                  <Link to='/Game'>
                    <Button color='orange' floated='left' size='large' style={{borderStyle: 'solid'}}>Game</Button>
                  </Link>
                  <Link to='/Login'>
                    <Button color='orange' floated='left' size='large' style={{borderStyle: 'solid'}}>Logout</Button>
                  </Link>
                </Button.Group>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          </Table>
        }


        <Route path='/' exact component={HomePage} />
        <Route path='/Game' component={Game} />
        <Route path='/Login' component={Login} />
        <Route path='/Profile' component={Profile} />


      </div>
    </Router>
    )
  }
}

export default Navigation;

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Table, Button} from 'semantic-ui-react';
import HomePage from './HomePage';
import Game from '../Game';
import Login from './Login';

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
          <Table color='grey' inverted attached>
            <Table.Header>
              <Table.Row>
                <Button.Group floated='right'>
                  // Each link corresponds to a particular path
                  <Link to='/'>
                    <Button>Home Page</Button>
                  </Link>
                  <Link to='/public/Profile.html'>
                    <Button>Profile</Button>
                  </Link>
                  <Link to='/Game'>
                    <Button>Game</Button>
                  </Link>
                  <Link to='/Login'>
                    <Button>Log Out</Button>
                  </Link>
                </Button.Group>
              </Table.Row>
            </Table.Header>
          </Table>
        }

        // What each path links to
        <Route path='/' exact component={HomePage} />
        <Route path='/Game' component={Game} />
        <Route path='/Login' component={Login} />

      </div>
    </Router>
    )
  }
}

export default Navigation;

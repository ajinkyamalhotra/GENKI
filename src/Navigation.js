import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Table, Button} from 'semantic-ui-react';
import HomePage from './HomePage';
import Game from './Game';
import Login from './Login';

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

        <Route path='/' exact component={HomePage} />
        <Route path='/Game' component={Game} />
        <Route path='/Login' component={Login} />

      </div>
    </Router>
    )
  }
}

export default Navigation;

import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Table, Button} from 'semantic-ui-react';

class NavigationBar extends Component {


  render() {
    return (
      <Router>
      <div className="navigation-bar">
        {
          <Table color='grey' inverted>
            <Table.Header>
              <Table.Row>
                <Button.Group floated='right'>
                  <Link to='/public/HomePage.html'>
                    <Button>Home Page</Button>
                  </Link>
                  <Link to='/public/Profile.html'>
                    <Button>Profile</Button>
                  </Link>
                  <Link to='/public/Game.html'>
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
      </div>
    </Router>
    )
  }
}

export default NavigationBar;

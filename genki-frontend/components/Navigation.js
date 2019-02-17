import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Table, Button, Image, Segment, Menu, Label, Header} from 'semantic-ui-react';
import HomePage from './HomePage';
import Game from '../Game';
import Login from './Login';
import Profile from './Profile';
import '../styles/Navigation.css';
const logo= require('../images/logo.png');

/**
 * Component which contains all routing logic for the Genki VN application.
 * This component returns the rendered component corresponding to the button
 * which was clicked by the user.
 *
 * Read more about the routing technique used here at
 * https://reacttraining.com/react-router/web/guides/quick-start
 */

 /**
  * OLD button menu code
  * 
  * <Button.Group floated='right'>
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
  * 
  */
class Navigation extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleClickOnGENKI = () => this.setState({ activeItem: 'home' })

  render() {
      const { activeItem } = this.state
    return (
      <Router>
      <div className="navigation-bar"> {
        <Table color='black' inverted attached >
            <Table.Header>
                <Table.Row >
                    <Table.HeaderCell></Table.HeaderCell> 
                    <Table.HeaderCell rowSpan='2' collapsing style={{padding: '0'}}>
                        <Link to='/'>
                            <Image size='tiny' src={logo} onClick={this.handleClickOnGENKI}/>
                        </Link>
                    </Table.HeaderCell>
                    
                    <Table.HeaderCell  textAlign='left' collapsing>
                        <Link to='/'> <Header as='h1' class='header' color='orange' onClick={this.handleClickOnGENKI}> GENKI </Header> </Link>
                    </Table.HeaderCell>
                
                    <Table.HeaderCell inverted>
                        <Menu inverted pointing secondary floated='right'>
                            <Link to='/'>
                                <Menu.Item id='HomeButton' name = 'home' active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Menu.Item>
                            </Link>
                            <Link to='/Profile'>
                                <Menu.Item name = 'profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>Profile</Menu.Item>
                            </Link>
                            <Link to='/Game'>
                                <Menu.Item name = 'game' active={activeItem === 'game'} onClick={this.handleItemClick}>Game</Menu.Item>
                            </Link>
                            <Link to='/Login'>
                                <Menu.Item name = 'login' active={activeItem === 'login'} onClick={this.handleItemClick}>Logout</Menu.Item>
                            </Link>
                        </Menu>
                    </Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
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

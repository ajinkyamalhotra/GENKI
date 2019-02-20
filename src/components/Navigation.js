import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Table, Image, Menu, Header, Icon} from 'semantic-ui-react';
import HomePage from './HomePage';
import Game from '../Game';
import Login from './Login';
import Profile from './Profile';
import Progress from './Progress';
import SignUp from './SignUp';
import SignUpConfirmation from './SignUpConfirmation';
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

class Navigation extends Component {

  //Default active item is set to home
  state = { activeItem: 'home' };

  //To change active item to the selected menu-item when a menu-item is clicked
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  //To change the active item to home when GENKI logo or label is clicked
  handleClickOnGENKI = () => this.setState({ activeItem: 'home' });

  /** Semantic-UI menu used
   * https://react.semantic-ui.com/collections/menu/
   */
   render() {
      const { activeItem } = this.state
    return (
      <Router>
      <div className="navigation-bar"> {
        <Table color='black' inverted attached >
            <Table.Header>
                <Table.Row rowSpan='1'>
                    
                    {/*Cell add's padding to the left side of the nav bar*/}
                    <Table.HeaderCell></Table.HeaderCell> 
                    
                    {/*Cell to store the GENKI logo*/}
                    <Table.HeaderCell rowSpan='2' collapsing
                    style={{padding: '0'}}>
                        <Link to='/'>
                            <Image size='tiny' src={logo}
                            onClick={this.handleClickOnGENKI}/>
                        </Link>
                    </Table.HeaderCell>
                    
                    {/*Cell to store the GENKI label header*/}
                    <Table.HeaderCell  textAlign='left' collapsing>
                        <Link to='/'>
                        <Header as='h1' class='header' color='orange'
                        onClick={this.handleClickOnGENKI}>
                        GENKI </Header> </Link>
                    </Table.HeaderCell>
                
                    {/*Cell to store the Menu-Items*/}
                    <Table.HeaderCell inverted>
                        <Menu inverted pointing secondary floated='right'>
                            
                            <Link to='/'>
                                <Menu.Item id='HomeButton' name = 'home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}>
                                <Icon inverted name='home'/>
                                Home</Menu.Item>
                            </Link>
                            
                            <Link to='/Profile'>
                                <Menu.Item name = 'profile'
                                active={activeItem === 'profile'}
                                onClick={this.handleItemClick}>
                                <Icon inverted name='user circle'/>
                                Profile</Menu.Item>
                            </Link>
                            
                            <Link to='/Game'>
                                <Menu.Item name = 'game'
                                active={activeItem === 'game'}
                                onClick={this.handleItemClick}>
                                <Icon inverted name='game'/>
                                Game</Menu.Item>
                            </Link>

                            <Link to='/Progress'>
                                <Menu.Item name = 'Progress'
                                active={activeItem === 'Progress'}
                                onClick={this.handleItemClick}>
                                <Icon inverted name='shipping fast'/>
                                Progress</Menu.Item>
                            </Link>
                            
                            <Link to='/Login'>
                                <Menu.Item name = 'login'
                                active={activeItem === 'login'}
                                onClick={this.handleItemClick}>
                                <Icon inverted name='sign out alternate'/>
                                Logout</Menu.Item>
                            </Link>
                        
                        </Menu>
                    </Table.HeaderCell>
                    
                    {/*Adding padding to the right side of the nav bar*/}
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        </Table>
        }

        <Route exact path='/' exact component={HomePage} />
        <Route exact path='/Game' component={Game} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Profile' component={Profile} />
        <Route exact path='/Progress' component={Progress} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/SignUpConfirmation' component={SignUpConfirmation} />
      </div>
    </Router>
    )
  }
}

export default Navigation;
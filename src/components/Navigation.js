import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table, Image, Menu, Icon, Grid, Popup } from 'semantic-ui-react';
import { Button, Header } from 'semantic-ui-react';
import '../styles/Navigation.css';
import logo from '../images/logo with title.png';

import LandingPage from './LandingPage/LandingPage';

/**
 * Function to extract current Active Item
 * @returns {string}
 */
function extractActiveMenuItem() {
  //Retrieving the URL and splitting it where "/" character occurs
  let activeURL = window.location.href.split("/");

  //activeURL is an array with value
  //[http, null , domainName, page that is active]
  //Hence, index of active menu items = 3
  //Highly unlike that our URL structure is going to change
  let activeMenuItemIndex = 3;

  //Extracting the last element of the array
  let activeMenuItem = activeURL[activeMenuItemIndex];
  console.log("Page location is " + activeMenuItem);

  return activeMenuItem;
}

/**
 * Component which contains all routing logic for the Genki VN application.
 * This component returns the rendered component corresponding to the button
 * which was clicked by the user.
 *
 * Read more about the routing technique used here at
 * https://reacttraining.com/react-router/web/guides/quick-start
 */
class Navigation extends Component {

  constructor(props) {
    super(props);
    //Get the active Item by extracting the current active item from the URL
    this.state = {
      activeItem: extractActiveMenuItem()
    }
  }

  /**
   * To change active item to the selected menu-item when a menu-item is clicked
   *
   * Also changes the slideshow container display property to none to hide the
   * container, when the user is not logged in.
   */
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });

    let slideshow = document.getElementById("slideShowContainer");
    if(slideshow != null) {
      slideshow.style.display = "none";
    }

  };

  //To change the active item to home when GENKI logo or label is clicked
  handleClickOnGENKILoggedIn = () => this.setState({ activeItem: 'Home' });

  /**
   * To change the active item to none when user is not logged in
   *
   * Also changes the slideshow container display property to null to show the
   * container, when the user is not logged in.
   */
  handleClickOnGENKINotLoggedIn = () => {
    this.setState({ activeItem: '' });

    let slideshow = document.getElementById("slideShowContainer");
    if(slideshow != null) {
        slideshow.style.display = "";
    }
  };

  /** Semantic-UI menu used
   * https://react.semantic-ui.com/collections/menu/
   */
  render() {
    //Flag to indicate whether user is logged in or not
    const isLoggedIn = this.props.childProps.isAuthenticated;
    const { activeItem } = this.state;

    //Can be used to suppress the errors
    //console.error = () => {};

    return (
      <div className="navigation-bar"> {
        <Table color='black' inverted attached >
            <Table.Header>
                <Table.Row rowSpan='1'>

                    {/*Cell add's padding to the left side of the nav bar*/}
                    <Table.HeaderCell></Table.HeaderCell>

                    {/*Cell to store the GENKI logo with title*/}
                    <Table.HeaderCell rowSpan='2' collapsing
                    style={{padding: '0', marginLeft:'50px'}}>

                      {isLoggedIn ? (
                        <Link to='/Home'>
                            <Image size='small' src={logo}
                            onClick={this.handleClickOnGENKILoggedIn}/>
                        </Link>

                        ) : (

                        <Link to='/'>
                          <Image size='small' src={logo}
                                 onClick={this.handleClickOnGENKINotLoggedIn}/>
                        </Link>
                        )}

                    </Table.HeaderCell>

                    {/*Cell to store the Menu-Items or button*/}
                    <Table.HeaderCell id={"navButtons"}>

                      {isLoggedIn ? (

                        <Menu inverted pointing secondary floated='right'>
                          <Link to='/Home'>
                            <Menu.Item id='HomeButton' name = 'Home'
                                       active={activeItem === 'Home'}
                                       onClick={this.handleItemClick}>
                              <Icon inverted name='home'/>
                              Home
                            </Menu.Item>
                          </Link>

                          <Link to='/Game'>
                            <Menu.Item id='GameButton'
                                       name = 'Game'
                                       active={activeItem === 'Game'}
                                       onClick={this.handleItemClick}>
                              <Icon inverted name='game'/>
                              Game
                            </Menu.Item>
                          </Link>

                          <Popup
                            trigger={<Menu.Item id='SignOutButton'
                                                name = 'Logout'
                                                active={activeItem === 'Logout'}
                                                onClick={this.handleItemClick}>
                              <Icon inverted name='sign out alternate'/>
                              Logout
                            </Menu.Item>}
                            content={
                              <Grid centered>
                                <Grid.Column textAlign='center'>
                                  <Header as='h4'>Are you sure?</Header>
                                  <Link to='/Home'>
                                    <Button onClick={this.props.handleLogout}>
                                      Logout
                                    </Button>
                                  </Link>
                                </Grid.Column>
                              </Grid>}
                            on='click'
                            position='bottom center'
                          />
                        </Menu>

                      ) : (

                        <Menu inverted pointing secondary floated='right'>
                          <Link to='/Login'>
                            <Menu.Item id='LoginButton'
                                       name = 'Login'
                                       active={activeItem === 'Login'}
                                       onClick={this.handleItemClick}>
                              <Icon inverted name='sign-in alternate'/>
                              Login
                            </Menu.Item>
                          </Link>

                          <Link to='/SignUp'>
                            <Menu.Item id='SignUpButton'
                                       name = 'SignUp'
                                       active={activeItem === 'SignUp'}
                                       onClick={this.handleItemClick}>
                              <Icon inverted name='user plus'/>
                              SignUp
                            </Menu.Item>
                          </Link>
                        </Menu>

                      )}
                    </Table.HeaderCell>
                    {/*Adding padding to the right side of the nav bar*/}
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        </Table>
        }
        {isLoggedIn ? (
          console.log("User already logged dont show greetings msg")
          ):(
        <LandingPage />
          )}
      </div>
    )
  }
}

export default Navigation;

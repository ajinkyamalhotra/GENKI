import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Form, Container, Header, Menu, Grid, Segment} from 'semantic-ui-react';

import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png


export default class Profile extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid style={{height: '100vh', color:'black'}}>
        <Grid.Column width={3} inverted color='black' style={{height: '100vh', color:'black'}}>
          <Menu fluid vertical tabular style={{height: '100vh'}} inverted>
            <Menu.Item name='bio' active={activeItem === 'bio'} onClick={this.handleItemClick} />
            <Menu.Item name='pics' active={activeItem === 'pics'} onClick={this.handleItemClick} />
            <Menu.Item
              name='companies'
              active={activeItem === 'companies'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        
        <Container>
          <img src={logo} alt="Logo" style={{ width: '80%', margin: 'auto', marginLeft: '30%'}}/>
          <h1 style={{ margin: 'auto', marginLeft: '63%'}}> Team GENKI</h1>
        </Container>
      </Grid>
    )
  }
}



/*class Profile extends Component
{
  render()
  {
    return(
      <div className='ProfileForm' style={{borderStyle: 'solid', width: '50%', margin: 'auto', marginTop: '5%'}}>
        <Container>
          <img src={logo} alt="Logo" style={{ width: '80%', margin: 'auto', marginLeft: '10%'}}/>
          <h1 style={{ margin: 'auto', marginLeft: '30%'}}> Team GENKI</h1>
        </Container>
      </div>
    )
  }
}*/

/*function ProfileImage()
{
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;

}

export default ProfileImage;*/

//export default Profile;

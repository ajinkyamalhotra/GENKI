import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Form, Container, Header, Menu, Grid, Segment} from 'semantic-ui-react';

import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png


export default class Profile extends Component {
  state = { activeItem: 'page1' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={2} >
          <Menu width={2} fluid vertical tabular style={{height: '90vh'}}>
            <Menu.Item name='page1' color='orange' active={activeItem === 'page1'} onClick={this.handleItemClick}> Page1 </Menu.Item>
            <Menu.Item name='page2' color='orange' active={activeItem === 'page2'} onClick={this.handleItemClick}> Page2 </Menu.Item>
            <Menu.Item name='page3' color='orange' active={activeItem === 'page3'} onClick={this.handleItemClick}> Page3 </Menu.Item>
            <Menu.Item name='page4' color='orange' active={activeItem === 'page4'} onClick={this.handleItemClick}> Page4 </Menu.Item>
          </Menu>
        </Grid.Column>

        
        <Container>
          <img src={logo} alt="Logo" style={{ width: '80%', margin: 'auto', marginLeft: '25%'}}/>
          <h1 style={{ margin: 'auto', marginLeft: '57%'}}>Team GENKI</h1>
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

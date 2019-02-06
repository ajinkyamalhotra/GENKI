import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Form, Container, Header} from 'semantic-ui-react';

import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

class Profile extends Component
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
}

/*function ProfileImage()
{
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;

}

export default ProfileImage;*/

export default Profile;

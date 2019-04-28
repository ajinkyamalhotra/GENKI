import React, {Component} from 'react';
import { Container, Grid} from 'semantic-ui-react';
import '../styles/Greetings.css'

// Tell Webpack this JS file uses this image
import logo from '../images/logo.png';
const logoWithTitle= require('../images/logo with title.png');

class Greetings extends Component {
  render() {
    return (

      <Grid>
        {/*Container for the entire page*/}
        <Container style={{marginLeft: '10%'}}>
          {/*Display GENKI logo*/}
          <img src={logo} alt="Logo" className={'GreetingsLogo'}/>
          <h1 className={'ui header label'}>
            Welcome to Genki Visual Novel
          </h1>
        </Container>
      </Grid>
    )
  }
}
export default Greetings;
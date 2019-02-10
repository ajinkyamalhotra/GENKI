import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Header, Segment, Input, Label} from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import '../styles/Login.css';

class Login extends Component{
  render(){
    return(
      //Container for full page
      <div className='page'>
      <br />
      {/*Container for the login form*/}
      <div className='loginForm'>
        <Segment inverted>
            <Header as='h2' attached='top' size='massive'
            inverted color='orange'> GENKI </Header>
            
            {/*Add's a divider between GENKI header and user inputs*/}
            <Divider clearing />
            
            <br />

            <Label> <Icon name='user' /> Username </Label>

            <br /> <br />    
            {/*Username input box*/}
            <Input size='massive' focus placeholder='Username'
            compact color='orange' />

            <br /> <br /> <br /> <br />

            <Label> <Icon name='key' /> Password </Label>

            <br /> <br />   
            {/*Password input box*/}
            <Input size='massive' focus placeholder='Password' compact />

            <br /> <br /> <br />
            {/*Login input box*/}
            <Button color='orange' floated='left' size='massive' compact >
            Log in</Button>
            <Button inverted color='orange' floated='right' size='massive'
            compact>Sign Up</Button>

            <br /> <br /> <br />

        </Segment>

      </div>
      </div>
    )
  }
}
export default Login;

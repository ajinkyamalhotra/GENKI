import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Form, Container, Header, Segment, Input, Label, Icon, Divider, Image} from 'semantic-ui-react';
import '../styles/Login.css';

class Login extends Component{
  render(){
    return(
      <div className='page'>
      <br />
      <div className='loginForm'>
        <Segment inverted>
            <Header as='h2' attached='top' size='massive' inverted color='orange'> GENKI </Header>
            <Divider clearing />
            
            <br />

            <Label> <Icon name='user' /> Username </Label>

            <br /> <br />    

            <Input size='massive' focus placeholder='Username' compact color='orange' />

            <br /> <br /> <br /> <br />

            <Label> <Icon name='key' /> Password </Label>

            <br /> <br />   

            <Input size='massive' focus placeholder='Password' compact />

            <br /> <br /> <br />

            <Button color='orange' floated='left' size='massive' compact >    Log in    </Button>
            <Button inverted color='orange' floated='right' size='massive' compact>Sign Up</Button>

            <br /> <br /> <br />

        </Segment>

      </div>
      </div>
    )
  }
}
export default Login;

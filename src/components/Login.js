import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Form, Container, Header} from 'semantic-ui-react';
import '../styles/Login.css';

class Login extends Component{
  render(){
    return(
      <div className='loginForm'>
        <Container>
          <Form size='huge'>
            <Header as='h1'>Log In</Header>
            <label>Username</label>
            <Form.Input placeholder='Username' name='username' width='12'/>
            <label>Password</label>
            <Form.Input placeholder='Password' name='password' width='12'/>
            <Button>Login</Button>
            <Button floated='right'>Register</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Login;
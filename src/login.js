import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Form, Container} from 'semantic-ui-react';

class Login extends Component{
  render(){
    return(
      <div className='loginForm'>
        <Container>
          <Form>
            <label>Username</label>
            <Form.Input placeholder='Username' name='username' width='6'/>
            <label>Password</label>
            <Form.Input placeholder='Password' name='password' width='6'/>
            <Button>Login</Button>
            <Button>Register</Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default Login;

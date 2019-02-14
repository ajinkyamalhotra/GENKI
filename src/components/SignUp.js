import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Header, Form, Grid, Input, Dropdown} from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import '../styles/SignUp.css';

const options = [
    { key: 0, text: '', value: 0},
    { key: 1, text: 'Student', value: 1 },
    { key: 2, text: 'Teacher', value: 2 },
    { key: 3, text: 'Admin', value: 3 },
]

class SignUp extends Component{
  render(){
    return(
        <Router>
            <div className='page'>
                <Grid  padded='vertically'>
                    <Grid.Row><br/></Grid.Row>
                    <Grid.Row>
                        <Grid.Column className='signUpForm'>
                            <Grid.Row><br/></Grid.Row>
                            <Grid.Row>
                                <Header as='h1' inverted color='orange'>
                                GENKI</Header>
                            </Grid.Row>
                            <Divider /> 
                            <Form inverted>
                                <Form.Field>
                                    <label size='huge'><Icon color='orange'
                                    name='user' />User Type</label>
                                    <Dropdown verticalAlign='middle' clearable
                                    compact selection fluid options={options}
                                    selection />
                                </Form.Field>
                                <Grid.Row><br/></Grid.Row>
                                <Form.Field>
                                    <label size='huge'><Icon color='orange'
                                    name='user secret' />Class Secret ID (Only 
                                    required if you want to be registered
                                     in a class)
                                    </label>
                                    <Input compact fluid size='huge' icon='user
                                     secret' color='orange'
                                     placeholder='Class Secret ID'/>
                                </Form.Field>
                                <Grid.Row><br/></Grid.Row>
                                <Form.Field>
                                    <label size='huge'><Icon color='orange'
                                    name='mail' />Email</label>
                                    <Input fluid size='huge' icon='mail'
                                    color='orange' placeholder='Email'/>
                                </Form.Field>
                                <Grid.Row><br/></Grid.Row>
                                <Form.Field>
                                    <label size='huge'><Icon color='orange'
                                    name='user circle' />Username</label>
                                    <Input fluid size='huge' icon='user circle'
                                    color='orange' placeholder='Username'/>
                                </Form.Field>
                                <Grid.Row><br/></Grid.Row>
                                <Form.Field>
                                    <label><Icon color='orange'
                                    name='lock circle' />Password</label>
                                    <Input fluid size='huge' icon='key'
                                    color='orange' placeholder='Password'/>
                                </Form.Field>
                                <Grid.Row><br/></Grid.Row>
                                <Form.Field>
                                    <label><Icon color='orange'
                                    name='lock circle' />Confirm Password
                                    </label>
                                    <Input fluid size='huge' icon='key'
                                    color='orange' placeholder='Confirm
                                    Password'/>
                                </Form.Field>
                                <Grid.Row><br/></Grid.Row>
                                <Button fluid size='huge' color='orange'
                                type='Signup'>Signup</Button>
                            </Form>
                        <Grid.Row><br/></Grid.Row>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
      </Router>
    )
  }
}
export default SignUp;

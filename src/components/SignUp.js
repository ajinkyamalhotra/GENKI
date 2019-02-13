import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Header, Form, Grid, Input} from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import '../styles/SignUp.css';

class SignUp extends Component{
  render(){
    return(
        <Router>
            <div className='page'>
                <br/> <br/>
                <Grid  padded='vertically'>
                    <Grid.Row verticalAlign='middle' column={3}>
                        <Grid.Column className='loginForm'>
                            <Grid.Row><br/></Grid.Row>
                            <Grid.Row>
                                <Header as='h1' inverted color='orange'>
                                GENKI</Header>
                            </Grid.Row>
                            <Divider /> 
                            <Form inverted>
                                <Form.Field>
                                    <label size='huge'><Icon color='orange'
                                    name='mail' />Email</label>
                                    <Input fluid size='huge' icon='mail'
                                    color='orange' placeholder='Email'/>
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
                                    name='lock circle' />Confirm Password</label>
                                    <Input fluid size='huge' icon='key'
                                    color='orange' placeholder='Confirm Password'/>
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

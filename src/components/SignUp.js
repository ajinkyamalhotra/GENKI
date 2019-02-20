import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Button, Header, Form, Grid, Input, Dropdown} from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import '../styles/SignUp.css';

const options = [
    { key: 1, text: 'Student', value: 'student' },
    { key: 2, text: 'Teacher', value: 'teacher' },
    { key: 3, text: 'Admin', value: 'admin' },
]

class SignUp extends Component{

    state = {}

    handleClick = () => {
        this.props.history.push('/SignUpConfirmation');
    };

    handleChange = (e, { value }) => this.setState({ value })

  render(){
       const { value } = this.state
    return(
        <Router>
            <div className='page'>
                <Grid  padded='vertically'>
                    <Grid.Row><br/></Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={4} className='signUpForm'>
                            <Grid.Row><br/></Grid.Row>
                            <Grid.Row>
                                <Header as='h1' inverted color='orange'>
                                GENKI</Header>
                            </Grid.Row>
                            <Divider /> 
                            <Form inverted classname='signUpButtonAlignment'>
                                <Form.Group inline>
                                    <label>User Type</label>
                                    <Form.Radio
                                        label='Student'
                                        value='student'
                                        checked={value === 'student'}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Radio
                                        label='Teacher'
                                        value='teacher'
                                        checked={value === 'teacher'}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Radio
                                        label='Admin'
                                        value='admin'
                                        checked={value === 'admin'}
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>
                                <Grid.Row><br/></Grid.Row>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='First name'
                                                placeholder='First name' />
                                    <Form.Input fluid label='Last name'
                                                placeholder='Last name' />
                                </Form.Group>
                                <Grid.Row><br/></Grid.Row>
                                <Form.Field>
                                    <label size='huge'><Icon color='orange'
                                    name='user secret' />Class Secret ID (Only
                                    required if you want to be registered
                                     in a class)
                                    </label>
                                    <Input icon='user secret'
                                     placeholder='Class Secret ID'/>
                                </Form.Field>
                                <Grid.Row><br/></Grid.Row>
                                <Form.Field>
                                    <label size='huge'><Icon color='orange'
                                    name='mail' />Email</label>
                                    <Input icon='mail' placeholder='Email'/>
                                </Form.Field>
                                <Grid.Row><br/></Grid.Row>
                                <Form.Field>
                                    <label size='huge'><Icon color='orange'
                                    name='user circle' />Username</label>
                                    <Input icon='user circle'
                                    placeholder='Username'/>
                                </Form.Field>
                                <Grid.Row><br/></Grid.Row>
                                <Form.Group widths='equal'>
                                    <Form.Input fluid label='Password'
                                                icon='key'
                                                placeholder='Password' />
                                    <Form.Input fluid label='Confirm Password'
                                                icon='key'
                                                placeholder='Confirm Password'/>
                                </Form.Group>
                                <Grid.Row><br/></Grid.Row>
                                <Button size='big' compact fluid color='orange'
                                type='Signup' onClick={this.handleClick}>
                                    Signup</Button>
                            </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
      </Router>
    )
  }
}
export default SignUp;
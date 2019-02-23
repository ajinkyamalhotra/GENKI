import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Button, Header, Form, Grid, Input } from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import '../styles/SignUp.css';

class SignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmedPassword: '',
      passwordsMatch: false,
      userType: '',
      secretID: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.RadioButtons = this.RadioButtons.bind(this);
    this.NameInput = this.NameInput.bind(this);
    this.SecretIDInput = this.SecretIDInput.bind(this);
    this.EmailInput = this.EmailInput.bind(this);
    this.PasswordInput = this.PasswordInput.bind(this);
    this.SignUpButton = this.SignUpButton.bind(this);
  }

  handleClick = (event) => {
    console.log(this.state.passwordsMatch);
    if (!(this.state.passwordsMatch)) {
      alert('passwords do not match');
    }
    //this.props.history.push('/SignUpConfirmation');

    event.preventDefault();
  };

  handleChange = (e, data) => {
    console.log(data.name);
    console.log(data.value);
    const key = data.name;
    if (data.name === 'password' || data.name === 'confirmedPassword') {
      const unchangedElement = (key === 'password') ?
                      this.state.confirmedPassword : this.state.password;
      const isMatch = data.value === unchangedElement;
      this.setState({
        passwordsMatch: isMatch,
        [key]: data.value
      });
    } else {
      this.setState({ [key]: data.value });
    }
    console.log("passwords match " + this.state.passwordsMatch);
  }

  RadioButtons() {
    return(
      <Form.Group inline>
          <label>User Type</label>
          <Form.Radio
              label='Student'
              value='student'
              name='userType'
              checked={this.state.userType === 'student'}
              onChange={this.handleChange}
          />
          <Form.Radio
              label='Teacher'
              value='teacher'
              name='userType'
              checked={this.state.userType === 'teacher'}
              onChange={this.handleChange}
          />
          <Form.Radio
              label='Admin'
              value='admin'
              name='userType'
              checked={this.state.userType === 'admin'}
              onChange={this.handleChange}
          />
      </Form.Group>
    )
  }

  NameInput() {
    return (
      <Form.Group widths='equal'>
          <Form.Input fluid label='First name'
                      placeholder='First name'
                      name='firstName'
                      value={this.state.firstName}
                      onChange={this.handleChange}/>
          <Form.Input fluid label='Last name'
                      placeholder='Last name'
                      name='lastName'
                      value={this.state.lastName}
                      onChange={this.handleChange}/>
      </Form.Group>
    )
  }

  SecretIDInput() {
    const text =
      "Class Secret ID (Only required if you want to be registered in a class)";

    return (
      <Form.Field>
          <label size='huge'>
            <Icon color='orange' name='user secret' />
            {text}
          </label>
          <Input  icon='user secret'
                  placeholder='Class Secret ID'
                  name='secretID'
                  value={this.state.secretID}
                  onChange={this.handleChange}/>
      </Form.Field>
    )
  }

  EmailInput() {
    return (
      <Form.Field>
          <label size='huge'>
            <Icon color='orange' name='mail' />
            Email
          </label>
          <Input  icon='mail'
                  placeholder='Email'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}/>
      </Form.Field>
    )
  }

  PasswordInput() {
    return (
      <Form.Group widths='equal'>
          <Form.Input fluid label='Password'
                      icon='key'
                      placeholder='Password'
                      type='password'
                      name='password'
                      value={this.state.password}
                      onChange={this.handleChange}/>
          <Form.Input fluid label='Confirm Password'
                      icon='key'
                      placeholder='Confirm Password'
                      type='password'
                      name='confirmedPassword'
                      value={this.state.confirmedPassword}
                      onChange={this.handleChange}/>
      </Form.Group>
    )
  }

  SignUpButton() {
    const {email, userType, passwordsMatch} = this.state;
    const isEnabled = (email.length>0) && userType && passwordsMatch;
    console.log("email= " + (email.length > 0));
    console.log("isEnabled = " + isEnabled);
    return(
      <Button size='big'
              compact fluid
              color='orange'
              type='Signup'
              disabled={!isEnabled}
              onClick={this.handleClick}
              >
              Signup
      </Button>
    )
  }

  render(){
    return(
        <Router>
            <div className='page'>
                <Grid  padded='vertically'>
                    <Divider />
                    <Grid.Row>
                        <Grid.Column width={4} className='signUpForm'>
                            <Divider />
                            <Grid.Row>
                                <Header as='h1' inverted color='orange'>
                                GENKI</Header>
                            </Grid.Row>
                            <Divider />
                            <Form inverted classname='signUpButtonAlignment'>
                                <this.RadioButtons />
                                <Divider />
                                <this.NameInput />
                                <Divider />
                                <this.SecretIDInput />
                                <Divider />
                                <this.EmailInput />
                                <Divider />
                                <this.PasswordInput />
                                <Divider />
                                <this.SignUpButton />
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

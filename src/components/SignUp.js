import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Button, Header, Form, Grid, Input } from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import axios from 'axios';
import '../styles/SignUp.css';

const path = require('path');

/**
 * SignUp form to become a member of the GenkiVN website.
 * The form's submit button is disabled until all necessary portions of the
 * form have been filled in.
 */
class SignUp extends Component{
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmedPassword: '',
      passwordsMatch: true,
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

  /**
   * Handle the submission of the form.
   * Pre-Req: All necessary portions of the form are filled in and validated.
   * @param event           The submission event
   */
  handleClick = (event) => {
    fetch('/signup', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {"Content-Type": "application/json"}
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    this.props.history.push('/SignUpConfirmation');
    event.preventDefault();
  };

  /**
   * Function that handles all changes to the form.
   * @param e           Event
   * @param data        Data sent from the
   */
  handleChange = (e, data) => {
    // Some debugging logging
    console.log(data.name);
    console.log(data.value);
    const key = data.name;
    // If one of the password inputs have changed do check to see if they match
    if (key === 'password' || key === 'confirmedPassword') {
      const unchangedElement = (key === 'password') ?
                      this.state.confirmedPassword : this.state.password;
      const isMatch = data.value === unchangedElement;
      this.setState({
        passwordsMatch: isMatch,
        [key]: data.value
      });
    } else {
      // Set any other part of the state other than the passwords
      this.setState({ [key]: data.value });
    }
  }

  /**
   * Function that validates email using regular expression.
   * @param email           Email(String) to validate
   */
  validateEmail(email) {
    const re = new RegExp([
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@/,
      /(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+/,
      /(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/
    ].map(r => r.source).join(''));
    return re.test(email);
  }

  /***************************************************************************
    Below are components designed specifically for the rendering of the SignUp
    form.  Those that include the this keyword need to be bound in the
    constructor of this class.
   **************************************************************************/

  /**
   * Returns a group of three radio buttons, one for each user type.
   */
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

  /**
   * Returns the inputs for First and Last name.
   */
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

  /**
   * Returns the input for the class secret ID.
   */
  SecretIDInput() {
    const text =
      "Class Secret ID (Only required for some students)";

    return (
      <Form.Field>
          <label size='huge'>
            <Icon color='orange' name='user secret' />
            {text}
          </label>
          <Input  icon='user secret'
                  placeholder='Class Secret ID'
                  name='secretID'
                  disabled={!(this.state.userType === 'student')}
                  value={this.state.secretID}
                  onChange={this.handleChange}/>
      </Form.Field>
    )
  }

  /**
   * Returns the input for email.
   */
  EmailInput() {
    const email = this.state.email;
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

  /**
   * Returns the input for the password and for the password confirmation.
   */
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
                      error={!this.state.passwordsMatch}
                      type='password'
                      name='confirmedPassword'
                      value={this.state.confirmedPassword}
                      onChange={this.handleChange}/>
      </Form.Group>
    )
  }

  /**
   * Returns the submission button.
   * This button is disabled until all of the necessary inputs have been
   * given.
   */
  SignUpButton() {
    const {email, userType, password, passwordsMatch} = this.state;
    const isEnabled = this.validateEmail(email)
                      && userType
                      && password.length>0
                      && passwordsMatch;
    console.log("email= " + this.validateEmail(email));
    console.log("isEnabled = " + isEnabled);
    return(
      <Button size='big'
              compact fluid
              color='orange'
              type='Signup'
              disabled={!isEnabled}
              onClick={this.handleClick}>
        Signup
      </Button>
    )
  }

  render(){
    return(
      <div className='page'>
        <Grid  padded='vertically'>
          <Divider />
          <Grid.Row>
            <Grid.Column width={4} className='signUpForm'>
              <Divider />
              <Grid.Row>
                <Header as='h1' inverted color='orange'>
                  GENKI
                </Header>
              </Grid.Row>
              <Divider />
              <Form inverted className='signUpButtonAlignment'>
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
    )
  }
}
export default SignUp;

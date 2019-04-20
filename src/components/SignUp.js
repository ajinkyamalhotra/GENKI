import React, {Component} from 'react';
import { Button, Header, Form, Grid, Input } from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import { Auth, API } from "aws-amplify";
import config from '../config';
import '../styles/SignUp.css';
import handlePasswordValidation from './HandlePasswordValidation';

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
      passwordValid: false,
      passwordErrors: {},
      userType: '',
      secretID: '',
      isSigningUp: false,
      confirmationCode: ''
    }

    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.RadioButtons = this.RadioButtons.bind(this);
    this.NameInput = this.NameInput.bind(this);
    this.SecretIDInput = this.SecretIDInput.bind(this);
    this.EmailInput = this.EmailInput.bind(this);
    this.PasswordInput = this.PasswordInput.bind(this);
    this.SignUpButton = this.SignUpButton.bind(this);
    this.handleConfirmationSubmit = this.handleConfirmationSubmit.bind(this);
    this.ConfirmationCodeInput = this.ConfirmationCodeInput.bind(this);
    this.SignUpForm = this.SignUpForm.bind(this);

  }

  /**
   * Handle the submission of the form.
   * Pre-Req: All necessary portions of the form are filled in and validated.
   * @param event           The submission event
   */
  async handleSignup(event) {
    event.preventDefault();
    // Change the state so that the Confirmation Code form appears
    this.setState({ isSigningUp: true });
    try {
      // Authenticate using Amplify and Cognito
      const newUser = await Auth.signUp({
        username: this.state.email,
        password: this.state.password,
        attributes: {
          email: this.state.email,
          name: this.state.firstName,
          family_name: this.state.lastName
        }
      });
      console.log(newUser);
      // The username assigned by Cognito
      let username = newUser.userSub;
      console.log(username);
      this.setState({ username: username });
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Function which invokes the addUserToGroup API to move the new user to
   * the appropriate Cognito group.
   */
  moveUserToGroup() {
    console.log('Moving User To Group');
    let apiName = 'genki-vn-beta';
    let path = '/group';
    let params = {
      body: {
        username: this.state.username,
        userType: this.state.userType,
        userPoolId: config.cognito.USER_POOL_ID
      }
    }
    return API.post(apiName, path, params);
  }

  /**
   * Function which invokes the classAdd API to create the User if they used
   * a secret id in sign up
   */
  addUserClass(){
    console.log('Adding class to user');
    let apiName = 'genki-vn-beta';
    let path ='/classAdd';
    let params = {
      body: {
        username: this.state.username,
        classID: this.state.secretID,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email
      }
    }
    return API.post(apiName, path, params);
  }

  /**
   * Function which invokes the createUser APIE to create the User if they didn't
   * use a secret id to sign up
   */
  createUser(){
    console.log('Creating user');
    let apiName = 'genki-vn-beta';
    let path ='/createUser';
    let params = {
      body: {
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email
      }
    }
    return API.post(apiName, path, params)
  }
  /**
   * Handle the event that the user submits their confirmation code.
   * @param  event            Confirmation event
   */
  async handleConfirmationSubmit(event) {
    event.preventDefault();
    try {
      console.log('Confirming Signup');
      await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
      console.log('Signing in');
      await Auth.signIn(this.state.email, this.state.password);
      console.log('Moving user to appropriate group');
      // Now that the user is confirmed, move to appropriate group
      await this.moveUserToGroup();
      let attributes = {
        sub: this.state.username,
        email: this.state.email,
        name: this.state.firstName,
        family_name: this.state.lastName
      }
      // Create the user and add class if classID was centered
      if(this.state.secretID){
        await this.addUserClass();
      }else{
        await this.createUser();
      }
      // Pass attributes to the App
      this.props.handleLogin(attributes, this.state.userType);
      // Display the HomePage
      this.props.history.push("/");
    } catch (e) {
      alert(e);
    }
  }

  /**
   * Function that handles all changes to the form.
   * @param e           Event
   * @param data        Data sent from the
   */
  handleChange = async (e, data) => {
    // Some debugging logging
    console.log(data.name);
    console.log(data.value);
    const key = data.name;
    // If one of the password inputs have changed do check to see if they match
    if ((key === 'password' || key === 'confirmedPassword')) {
      const unchangedElement = (key === 'password') ?
                      this.state.confirmedPassword : this.state.password;
      const isMatch = data.value === unchangedElement;

      await this.setState({passwordErrors: handlePasswordValidation(e, data)});
      const isValid = this.state.passwordErrors.valid;
      console.log(isMatch);
      console.log(isValid);
      await this.setState({
        passwordsMatch: isMatch,
        passwordValid: isValid,
        [key]: data.value
      });
    } else {
      // Set any other part of the state other than the passwords
      await this.setState({ [key]: data.value });
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
      /(?:[A-Z]{2}|edu|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/
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
              value='pendingTeacher'
              name='userType'
              checked={this.state.userType === 'pendingTeacher'}
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
          {this.state.passwordErrors.min ?
            "Password needs to be at least 8 characters." : null};
          {this.state.passwordErrors.max ?
            "Password needs to be less than 24 characters." : null};
          {this.state.passwordErrors.lowercase ?
            "Password needs to have at least 1 lowercase letter." : null};
          {this.state.passwordErrors.uppercase ?
            "Password needs to have at least 1 uppercase letter." : null};
          {this.state.passwordErrors.digits ?
            "Password needs to have at least 1 number 0-9." : null};
          {this.state.passwordErrors.symbols ?
            "Password needs to have at least 1 special symbol." : null};
          {this.state.passwordErrors.spaces ?
            "Password needs to have no spaces." : null};
      </Form.Group>
    )
  }

  /**
   * Returns the submission button.
   * This button is disabled until all of the necessary inputs have been
   * given.
   */
  SignUpButton() {
    const {email, userType, passwordValid, passwordsMatch} = this.state;
    const isEnabled = this.validateEmail(email)
                      && userType
                      && passwordValid
                      && passwordsMatch;
    console.log("email= " + this.validateEmail(email));
    console.log("isEnabled = " + isEnabled);
    return(
      <Button size='big'
              compact fluid
              color='orange'
              type='Signup'
              disabled={!isEnabled}
              onClick={this.handleSignup}>
        Signup
      </Button>
    )
  }

  /**
   * The signUp form itself.
   */
  SignUpForm() {
    return (
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
    )
  }

  /**
   * Form for inputing the confirmation code.
   */
  ConfirmationCodeInput() {
    return (
      <Form inverted>
        <Form.Input fluid label='Confirmation'
                    icon='key'
                    placeholder='Confirmation Code'
                    name='confirmationCode'
                    value={this.state.confirmationCode}
                    onChange={this.handleChange}/>
        <Button size='big'
                compact fluid
                color='orange'
                type='submit'
                onClick={this.handleConfirmationSubmit}>
          Submit
        </Button>
      </Form>
    )
  }

  render(){
    const isSigningUp = this.state.isSigningUp;
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
              {/* Switch display after user submits form. */}
              {!isSigningUp ? (<this.SignUpForm />)
                            : (<this.ConfirmationCodeInput />)}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
export default SignUp;

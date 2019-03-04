import React, {Component} from 'react';
import { Button, Header, Form, Grid, Input} from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import { Auth } from "aws-amplify";
import '../styles/Login.css';

var jwt = require('jsonwebtoken');

/**
 * Login component of Genki VN.  Communicates with backend server to verify
 * users.  Also includes routing to a signup page.
 */
class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    // Binding of functions to be able to access this
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.FormField = this.FormField.bind(this);
    this.ButtonOptions = this.ButtonOptions.bind(this);
  }

  /**
   * Deletes any entry into the text fields when component is unmounted.
   */
  componentWillUnmount() {
    this.setState({
      email: '',
      password: ''
    });
  }

  /**
   * Used to make the form a controlled component.
   * Will be called when the user types in the username or password textbox.
   * @param event           Represents the change coming from the form.
   */
  handleChange = (event) => {
    // Getting the name of the state variable which is changing.
    // Corresponds to the name property of the field.
    const key = event.target.name;
    this.setState({[key]: event.target.value});
  }

  /**
   * Handles the click from the SignUp button.
   * @param event           The Button click.
   */
  handleSignup = (event) => {
    event.preventDefault();
    // If the SignUp button was clicked, switch to the SignUp component
    console.log('signup clicked');
    this.props.history.push('/SignUp');
  } // End handleClick


  handleLogin = async event => {
  event.preventDefault();
    try {
      await Auth.signIn(this.state.email, this.state.password);
      let user = await Auth.currentAuthenticatedUser();
      const { attributes } = user;
      console.log(user);
      console.log(attributes);
      var decoded = jwt.decode(user.signInUserSession.accessToken.jwtToken);
      console.log(decoded);
      this.props.onLogin(attributes);
    } catch (e) {
      alert(e.message);
    }
  }

  /***************************************************************************
    Below are components designed specifically for the rendering of the login
    form.  Those that include the this keyword need to be bound in the
    constructor of this class.
   **************************************************************************/

  /**
   * Returns a Form.Field Semantic UI component.
   * @param props       Includes the color, name, and label for the field.
   */
  FormField(props) {
    const stateField = (props.label === 'email') ?
                                    this.state.email : this.state.password;
    return (
      <Form.Field>
        <this.Label color={props.color}
                    name={props.name}
                    label={props.label}/>

        <Input      value={stateField}
                    name={props.label}
                    onChange={this.handleChange}
                    type={props.type}
                    placeholder={props.placeholder}/>
      </Form.Field>
    )
  }

  /**
   * Returns a custom label.
   * @param props           Includes the color, name, and label.
   */
  Label(props) {
    return (
      <label size='huge'>
        <Icon color={props.color} name={props.name} />
          {props.label}
      </label>
    )
  }

  /**
   * Only two button options for this form, both of which use the same
   * handleClick function.
   */
  ButtonOptions() {
      return(
        <div>
          <this.GenkiButton color='orange'
                            type='Submit'
                            id='submit'
                            onClick={this.handleLogin}/>

          <this.GenkiButton floated='right'
                            color='orange'
                            type='Signup'
                            id='signup'
                            onClick={this.handleSignup}/>
        </div>
      )
  }

  /**
   * Buttons specifically for this page.
   * @param props           Color, floated, type, id, and onClick function.
   */
  GenkiButton(props) {
    return (
      <Button
        size='big'
        compact
        color={props.color}
        floated={props.floated}
        type={props.type}
        id={props.id}
        onClick={props.onClick}>
          {props.type}
      </Button>
    )
  }

  render(){
    return(
            <div className='page'> {
            <Grid  padded='vertically'>
                <Divider />
                <Grid.Row>
                    <Grid.Column width={4} className='loginForm'>
                        <Divider />
                        <Grid.Row>
                            <Header as='h1' inverted color='orange'>
                            GENKI</Header>
                        </Grid.Row>
                        <Divider />
                        <Form inverted>
                            <this.FormField
                              color='orange'
                              name='user circle'
                              label='email'
                              type='text'
                              placeholder='Email'
                            />
                            <Divider />
                            <this.FormField
                              color='orange'
                              name='lock circle'
                              label='password'
                              type='password'
                              placeholder='Password'
                            />
                            <Divider />
                            <this.ButtonOptions/>
                        </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        }

      </div>
    )
  }
}

export default Login;

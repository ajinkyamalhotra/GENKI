import React, {Component} from 'react';
import { Button, Header, Form, Grid, Input} from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import { API } from 'aws-amplify';
import config from '../config';
import '../styles/AddClassForm.css';

class StudentAddClassForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      classID: '',
      firstName: '',
      lastName: '',
      email: '',
      username: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.FormField = this.FormField.bind(this);
    this.SubmitButton = this.SubmitButton.bind(this);
    this.addUserClass = this.addUserClass.bind(this);
  }

  componentWillUnmount(){
    this.setState = {
      classID: '',
      firstName: '',
      lastName: '',
      email: '',
      username: ''
    }
  }
  /**
   * Used to make the form a controlled component.
   * Will be called when the user types in the username or password textbox.
   * @param event           Represents the change coming from the form.
   */
  handleChange = (event) => {
    console.log(event.target.value);
    // Getting the name of the state variable which is changing.
    // Corresponds to the name property of the field.
    const key = event.target.name;
    this.setState({[key]: event.target.value});
  }

  handleSubmit = async event => {
    event.preventDefault();
    let firstName = this.props.firstName;
    let lastName = this.props.lastName;
    await this.setState({firstName: firstName});
    await this.setState({lastName: lastName});
    let email = this.props.email;
    await this.setState({email: email});
    let username = this.props.username;
    await this.setState({username: username});
    console.log(this.props.username);
    console.log(this.state.classID);
    if(window.confirm("When you enroll in a class your instructor will be able to see your email, first and last name.")){
      try {
        await this.addUserClass();
      } catch (e) {
        alert("This class doesn't exist or you are already enrolled.");
      }
    }
  }
  /**
   * Function which invokes the classAdd API to create/update user with the
   * entered classID
   */
  addUserClass(){
    console.log('Adding class to user');
    let apiName = 'genki-vn-beta';
    let path ='/classAdd';
    let params = {
      body: {
        username: this.state.username,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        classID: this.state.classID
      }
    }
    console.log(params);
    return API.post(apiName, path, params);
  }
  /**
   * Returns a Form.Field Semantic UI component.
   * @param props       Includes the color, name, and label for the field.
   */
  FormField(props) {
    return (
      <Form.Field>
        <this.Label color={props.color}
                    name={props.name}
                    label={props.label}/>

        <Input      value={this.state.classID}
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
          {props.label}
      </label>
    )
  }

  /**
   * Returns the submission button.
   * This button is disabled until all of the necessary inputs have been
   * given.
   */
  SubmitButton() {
    const {classID} = this.state;
    const isEnabled = classID;
    console.log(classID);

    return(
      <Button size='big'
              compact fluid
              color='orange'
              type='Submit'
              disabled={!isEnabled}
              onClick={this.handleSubmit}>
        Submit
      </Button>
    )
  }

  render(){
    return(
      <div className='page'> {
        <Grid  padded='vertically'>
            <Divider />
            <Grid.Row>
                <Grid.Column width={4} className='addClassForm'>
                    <Divider />
                    <Grid.Row>
                        <Header as='h1' inverted color='orange'>
                        Add to Class</Header>
                    </Grid.Row>
                    <Divider />
                    <Form inverted>
                        <this.FormField
                          color='orange'
                          label='classID'
                          type='text'
                          placeholder='Class ID'
                        />
                        <Divider />
                        <this.SubmitButton/>
                    </Form>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    }

    </div>
    )
  }

}
export default StudentAddClassForm;
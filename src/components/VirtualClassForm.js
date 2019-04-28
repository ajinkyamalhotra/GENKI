import React, {Component} from 'react';
import { Button, Header, Form, Grid, Input} from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import { API } from 'aws-amplify';
import config from '../config';
import '../styles/VirtualClassForm.css';


class VirtualClassForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      Name: '',
      Section: '',
      Teacher: '',
      Semester: '',
      Time: '',
      Username: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.FormField = this.FormField.bind(this);
    this.createClass = this.createClass.bind(this);
    this.SubmitButton = this.SubmitButton.bind(this);
  }

  componentWillUnmount() {
    this.setState = {
      Name: '',
      Section: '',
      Teacher: '',
      Semester: '',
      Time: '',
      Username: ''
    }
  }

  /**
   * Used to make the form a controlled component.
   * Will be called when the user types in the textbox.
   * @param event           Represents the change coming from the form.
   */
  handleChange = (event) => {
    // Getting the name of the state variable which is changing.
    // Corresponds to the name property of the field.
    const key = event.target.name;
    this.setState({[key]: event.target.value});
  }

  handleSubmit = async event => {
    event.preventDefault();
    let teacher = this.props.firstName + ' ' + this.props.lastName;
    console.log(teacher);
    await this.setState({Teacher: teacher});
    console.log(this.state.Teacher);
    await this.setState({Username: this.props.username});
    console.log(this.state.Username);
    try {
      await this.createClass();
      this.props.history.push("/Home");
    } catch (e) {
      alert(e);
    }
  }

  createClass(){
    let className = this.state.Name;
    let section = this.state.Section;
    let classTime = this.state.Time;
    let semester = this.state.Semester;
    let teacher = this.state.Teacher;
    let username = this.state.Username;
    console.log(className);
    console.log(section);
    console.log(classTime);
    console.log(semester);
    console.log(teacher);
    console.log(username);
    let apiName = 'genki-vn-beta';
    let path = '/createClass';
    let params = {
      body: {
        ClassName: className,
        Section: section,
        Teacher: teacher,
        ClassTime: classTime,
        Semester: semester,
        Username: username
      }
    }
    return (API.post(apiName, path, params));
  }
  /**
   * Returns a Form.Field Semantic UI component.
   * @param props       Includes the color, name, and label for the field.
   */
  FormField(props) {
    let stateField;

    if(props.label === 'Name'){
      stateField=this.state.ClassName;
    }else if(props.label === 'Section'){
      stateField=this.state.Section;
    }else if(props.label === 'Semester'){
      stateField=this.state.Semester;
    }else{
      stateField=this.state.ClassTime;
    }
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
   * Returns the submission button.
   * This button is disabled until all of the necessary inputs have been
   * given.
   */
  SubmitButton() {
    let className = this.state.Name;
    let section = this.state.Section;
    let classTime = this.state.Time;
    let semester = this.state.Semester;
    const isEnabled = className && section && classTime && semester;

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
                <Grid.Column width={4} className='virtualClassForm'>
                    <Divider />
                    <Grid.Row>
                        <Header as='h1' inverted color='orange'>
                        Create Class</Header>
                    </Grid.Row>
                    <Divider />
                    <Form inverted>
                        <this.FormField
                          color='orange'
                          label='Name'
                          type='text'
                          placeholder='Name'
                        />
                        <Divider />
                        <this.FormField
                          color='orange'
                          label='Section'
                          type='text'
                          placeholder='Section'
                        />
                        <Divider />
                        <this.FormField
                          color='orange'
                          label='Semester'
                          type='text'
                          placeholder='Semester'
                        />
                        <Divider />
                        <this.FormField
                          color='orange'
                          label='Time'
                          type='text'
                          placeholder='Time'
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

export default VirtualClassForm;

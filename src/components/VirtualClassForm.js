import React, {Component} from 'react';
import { Button, Header, Form, Grid, Input} from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import { API } from 'aws-amplify';

import '../styles/VirtualClassForm.css';

class VirtualClassForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      ClassName: '',
      Section: '',
      Teacher: '',
      Semester: '',
      ClassTime: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.FormField = this.FormField.bind(this);
    this.ButtonOptions = this.ButtonOptions.bind(this);
    this.createClass = this.createClass.bind(this);
  }

  componentWillUnmount() {
    this.setState = {
      ClassName: '',
      Section: '',
      Teacher: '',
      Semester: '',
      ClassTime: ''
    }
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

  handleSubmit = async event => {
    event.preventDefault();
    let teacher = this.props.firstName + ' ' + this.props.lastName;
    this.setState({Teacher: teacher});
    let className = this.state.ClassName;
    let section = this.state.Section;
    let classTime = this.state.ClassTime;
    let semester = this.state.Semester;
    let data = {
      ClassName: className,
      Section: section,
      Teacher: teacher,
      ClassTime: classTime,
      Semester: semester
    }
    try {
      await this.createClass(data);
      this.props.history.push("/");
    } catch (e) {
      alert(e);
    }

  }

  createClass(data){
    return (API.post('genki-vn-beta', '/createVirtualClass', data));
  }
  /**
   * Returns a Form.Field Semantic UI component.
   * @param props       Includes the color, name, and label for the field.
   */
  FormField(props) {
    let stateField;

    if(props.label == 'Class Name'){
      stateField=this.state.className;
    }else if(props.label == 'Section'){
      stateField=this.state.section;
    }else if(props.label == 'Semester'){
      stateField=this.state.semester;
    }else{
      stateField=this.state.classTime;
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
   * Only one button options for this form, which will use
   * handleSubmit function.
   */
  ButtonOptions() {
      return(
        <div>
          <this.GenkiButton color='orange'
                            type='Submit'
                            id='submit'
                            onClick={this.handleSubmit}/>
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
                          label='Class Name'
                          type='text'
                          placeholder='Class Name'
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
                          label='Class Time'
                          type='text'
                          placeholder='Class Time'
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

export default VirtualClassForm;
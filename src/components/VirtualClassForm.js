import React, {Component} from 'react';
import { Button, Form, Input, Icon, Modal } from 'semantic-ui-react';
import { API } from 'aws-amplify';
import '../styles/VirtualClassForm.css';

/**
 * This component renders a modal which teachers can use to create a new class.
 * It is a controlled component which is controlled by the StudentTeacherHome.
 */
class VirtualClassForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      Name: '',
      Section: '',
      Teacher: '',
      Semester: '',
      Time: '',
      Username: '',
      Email: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.FormField = this.FormField.bind(this);
    this.createClass = this.createClass.bind(this);
    this.CreateClassModal = this.CreateClassModal.bind(this);
  }

  componentWillUnmount() {
    this.setState = {
      Name: '',
      Section: '',
      Teacher: '',
      Semester: '',
      Time: '',
      Username: '',
      Email: ''
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

  handleCancel() {
    this.setState({
      Name: '',
      Section: '',
      Teacher: '',
      Semester: '',
      Time: '',
      Username: '',
      Email: ''
    });
    this.props.closeCreateClassModal();
  }

  async handleSubmit(event) {
    event.preventDefault();
    let teacher = this.props.firstName + ' ' + this.props.lastName;
    console.log(teacher);
    await this.setState({Teacher: teacher});
    console.log(this.state.Teacher);
    await this.setState({Username: this.props.username});
    console.log(this.state.Username);
    await this.setState({Email: this.props.email});
    console.log(this.state.Email);
    try {
      await this.createClass();
      this.setState({
        Name: '',
        Section: '',
        Teacher: '',
        Semester: '',
        Time: '',
        Username: '',
        Email: ''
      });
      this.props.closeCreateClassModal();
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
    let email = this.state.Email;
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
        Username: username,
        Email: email
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

  CreateClassModal() {
    let className = this.state.Name;
    let section = this.state.Section;
    let classTime = this.state.Time;
    let semester = this.state.Semester;
    const isEnabled = className && section && classTime && semester;
    return(
      <Modal  open={this.props.showCreateClassModal}
              onClose={this.props.closeCreateClassModal}
              closeIcon>
        <Modal.Header>
          Create A Class
        </Modal.Header>
        <Modal.Content>
          <Form>
            <this.FormField
              color='orange'
              label='Name'
              type='text'
              placeholder='Name'
            />
            <this.FormField
              color='orange'
              label='Section'
              type='text'
              placeholder='Section'
            />
            <this.FormField
              color='orange'
              label='Semester'
              type='text'
              placeholder='Semester'
            />
            <this.FormField
              color='orange'
              label='Time'
              type='text'
              placeholder='Time'
            />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='delete'
                  negative
                  labelposition='right'
                  content='Cancel'
                  onClick={this.handleCancel} />
          <Button icon='checkmark'
                  positive
                  labelposition='right'
                  content='Submit'
                  disabled={!isEnabled}
                  onClick={this.handleSubmit} />
        </Modal.Actions>
      </Modal>
    )
  }

  render(){
    return(
      <React.Fragment>
        <this.CreateClassModal />
      </React.Fragment>
    )
  }

}

export default VirtualClassForm;

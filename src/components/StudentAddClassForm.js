import React, {Component} from 'react';
import { Button, Form, Modal} from 'semantic-ui-react';
import { API } from 'aws-amplify';
import '../styles/AddClassForm.css';

/**
 * This component renders the form students use to enroll themselves into
 * a Virtual Class.  It renders as a modal, receiving open and close functions
 * from the StudentTeacherHome component.  That is, it is a controlled
 * component which is controlled by the StudentTeacherHome component.
 * @extends Component
 */
class StudentAddClassForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      classID: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleClassIDChange = this.handleClassIDChange.bind(this);
    this.ClassIDInput = this.ClassIDInput.bind(this);
    this.addUserClass = this.addUserClass.bind(this);
    this.EnrollModal = this.EnrollModal.bind(this);
  }

  /**
   * Clear the form.
   */
  componentWillUnmount(){
    this.setState ({ classID: '' });
  }
  /**
   * Used to make the form a controlled component.
   * Will be called when the user types in the username or password textbox.
   * @param event           Represents the change coming from the form.
   */
  handleClassIDChange(e, data) {
    this.setState({ classID: data.value });
  }

  /**
   * Handle the cancellation of the form by clearing the form.
   */
  handleCancel() {
    this.setState({ classID: '' });
    this.props.closeEnrollModal();
  }

  /**
   * Submit the form to enroll in the class.
   */
  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.classID);
    if(window.confirm("When you enroll in a class your instructor will be able to see your email, first and last name.")){
      try {
        await this.addUserClass();
        this.props.closeEnrollModal();
      } catch (e) {
        alert("This class doesn't exist or you are already enrolled.");
      }
    }
    this.setState({ classID: '' })
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
        username: this.props.username,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        email: this.props.email,
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
  ClassIDInput() {
    return (
      <Form.Input   value={this.state.classID}
                    label='Class ID'
                    id='Class ID'
                    onChange={this.handleClassIDChange}
                    placeholder='Class ID' />
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
   * This is the modal itself.
   */
  EnrollModal() {
    return(
      <Modal  open={this.props.showEnrollModal}
              onClose={this.props.closeEnrollModal}
              closeIcon>
        <Modal.Header>
          Add Yourself To A Class:
        </Modal.Header>
        <Modal.Content>
          <Form>
            <this.ClassIDInput />
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
                  disabled={this.state.classID.length === 0}
                  onClick={this.handleSubmit} />
        </Modal.Actions>
      </Modal>
    )
  }

  render(){
    return(
      <React.Fragment>
        <this.EnrollModal />
      </React.Fragment>
    )
  }

}
export default StudentAddClassForm;

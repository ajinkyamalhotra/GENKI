import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import VirtualClassList from './VirtualClassList';
import ClassHome from './ClassHome';
import StudentAddClassForm from './StudentAddClassForm';



/**
 * This component renders the Home page that both students and teachers will
 * see.
 */
class StudentTeacherHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classSelected: false,
      showEnrollModal: false
    }

    this.handleClassSelection = this.handleClassSelection.bind(this);
    this.EnrollInClassButton = this.EnrollInClassButton.bind(this);
    this.showEnrollInClassModal = this.showEnrollInClassModal.bind(this);
    this.closeEnrollInClassModal = this.closeEnrollInClassModal.bind(this);
  }

  showEnrollInClassModal() {
    this.setState({ showEnrollModal: true });
  }

  closeEnrollInClassModal() {
    this.setState({ showEnrollModal: false });
  }

  /**
   * Function which is passed to the VirtualClassList that handles when a
   * class selection is made.
   *
   * @param  clazz  The class object which contains all class information
   * @param  event  The click event
   */
  handleClassSelection(clazz, event) {
    event.preventDefault();
    console.log(JSON.stringify(clazz));
    this.setState({ classSelected: true, clazz: clazz });
  }

  EnrollInClassButton() {
    return (
      <Button color='orange'
              icon
              labelposition='left'
              onClick={this.showEnrollInClassModal}>
        <Icon name='add' />
        Enroll In A Class
      </Button>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.props.userType === 'student'
          && <this.EnrollInClassButton />
        }
        {this.props.userType === 'student' && <StudentAddClassForm  showEnrollModal={this.state.showEnrollModal}
                                  closeEnrollModal={this.closeEnrollInClassModal}
                                  {...this.props}/>}

        {this.state.classSelected ? <ClassHome {...this.props} clazz={this.state.clazz} /> :
          <VirtualClassList {...this.props}
                            classSelect={this.handleClassSelection} />}
      </React.Fragment>
    )
  }
}

export default StudentTeacherHome;

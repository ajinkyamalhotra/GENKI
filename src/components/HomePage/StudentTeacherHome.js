import React, { Component } from 'react';
import { Icon, Divider, Card, Image, Grid } from 'semantic-ui-react';
import VirtualClassList from './VirtualClassList';
import ClassHome from './ClassHome';
import StudentAddClassForm from '../Forms/StudentAddClassForm';
import VirtualClassForm from '../Forms/VirtualClassForm';
import logo from '../../images/logo.png';


/**
 * This component renders the Home page that both students and teachers will
 * see.
 */
class StudentTeacherHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classSelected: false,
      showEnrollModal: false,
      showCreateClassModal: false
    }

    this.handleClassSelection = this.handleClassSelection.bind(this);
    this.EnrollInClassButton = this.EnrollInClassButton.bind(this);
    this.showEnrollInClassModal = this.showEnrollInClassModal.bind(this);
    this.closeEnrollInClassModal = this.closeEnrollInClassModal.bind(this);
    this.showCreateClassModal = this.showCreateClassModal.bind(this);
    this.closeCreateClassModal = this.closeCreateClassModal.bind(this);
    this.CreateClassButton = this.CreateClassButton.bind(this);
    this.returnHome = this.returnHome.bind(this);
  }

  showEnrollInClassModal() {
    this.setState({ showEnrollModal: true });
  }

  closeEnrollInClassModal() {
    this.setState({ showEnrollModal: false });
  }

  showCreateClassModal() {
    this.setState({ showCreateClassModal: true });
  }

  closeCreateClassModal() {
    this.setState({ showCreateClassModal: false });
  }

  returnHome() {
    this.setState({ classSelected: false, clazz: {} });
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
      <Card color='orange'
              onClick={this.showEnrollInClassModal}>
        <Card.Content>
          <Card.Header>
            <Icon name='add' /> Enroll In A Class
          </Card.Header>
        </Card.Content>
      </Card>
    )
  }

  CreateClassButton() {
    return (
      <Card color='orange'
              onClick={this.showCreateClassModal}>
        <Card.Content>
          <Card.Header>
            <Icon name='add' /> Create A Class
          </Card.Header>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <React.Fragment>
        <Divider hidden fitted />
        {!this.state.classSelected && this.props.userType === 'student' &&
          <this.EnrollInClassButton /> }
        {!this.state.classSelected &&  this.props.userType === 'teacher' && <this.CreateClassButton /> }
        {this.props.userType === 'student' &&
          <StudentAddClassForm  showEnrollModal={this.state.showEnrollModal}
                                closeEnrollModal={this.closeEnrollInClassModal}
                                {...this.props}/> }
        {this.props.userType === 'teacher' &&
          <VirtualClassForm showCreateClassModal={this.state.showCreateClassModal}
                            closeCreateClassModal={this.closeCreateClassModal}
                            {...this.props}/>}
        <Divider hidden fitted/>
        <Grid columns={2}>
          <Grid.Column>
            {this.state.classSelected ? <ClassHome {...this.props} clazz={this.state.clazz} goBack={this.returnHome} /> :
              <VirtualClassList {...this.props}
                                classSelect={this.handleClassSelection} />}
          </Grid.Column>
          <Grid.Column>
            <Image src={logo} />
          </Grid.Column>
        </Grid>
      </React.Fragment>
    )
  }
}

export default StudentTeacherHome;

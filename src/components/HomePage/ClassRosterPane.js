import React, { Component } from 'react';
import { API } from 'aws-amplify';
import { List, Button, Popup, Header, Modal } from 'semantic-ui-react';

/**
 * This component renders the class roster pane for a particular class.  It can
 * be found on the ClassHome Page.
 */
class ClassRosterPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: {},
      selectAll: false,
      showRemoveModal: false,
      isLoading: true
    }

    this.getClassRoster = this.getClassRoster.bind(this);
    this.ClassRoster = this.ClassRoster.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.SelectionButton = this.SelectionButton.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.WriteEmailButton = this.WriteEmailButton.bind(this);
    this.toggleRemoveModal = this.toggleRemoveModal.bind(this);
    this.RemoveFromClassButton = this.RemoveFromClassButton.bind(this);
    this.RemoveFromClassModal = this.RemoveFromClassModal.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  /**
   * When the component mounts, verify props have propogated and then fetch
   * roster.
   */
  componentDidMount() {
    if (typeof this.props.clazz.ClassID !== 'undefined') {
      this.getClassRoster();
    }
  }

  /**
   * If the props have not propogated when the component mounts, check again
   * on component update.
   * @param prevProps     The previous props
   */
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps
                      && typeof this.props.clazz.ClassID !== 'undefined') {
      this.getClassRoster();
    }
  }

  /**
   * This function retrieves the class roster from Dynamo via Lambda.
   */
  async getClassRoster() {
    let apiName = 'genki-vn-beta';
    let classID = this.props.clazz.ClassID;
    console.log('Getting class roster for: ' + classID);
    let path = `/getClassRoster/${classID}`;
    try {
      // Retrieve class roster
      let classRoster = await API.get(apiName, path);
      console.log('class roster: ' + JSON.stringify(classRoster));
      // Create a roster object that contains each student.
      // The key for each student is their username.
      // Each can be found in this.state.roster.USERNAME
      let roster = classRoster.reduce((accumulator, student) => {
        let username = student.UserInfo.Username;
        student['isSelected'] = false;
        if (this.props.clazz.Email !== student.UserInfo.Email) {
          return({
            ...accumulator,
            [username]: student
          })
        } else {
          return(
            {
              ...accumulator
            }
          )
        }
      }, {});
      this.setState({ roster: roster, isLoading: false });
    } catch (e) {
      console.log('problem getting roster');
      console.log(e, e.stack);
    }
  }

  /**
   * Handles the selectAll button.
   * Cycles through each student and selects them on the screen.
   * @return {[type]} [description]
   */
  handleSelectAll() {
    let selectAll = !this.state.selectAll;
    Object.keys(this.state.roster).forEach(username => {
      let student = this.state.roster[username];
      student.isSelected = selectAll;
      this.setState(prevState => ({
        roster: {
          ...prevState.roster,
          [username]: student
        }
      }));
    });
    this.setState({ selectAll: selectAll});
  }

  /**
   * Handles the checking or unchecking of a checkbox next to a student's name.
   */
  handleCheckboxChange(e) {
    let username = e.target.name;
    console.log(username);
    let student = this.state.roster[username];
    student.isSelected = !student.isSelected;
    this.setState(prevState => ({
      roster: {
        ...prevState.roster,
        [username]: student
      }
    }));
  }

  /**
   * When the professor decides to email the students, this function will
   * create the email and open the default email client.  All students that
   * are selected will have their email in the bcc line of the email.
   */
  handleEmail() {
    let bcc = '?bcc=';
    let firstEmail = true;
    // Retrieve the emails of each selected student.
    Object.keys(this.state.roster).forEach(username => {
      if (this.state.roster[username].isSelected) {
        if (!firstEmail) {
          bcc = bcc + ',';
        } else {
          firstEmail = false;
        }
        bcc = bcc + this.state.roster[username].UserInfo.Email;
      }
    });
    // Open the default mail client in a new tab.
    window.open('mailto:' + bcc);
  }

  toggleRemoveModal() {
    this.setState({ showRemoveModal: !this.state.showRemoveModal });
  }

  async handleRemove() {
    let removeStudentList = [];
    Object.keys(this.state.roster).forEach(username => {
      if (this.state.roster[username].isSelected) {
        removeStudentList.push(username);
      }
    });
    try {
      console.log('Removing students: ' + JSON.stringify(removeStudentList));
      let apiName = 'genki-vn-beta';
      let path = '/removeFromClass';
      let params = {
        body: {
          usernames: removeStudentList,
          classID: this.props.clazz.ClassID
        }
      }
      await API.post(apiName, path, params);
      this.toggleRemoveModal();
      this.getClassRoster();
    } catch(e) {
      console.log(e);
    }
  }

  /**
   * This creates the actual list component for each student.
   * Their name appears in the form last name, first name.
   * If the user is a teacher, each name will have a checkbox next to it so
   * that the teacher can email/remove them from the class.
   */
  RosterItem(student, includeCheckbox) {
    console.log(student);
    let username = student.UserInfo.Username;
    let lastName =  student.UserInfo.LastName;
    let firstName = student.UserInfo.FirstName;

    return(
      <List.Item key={username}>
        <List.Content>
          <List.Header>
            {this.props.userType==='teacher' && includeCheckbox &&
            <input  type='checkbox'
                    checked={student.isSelected}
                    name={username}
                    onChange={this.handleCheckboxChange}/>}
                  {' ' + lastName + ', ' + firstName}
          </List.Header>
        </List.Content>
      </List.Item>
    )
  }

  /**
   * The class roster consists of a list of RosterItem.
   */
  ClassRoster() {
    console.log(this.state.roster);
    let rosterKeys = Object.keys(this.state.roster);
    // Sort the students alphabetically by last name.
    rosterKeys.sort((a,b) => {
      if (this.state.roster[a].UserInfo.LastName < this.state.roster[b].UserInfo.LastName) {
        return -1;
      } else {
        return 1;
      }
    });
    var rosterList = [];
    rosterKeys.forEach((username) => {
      if (this.props.userType !== 'teacher' ||
        (this.props.userType === 'teacher' && username !== this.props.username)) {
          rosterList.push(this.RosterItem(this.state.roster[username], true))
        }
    });
    return(
      <List celled>
        {rosterList}
      </List>
    )
  }

  /**
   * The SelectAll/DeselectAll button.
   */
  SelectionButton() {
    return(
      <Button color='orange' onClick={this.handleSelectAll}>
        {this.state.selectAll ? "Unselect All" : "Select All"}
      </Button>

    )
  }

  /**
   * Email the selected students.
   * This contains a popup description of the button.
   */
  WriteEmailButton() {
    return(
      <Popup trigger={<Button icon='write'
                              floated='right'
                              onClick={this.handleEmail}/>}
             content='Email Selected' />
    )
  }

  RemoveFromClassModal() {
    let removeStudentList = [];
    Object.keys(this.state.roster).forEach(username => {
      if (this.state.roster[username].isSelected) {
        removeStudentList.push(this.RosterItem(this.state.roster[username], false));
      }
    });
    return(
      <Modal open={this.state.showRemoveModal} onClose={this.toggleRemoveModal} closeIcon>
        <Modal.Header>
          Remove These Students?
        </Modal.Header>
        <Modal.Content>
          <List>
            {removeStudentList}
          </List>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='delete'
                  negative
                  labelposition='right'
                  content='Cancel'
                  onClick={this.toggleRemoveModal} />
          <Button icon='checkmark'
                  positive
                  labelposition='right'
                  content='Remove Students'
                  onClick={this.handleRemove} />
        </Modal.Actions>
      </Modal>
    )
  }

  RemoveFromClassButton() {
    return(
      <Button icon='delete' floated='right' onClick={this.toggleRemoveModal}/>
    )
  }

  render() {
    return(
      <div>
        <Header size='huge'>
          Class Roster for {' ' + this.props.clazz.ClassName}
        </Header>
        {this.props.userType === 'teacher' &&
          <this.SelectionButton />}
        {this.props.userType === 'teacher' &&
          <this.WriteEmailButton />}
        {this.props.userType === 'teacher' &&
          <this.RemoveFromClassButton />}
        {this.state.isLoading ? null: <this.ClassRoster />}
        {this.props.userType === 'teacher' &&
          <this.RemoveFromClassModal />}
      </div>
    );
  }
}

export default ClassRosterPane;

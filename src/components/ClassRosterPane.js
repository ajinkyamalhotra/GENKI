import React, {Component, Linking} from 'react';
import { API } from 'aws-amplify';
import { List, Checkbox, Button, Popup, Icon, Header } from 'semantic-ui-react';


class ClassRosterPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: {},
      selectAll: false,
      isLoading: true
    }

    this.getClassRoster = this.getClassRoster.bind(this);
    this.ClassRoster = this.ClassRoster.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);
    this.SelectionButton = this.SelectionButton.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.WriteEmailButton = this.WriteEmailButton.bind(this);
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

  async getClassRoster() {
    let apiName = 'genki-vn-beta';
    let classID = this.props.clazz.ClassID;
    console.log('Getting class roster for: ' + classID);
    let path = `/getClassRoster/${classID}`;
    try {
      let classRoster = await API.get(apiName, path);
      console.log('class roster: ' + JSON.stringify(classRoster));
      let roster = classRoster.reduce((accumulator, student) => {
        let username = student.UserInfo.Username;
        student['isSelected'] = false;
        return({
          ...accumulator,
          [username]: student
        })
      }, {});
      this.setState({ roster: roster, isLoading: false });
    } catch (e) {
      console.log('problem getting roster');
      console.log(e, e.stack);
    }
  }

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

  handleEmail() {
    let bcc = '?bcc=';
    let firstEmail = true;
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
    window.open('mailto:' + bcc);
  }

  RosterItem(student) {
    console.log(student);
    let username = student.UserInfo.Username;
    let lastName =  student.UserInfo.LastName;
    let firstName = student.UserInfo.FirstName;

    return(
      <List.Item key={username}>
        <List.Content>
          <List.Header>
            {this.props.userType==='teacher' &&
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

  ClassRoster() {
    console.log(this.state.roster);
    let rosterKeys = Object.keys(this.state.roster);
    rosterKeys.sort((a,b) => {
      if (this.state.roster[a].UserInfo.LastName < this.state.roster[b].UserInfo.LastName) {
        return -1;
      } else {
        return 1;
      }
    });
    var rosterList = [];
    rosterKeys.forEach((username) => {
      rosterList.push(this.RosterItem(this.state.roster[username]))
    });
    return(
      <List celled>
        {rosterList}
      </List>
    )
  }

  SelectionButton() {
    return(
      <Button color='orange' onClick={this.handleSelectAll}>
        {this.state.selectAll ? "Unselect All" : "Select All"}
      </Button>

    )
  }

  WriteEmailButton() {
    return(
      <Popup trigger={<Button icon='write' floated='right' onClick={this.handleEmail}/>} content='Email Selected' />
    )
  }

  render() {
    return(
      <div>
        <Header size='huge'>
          Class Roster for {' ' + this.props.clazz.ClassName}
        </Header>
        {this.props.userType === 'teacher' &&
          <this.SelectionButton /> &&
          <this.WriteEmailButton />}
        {this.state.isLoading ? null: <this.ClassRoster />}
      </div>
    );
  }
}

export default ClassRosterPane;

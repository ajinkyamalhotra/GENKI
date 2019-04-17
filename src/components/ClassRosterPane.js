import React, {Component} from 'react';
import { API } from 'aws-amplify';
import { List, Checkbox } from 'semantic-ui-react';


class ClassRosterPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: {},
      isLoading: true
    }

    this.getClassRoster = this.getClassRoster.bind(this);
    this.ClassRoster = this.ClassRoster.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
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

  RosterItem(student) {
    console.log(student);
    let username = student.UserInfo.Username;
    let lastName =  student.UserInfo.LastName;
    let firstName = student.UserInfo.FirstName;

    return(
      <List.Item key={username}>
        <List.Content>
          <List.Header><input type='checkbox' checked={student.isSelected} name={username} onChange={this.handleCheckboxChange}/>{' ' + lastName + ', ' + firstName}</List.Header>
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

  render() {
    return(
      <div>
        {this.state.isLoading ? null: <this.ClassRoster />}
      </div>
    );
  }
}

export default ClassRosterPane;

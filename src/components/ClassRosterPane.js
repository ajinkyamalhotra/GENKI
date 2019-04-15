import React, {Component} from 'react';
import { API } from 'aws-amplify';
import { List, Checkbox } from 'semantic-ui-react';


class ClassRosterPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roster: [],
      isLoading: true
    }

    this.getClassRoster = this.getClassRoster.bind(this);
    this.ClassRoster = this.ClassRoster.bind(this);
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
      this.setState({ roster: classRoster, isLoading: false });
    } catch (e) {
      console.log('problem getting roster');
      console.log(e, e.stack);
    }
  }

  RosterItem(student) {
    let lastName =  student.UserInfo.LastName;
    let firstName = student.UserInfo.FirstName;
    let username = student.UserInfo.Username;
    return(
      <List.Item key={username}>
        <List.Content>
          <List.Header><input type='checkbox'/>{' ' + lastName + ', ' + firstName}</List.Header>
        </List.Content>
      </List.Item>
    )
  }

  ClassRoster() {
    console.log(this.state.roster);
    let roster = this.state.roster;
    roster.sort((a,b) => {
      if (a.UserInfo.LastName < b.UserInfo.LastName) {
        return -1;
      } else {
        return 1;
      }
    });
    var rosterList = roster.map((student) => this.RosterItem(student));
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

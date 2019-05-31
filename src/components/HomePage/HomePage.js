import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react';
import { API } from 'aws-amplify';
import StudentTeacherHome from './StudentTeacherHome';
import config from '../../config';
import BottomFooterBar from '../BottomFooterBar/BottomFooterBar';

/**
 * This is the HomePage of the Genki VN App.
 */
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pendingTeachers: []
    }

    this.getPendingTeachers = this.getPendingTeachers.bind(this);
    this.PendingCards = this.PendingCards.bind(this);
    this.ApproveDeclineButtons = this.ApproveDeclineButtons.bind(this);
    this.handleApproval = this.handleApproval.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
    this.updatePending = this.updatePending.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidUpdate(prevProps) {
    // If the user is an admin, get the pending teachers to approve
    if (this.props !== prevProps && this.props.userType === 'admin') {
      this.getPendingTeachers();
    }
  }

  /**
   * Function that fetches the pending teachers from the server.
   */
  async getPendingTeachers() {
    console.log('fetching pending teachers');
    let apiName = config.API_NAME;
    let groupName = 'pendingTeacher';
    // Funny symbol to setup URL parameters
    let path = `/listGroup/${groupName}`;
    try {
      let pendingTeachers = await API.get(apiName, path);
      // Create a new array with only information we need
      pendingTeachers = pendingTeachers.map((user) => {
        let attributes = user.Attributes.reduce((accumulator, attribute) => ({
          ...accumulator,
          [attribute.Name]: attribute.Value
        }), {}); // End attributes object creation
        return {
          email: attributes.email,
          firstName: attributes.name,
          lastName: attributes.family_name,
          username: attributes.sub
        };
      }); // End pendingTeachers creation
      console.log('Pending Teachers: ');
      console.log(pendingTeachers);
      this.setState({ pendingTeachers: pendingTeachers });
    } catch (e) {
      console.log('Issue fetching pending teachers');
      console.log(e, e.stack);
    }
  }

  /**
   * One of the teachers should be removed from the pending list.
   * @param  email          The email of the pending teacher to be removed
   */
  updatePending(email) {
    // Find all of the teachers who are NOT the teacher to be removed
    let newPending = this.state.pendingTeachers
                                        .filter((user) => user.email !== email);
    // Update the state with the new list
    this.setState({pendingTeachers: newPending});
  }

  /**
   * Get the user information from the pendingTeachers list.
   * @param  email          Email of the teacher to find
   */
  getUser(email) {
    let user = this.state.pendingTeachers.filter((user) => user.email===email);
    return user[0];
  }

  submitDecision(approved, username) {
    let apiName = config.API_NAME;
    let path = '/handlePendingTeacher';
    let params = {
      body: {
        username: username,
        userPoolId: config.cognito.USER_POOL_ID,
        approved: approved
      }
    }
    return API.post(apiName, path, params);
  }

  /**
   * Handle an approval event.
   * @param  event          Event target.id holds user email
   */
  handleApproval(event) {
    const email = event.target.id;
    let approvedUser = this.getUser(email);
    this.submitDecision(true, approvedUser.username).then(response => {
      alert(approvedUser.firstName + ' approved successfully!');
      this.updatePending(email);
    }).catch(error => {
      alert(approvedUser.firstName + ' could not be approved');
    })
  }

  /**
   * Handle a decline event.
   * @param  event          Declined user's email in target.id
   */
  handleDecline(event) {
    const email = event.target.id;
    let declinedUser = this.getUser(email);
    this.submitDecision(false, declinedUser.username).then(response => {
      alert(declinedUser.firstName + ' declined successfully!');
      this.updatePending(email);
    }).catch(error => {
      alert(declinedUser.firstName + ' could not be declined.');
    })
  }

  /***************************************************************************
    Below are components designed specifically for the rendering of the
    HomePage.  Those that include the this keyword need to be bound in the
    constructor of this class.
   **************************************************************************/

  /**
   * Button configuration for approval or denial.
   * @param props       Contains the email of the user, used as id
   */
  ApproveDeclineButtons(props) {
    const email = props.user;
    return(
      <div className='ui two buttons'>
        <Button basic color='green' id={email} onClick={this.handleApproval}>
          Approve
        </Button>
        <Button basic color='red' id={email} onClick={this.handleDecline}>
          Decline
        </Button>
      </div>
    )
  }

  /**
   * Pending teacher card, one for each pendingTeacher
   * @param user      The user, contains all user info
   */
  PendingTeacherCard(user) {
    return(
      <Card key={user.email} color='orange'>
        <Card.Content>
          <Card.Header textAlign='left' className='cardHeader'>
            {user.firstName + ' ' + user.lastName}
          </Card.Header>
          <Card.Meta>New Instructor</Card.Meta>
          <Card.Description>
            {user.firstName + ' wants to be added as a new Instructor.'}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <this.ApproveDeclineButtons user={user.email} />
        </Card.Content>
      </Card>
    );
  }

  /**
   * Creates the cards for all pendingTeachers.
   * @param props         Contains the list of all pendingTeachers
   */
  PendingCards(props) {
    // Only generate cards if user is admin
    if (this.props.userType === 'admin') {
      // Map each user to a card
      var cards = props.userList.map((user) => this.PendingTeacherCard(user));
      return (
        <Card.Group centered>
          {cards}
        </Card.Group>
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <div>
        {this.props.isAuthenticated && this.props.userType !== 'admin' ?
                      <StudentTeacherHome {...this.props} /> : null}
        {this.props.userType === 'admin' ?
            <this.PendingCards userList={this.state.pendingTeachers} /> : null}
            <BottomFooterBar/>
      </div>
    )
  }
}

export default HomePage;

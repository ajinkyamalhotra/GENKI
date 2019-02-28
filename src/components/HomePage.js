import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react'

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userType: props.userType,
      pendingTeachers: []
    }
    if (props.userType === 'admin') {
      this.getPendingTeachers();
    }
    this.getPendingTeachers = this.getPendingTeachers.bind(this);
    this.PendingCards = this.PendingCards.bind(this);
    this.ApproveDeclineButtons = this.ApproveDeclineButtons.bind(this);
    this.handleApproval = this.handleApproval.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
    this.updatePending = this.updatePending.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  getPendingTeachers() {
    console.log('fetching pending teachers');
    fetch('/pending')
      .then(response => response.json())
      .then(response => {
        this.setState({pendingTeachers: response.pendingTeachers})
      });
  }

  updatePending(email) {
    let newPending = this.state.pendingTeachers
                                        .filter((user) => user.email !== email);
    this.setState({pendingTeachers: newPending});
  }

  getUser(email) {
    let user = this.state.pendingTeachers.filter((user) => user.email===email);
    return user[0]
  }

  handleApproval(event) {
    const email = event.target.id;
    let approvedUser = this.getUser(email);
    fetch('/accept', {
      method: 'POST',
      body: JSON.stringify(approvedUser),
      headers: {"Content-Type": "application/json"}
    })
    .then(response => {
      if (response.status === 200) {
        alert(approvedUser.firstName + ' approved successfully!');
        this.updatePending(email);
      } else if (response.status === 401) {
        alert(approvedUser.firstName + ' could not be approved.');
      }
    });
  }

  handleDecline(event) {
    const email = event.target.id;
    let declinedUser = this.getUser(email);
    fetch('/decline', {
      method: 'POST',
      body: JSON.stringify(declinedUser),
      headers: {"Content-Type": "application/json"}
    })
    .then(response => {
      if (response.status === 200) {
        alert(declinedUser.firstName + ' declined successfully!');
        this.updatePending(email);
      } else if (response.status === 401) {
        alert(declinedUser.firstName + ' could not be declined.');
      }
    });
  }

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

  PendingCards(props) {
    if (this.state.userType === 'admin') {
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
        <this.PendingCards userList={this.state.pendingTeachers} />
      </div>
    )
  }
}

export default HomePage;

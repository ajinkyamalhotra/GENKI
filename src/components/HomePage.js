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
  }

  componentDidMount() {
    //console.log(this.props.userType);
  }

  getPendingTeachers() {
    console.log('fetching pending teachers');
    fetch('/pending')
      .then(response => response.json())
      .then(response => {
        this.setState({pendingTeachers: response.pendingTeachers})
      });
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
          <div className='ui two buttons'>
            <Button basic color='green'>
              Approve
            </Button>
            <Button basic color='red'>
              Decline
            </Button>
          </div>
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
        This is the Home Page!
        <this.PendingCards userList={this.state.pendingTeachers} />
      </div>
    )
  }
}

export default HomePage;

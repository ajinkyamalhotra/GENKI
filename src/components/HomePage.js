import React, { Component } from 'react';

class HomePage extends Component {

  constructor(props) {
    super(props);

    this.getPendingTeachers();
  }

  getPendingTeachers() {
    var pendingTeachers;
    console.log('fetching pending teachers');
    fetch('/pending')
      .then(response => response.json())
      .then(response => console.log(response));
  }

  render() {
    return (
      <div>
        This is the Home Page!
      </div>
    )
  }
}

export default HomePage;

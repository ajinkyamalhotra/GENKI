import React, { Component } from 'react';

class HomePage extends Component {
  componentDidMount() {
    fetch('/pending')
      .then(response => response.JSON())
      .then(data => console.log(data));
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

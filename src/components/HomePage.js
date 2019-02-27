import React, { Component } from 'react';

class HomePage extends Component {
  componentDidMount() {
    console.log('component mounted, fetching');
    fetch('/pending')
      .then(response => {
        console.log('got a response');
        return response.JSON();
        })
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

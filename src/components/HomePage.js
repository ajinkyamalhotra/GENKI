import React, { Component } from 'react';

class HomePage extends Component {
  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
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

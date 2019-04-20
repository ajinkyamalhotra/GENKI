import React, { Component } from 'react';
import StudentAddClassForm from './StudentAddClassForm';

class Progress extends Component {
  render() {
    return (
      <div>
        <StudentAddClassForm {...this.props} />
        This is the Progress!
      </div>
    )
  }
}

export default Progress;

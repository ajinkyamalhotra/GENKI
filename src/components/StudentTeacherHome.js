import React, { Component } from 'react';
import VirtualClassList from './VirtualClassList';


class StudentTeacherHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classSelected: false,
      classID: ''
    }

    this.handleClassSelection = this.handleClassSelection.bind(this);
  }

  handleClassSelection(clazz, event) {
    event.preventDefault();
    console.log(JSON.stringify(clazz));
    this.setState({ classSelected: true });
  }

  render() {
    return (
      <React.Fragment>
        This is the StudentTeacherHome
        {this.state.classSelected ? null :
          <VirtualClassList {...this.props}
                            classSelect={this.handleClassSelection} />}
      </React.Fragment>
    )
  }
}

export default StudentTeacherHome;

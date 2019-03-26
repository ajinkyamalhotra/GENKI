import React, { Component } from 'react';
import VirtualClassList from './VirtualClassList';
import ClassHome from './ClassHome';


class StudentTeacherHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classSelected: false
    }

    this.handleClassSelection = this.handleClassSelection.bind(this);
  }

  handleClassSelection(clazz, event) {
    event.preventDefault();
    console.log(JSON.stringify(clazz));
    this.setState({ classSelected: true, clazz: clazz });
  }

  render() {
    return (
      <React.Fragment>
        This is the StudentTeacherHome
        {this.state.classSelected ? <ClassHome clazz={this.state.clazz} /> :
          <VirtualClassList {...this.props}
                            classSelect={this.handleClassSelection} />}
      </React.Fragment>
    )
  }
}

export default StudentTeacherHome;

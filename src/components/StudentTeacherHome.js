import React, { Component } from 'react';
import VirtualClassList from './VirtualClassList';
import ClassHome from './ClassHome';


/**
 * This component renders the Home page that both students and teachers will
 * see.
 */
class StudentTeacherHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classSelected: false
    }

    this.handleClassSelection = this.handleClassSelection.bind(this);
  }


  /**
   * Function which is passed to the VirtualClassList that handles when a
   * class selection is made.
   *
   * @param  clazz  The class object which contains all class information
   * @param  event  The click event
   */
  handleClassSelection(clazz, event) {
    event.preventDefault();
    console.log(JSON.stringify(clazz));
    this.setState({ classSelected: true, clazz: clazz });
  }

  render() {
    return (
      <React.Fragment>
        This is the StudentTeacherHome
        {this.state.classSelected ? <ClassHome {...this.props} clazz={this.state.clazz} /> :
          <VirtualClassList {...this.props}
                            classSelect={this.handleClassSelection} />}
      </React.Fragment>
    )
  }
}

export default StudentTeacherHome;

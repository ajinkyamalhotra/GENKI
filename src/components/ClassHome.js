import React, { Component } from 'react';
import { List, Tab, Loader } from 'semantic-ui-react';

class ClassHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }

    this.ClassHomeTabs = this.ClassHomeTabs.bind(this);
    this.ClassInformation = this.ClassInformation.bind(this);
  }

  componentDidMount() {
    if (typeof this.props.clazz.ClassName !== 'undefined') {
      this.setState({ isLoading: false });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps
                      && typeof this.props.clazz.ClassName !== 'undefined') {
      this.setState({ isLoading: false });
    }
  }

  ClassInformation() {
    let className = this.props.clazz.ClassName;
    let semester = this.props.clazz.Semester;
    let section = this.props.clazz.Section;
    let teacher = this.props.clazz.Teacher;
    return (
      <Tab.Pane>
        <List>
          <List.Item as='a'>
            <List.Content>
              <List.Header>Class Name</List.Header>
              <List.Description>{className}</List.Description>
            </List.Content>
          </List.Item>
          <List.Item as='a'>
            <List.Content>
              <List.Header>Class Term</List.Header>
              <List.Description>{semester}</List.Description>
            </List.Content>
          </List.Item>
          <List.Item as='a'>
            <List.Content>
              <List.Header>Section</List.Header>
              <List.Description>{section}</List.Description>
            </List.Content>
          </List.Item>
          <List.Item as='a'>
            <List.Content>
              <List.Header>Instructor</List.Header>
              <List.Description>{teacher}</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Tab.Pane>
    )
  }

  ClassHomeTabs() {
    const panes = [
      { menuItem: 'Class Information', render: this.ClassInformation },
      { menuItem: 'Class Announcements', render: null}
    ]
    return (
      <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
    )
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <Loader active /> : <this.ClassHomeTabs />}
      </div>
    )
  }

}

export default ClassHome;

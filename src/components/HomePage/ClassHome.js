import React, { Component } from 'react';
import { List, Tab, Loader, Popup, Button, Breadcrumb, Divider } from 'semantic-ui-react';
import AnnouncementPane from './AnnouncementPane';
import ClassRosterPane from './ClassRosterPane';

/**
 * This component represents the home page of a particular Virtual Class.
 * It contains a sidebar with tabs to various pages.
 */
class ClassHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }

    this.ClassHomeTabs = this.ClassHomeTabs.bind(this);
    this.ClassInformation = this.ClassInformation.bind(this);
    this.emailTeacher = this.emailTeacher.bind(this);
  }

  /**
   * When the component mounts, verify props have propogated.
   */
  componentDidMount() {
    if (typeof this.props.clazz.ClassName !== 'undefined') {
      this.setState({ isLoading: false });
    }
  }

  /**
   * If the props have not propogated when the component mounts, check again
   * on component update.
   * @param prevProps     The previous props
   */
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps
                      && typeof this.props.clazz.ClassName !== 'undefined') {
      this.setState({ isLoading: false });
    }
  }

  emailTeacher() {
    window.open('mailto:' + this.props.clazz.Email);
  }

  /**
   * Create the class information pane.
   */
  ClassInformation() {
    let className = this.props.clazz.ClassName;
    let semester = this.props.clazz.Semester;
    let section = this.props.clazz.Section;
    let teacher = this.props.clazz.Teacher;
    let classID = this.props.clazz.ClassID;
    return (
      <Tab.Pane>
        <List>
          <List.Item>
            <List.Content>
              <List.Header>Class Name</List.Header>
              <List.Description>{className}</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Class Term</List.Header>
              <List.Description>{semester}</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Section</List.Header>
              <List.Description>{section}</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Instructor</List.Header>
              <List.Description>{teacher + ' '}
                <Popup  trigger={<Button size='mini' icon='write' onClick={this.emailTeacher}/>}
                        content='Email Your Teacher' />
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Class ID</List.Header>
              <List.Description>{classID}</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Tab.Pane>
    )
  }

  /**
   * Create the various tabs to be displayed on the side menu.
   */
  ClassHomeTabs() {
    const panes = [
      { menuItem: 'Class Information', render: this.ClassInformation },
      { menuItem: 'Class Announcements', render: () =>
                    <Tab.Pane><AnnouncementPane {...this.props} /></Tab.Pane>},
      { menuItem: 'Class Roster', render: () => <Tab.Pane><ClassRosterPane {...this.props} /></Tab.Pane>}
    ]
    return (
      <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
    )
  }

  render() {
    return (
      <div>
        <Breadcrumb size='tiny'>
          <Breadcrumb.Section link onClick={this.props.goBack}>Back To Class Select</Breadcrumb.Section>
        </Breadcrumb>
        <Divider hidden />
        {this.state.isLoading ? <Loader active /> : <this.ClassHomeTabs />}
      </div>
    )
  }

}

export default ClassHome;

import {API} from 'aws-amplify';
import config from '../../config';
import React, {Component} from 'react';
import { Label, Button, Modal, Form } from 'semantic-ui-react';

/**
 * This component renders the modal where teachers can post announcements.
 * It is a standard form which accepts input for the announcement title and
 * the announcement body.  It will display warnings if the user attempts to
 * submit an announcement that is missing either the title or body.
 *
 * This function accepts a closing function from the AnnouncementPane to handle
 * closing the modal.
 *
 * Note: The actual form is a controlled form.
 */
class AddAnnouncementModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageHeader: '',
      message: '',
      showWarnings: false
    }

    this.AddAnnouncementModal = this.AddAnnouncementModal.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /**
   * Function which handles changes to the announcement body.
   * @param  e      The change event
   * @param  data   The message change
   */
  handleMessageChange(e, data) {
    console.log(data.value);
    console.log(this.state.message);
    this.setState({ message: data.value });
  }

  /**
   * Function which handles changes to the announcement title.
   * @param  e          The change event
   * @param  data       The title change
   */
  handleTitleChange(e, data) {
    this.setState({ messageHeader: data.value });
  }

  /**
   * Function which handles the cancellation of announcement creation.
   * It sets the message and header to the empty string.
   */
  handleCancel() {
    this.setState({ message: '', messageHeader: '' });
    this.props.close();
  }

  /**
   * Handles submission of the announcement.
   * Prior to submission this verifies input exists in both the message and
   * the messageHeader.
   */
  async handleSubmit() {
    if (this.state.message.length === 0 || this.state.message.length === 0) {
      this.setState({ showWarnings: true });
    } else {
      try {
        console.log('Submitting Announcement');
        let apiName = config.API_NAME;
        let path = '/addAnnouncement';
        let date = new Date();
        let params = {
          body: {
            ClassID: this.props.clazz.ClassID,
            Date: date.toISOString(),
            MessageHeader: this.state.messageHeader,
            Message: this.state.message,
            Author: this.props.username
          }
        }
        await API.post(apiName, path, params);
        // Reset the form after submission
        this.setState({ message: '', messageHeader: '' });
        // Close the modal
        this.props.close();
      } catch(e) {
        console.log(e);
      }
    }
  }

  /**
   * This is the actual modal.
   */
  AddAnnouncementModal() {
    let className = this.props.clazz.ClassName;
    let section = this.props.clazz.Section;
    return (
      <Modal  open={this.props.showModal}
              closeOnDimmerClick={false}
              onClose={this.props.close}
              closeIcon>
        <Modal.Header>
          Add Announcement To {className}-Section {section}:
        </Modal.Header>
        <Modal.Content>
          <Form>
            {this.state.showWarnings
              && this.state.messageHeader.length === 0
              && <Label color='red'>Please enter a title</Label>}
            <Form.Input  id='Title'
                    label='Title'
                    placeholder='Announcement Title'
                    value={this.state.messageHeader}
                    onChange={this.handleTitleChange} />
            {this.state.showWarnings
              && this.state.message.length === 0
              && <Label color='red'>Please enter a message</Label>}
            <Form.TextArea id='announcement'
                      label='Announcement:'
                      placeholder='Announcement'
                      value={this.state.message}
                      onChange={this.handleMessageChange} />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='delete'
                  negative
                  labelposition='right'
                  content='Cancel'
                  onClick={this.handleCancel} />
          <Button icon='checkmark'
                  positive
                  labelposition='right'
                  content='Create Announcement'
                  onClick={this.handleSubmit} />
        </Modal.Actions>
      </Modal>
    )
  }

  render() {
    return(
      <React.Fragment>
        <this.AddAnnouncementModal />
      </React.Fragment>
    )
  }
}

export default AddAnnouncementModal;

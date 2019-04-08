import {API} from 'aws-amplify';
import React, {Component} from 'react';
import { Label, Button, Modal, Form } from 'semantic-ui-react';

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

  handleMessageChange(e, data) {
    console.log(data.value);
    console.log(this.state.message);
    this.setState({ message: data.value });
  }

  handleTitleChange(e, data) {
    this.setState({ messageHeader: data.value });
  }

  handleCancel() {
    this.setState({ message: '', messageHeader: '' });
    this.props.close();
  }

  async handleSubmit() {
    if (this.state.message.length === 0 || this.state.message.length === 0) {
      this.setState({ showWarnings: true });
    } else {
      try {
        console.log('Submitting Announcement');
        let apiName = 'genki-vn-beta';
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
        this.setState({ message: '', messageHeader: '' });
        this.props.close();
      } catch(e) {
        console.log(e);
      }
    }
  }

  AddAnnouncementModal() {
    return (
      <Modal  open={this.props.showModal}
              closeOnDimmerClick={false}
              onClose={this.props.close}
              closeIcon>
        <Modal.Header>
          Add Announcement To {this.props.clazz.ClassName}-Section {this.props.clazz.Section}:
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

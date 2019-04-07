import {API} from 'aws-amplify';
import React, {Component} from 'react';
import { Button, Modal, Form, TextArea } from 'semantic-ui-react';

class AddAnnouncementModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }

    this.AddAnnouncementModal = this.AddAnnouncementModal.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMessageChange(e, data) {
    console.log(data.value);
    console.log(this.state.message);
    this.setState({ message: data.value });
  }

  handleCancel() {
    this.setState({ message: '' });
    this.props.close();
  }

  handleSubmit() {
    this.setState({ message: '' });
    this.props.close();
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
            <TextArea id='announcement'
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

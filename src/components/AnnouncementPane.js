import {API} from 'aws-amplify';
import React, {Component} from 'react';
import { Button, Icon, Modal, Form, TextArea } from 'semantic-ui-react';

class AnnouncementPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }

    this.showAddAnnouncementModal = this.showAddAnnouncementModal.bind(this);
    this.closeAddAnnouncementModal = this.closeAddAnnouncementModal.bind(this);
    this.AddAnnouncementModal = this.AddAnnouncementModal.bind(this);
    this.AddAnnouncementButton = this.AddAnnouncementButton.bind(this);
  }

  showAddAnnouncementModal() {
    this.setState({ showModal: true });
  }

  closeAddAnnouncementModal() {
    this.setState({ showModal: false });
  }

  AddAnnouncementModal() {
    return (

      <Modal  open={this.state.showModal}
              closeOnDimmerClick={false}
              onClose={this.closeAddAnnouncementModal}>
        <Modal.Header>
          Add Announcement To {this.props.clazz.ClassName}-Section {this.props.clazz.Section}:
        </Modal.Header>
        <Modal.Content>
          <Form>
            <TextArea id='announcement' placeholder='Announcement' />
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='delete' negative onClick={this.closeAddAnnouncementModal}>
            Cancel
          </Button>
          <Button icon='checkmark' positive onClick={this.closeAddAnnouncementModal}>
            Create Announcement
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }

  AddAnnouncementButton() {
    return(
      <Button icon labelposition='left' onClick={this.showAddAnnouncementModal}>
        <Icon name='plus square outline' />
        Add Announcement
      </Button>
    )
  }

  render() {
    return(
      <div>
        <this.AddAnnouncementButton />
        <this.AddAnnouncementModal />
      </div>
    )
  }
}

export default AnnouncementPane;

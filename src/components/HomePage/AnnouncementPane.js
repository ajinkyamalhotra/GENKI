import React, {Component} from 'react';
import { Button, Icon } from 'semantic-ui-react';
import AddAnnouncementModal from '../Forms/AddAnnouncementModal';
import AnnouncementFeed from './AnnouncementFeed';

/**
 * This component represents the Announcement Pane for the ClassHome.
 * Here, teachers can post and view announcements.  Students can simply
 * view the announcements.
 *
 * Some of these functions are passed to the AddAnnouncementModal component.
 * In other words, this pane acts as the control hub for the
 * AddAnnouncementModal.
 */
class AnnouncementPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }

    this.showAddAnnouncementModal = this.showAddAnnouncementModal.bind(this);
    this.closeAddAnnouncementModal = this.closeAddAnnouncementModal.bind(this);
    this.AddAnnouncementButton = this.AddAnnouncementButton.bind(this);
  }

  /**
   * Fucntion which toggles the value of showModal.  When showModal is true,
   * a small window pops up where the teacher can write an announcement.
   * This function is passed to the AddAnnouncementModal.
   */
  showAddAnnouncementModal() {
    this.setState({ showModal: true });
  }

  /**
   * Close the create announcement modal.
   * This function gets passed to the AddAnnouncementModal.
   */
  closeAddAnnouncementModal() {
    this.setState({ showModal: false });
  }

  /**
   * The button which activates the modal.
   */
  AddAnnouncementButton() {
    return(
      <Button icon labelposition='left' onClick={this.showAddAnnouncementModal}>
        <Icon name='add' />
        Add Announcement
      </Button>
    )
  }

  render() {
    return(
      <div>
        {this.props.userType === 'teacher' &&
          <div>
            <this.AddAnnouncementButton />
          </div>
        }
        <AddAnnouncementModal showModal={this.state.showModal}
                              close={this.closeAddAnnouncementModal}
                              {...this.props}/>
        <AnnouncementFeed {...this.props} />
      </div>
    )
  }
}

export default AnnouncementPane;

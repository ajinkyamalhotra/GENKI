import React, {Component} from 'react';
import { Button, Icon } from 'semantic-ui-react';
import AddAnnouncementModal from './AddAnnouncementModal';
import AnnouncementFeed from './AnnouncementFeed';

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

  showAddAnnouncementModal() {
    this.setState({ showModal: true });
  }

  closeAddAnnouncementModal() {
    this.setState({ showModal: false });
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

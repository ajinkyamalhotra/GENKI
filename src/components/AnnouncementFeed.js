import {API} from 'aws-amplify';
import React, {Component} from 'react';
import { Card, Loader, Divider } from 'semantic-ui-react';

const _MS_PER_MINUTE = 1000 * 60;
const _MS_PER_HOUR = _MS_PER_MINUTE * 60;
const _MS_PER_DAY = _MS_PER_HOUR * 24;

class AnnouncementFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcementList: [],
      isLoading: true
    };

    this.getAnnouncementList = this.getAnnouncementList.bind(this);
    this.Feed = this.Feed.bind(this);
  }

  componentDidMount() {
    if (typeof this.props.clazz.ClassID !== 'undefined') {
        this.getAnnouncementList();
    }
  }

  /**
   * When this component is initially rendered, the ClassID may not have
   * propogated, so we need to wait until it actually gets here.
   * @param prevProps  The previous props before update
   */
  componentDidUpdate(prevProps) {
    // If the new props are different from the old props and the ClassID is
    // not undefined (The ClassID is undefined prior to propogation of props).
    if (this.props !== prevProps
                          && typeof this.props.clazz.ClassID !== 'undefined') {
      this.getAnnouncementList();
    }
  }

  async getAnnouncementList() {
    let apiName = 'genki-vn-beta';
    let ClassID = this.props.clazz.ClassID;
    console.log('Getting announcements for: ' + ClassID);
    let path = `/getAnnouncements/${ClassID}`;
    try {
      let announcementList = await API.get(apiName, path);
      console.log('Announcements: ' + JSON.stringify(announcementList));
      console.log('type: ' + typeof announcementList);
      this.setState({ announcementList: announcementList, isLoading: false });
    } catch (e) {
      console.log('Problem getting announcements');
      console.log(e, e.stack)
    }
  }



  AnnouncementCard(announcement) {
    let now = new Date();
    let cardDate = new Date(Date.parse(announcement.Date));
    const meta = getMSTimeDifference(now, cardDate);

    return(
      <li key={announcement.Date}>
        <Card centered fluid>
          <Card.Content>
            <Card.Header>
              {announcement.MessageHeader}
            </Card.Header>
            <Card.Meta>
              {meta}
            </Card.Meta>
            <Card.Description>
              {announcement.Message}
            </Card.Description>
          </Card.Content>
        </Card>
        <Divider hidden />
      </li>
    )
  }

  Feed() {
    let announcements = this.state.announcementList;
    announcements.sort((a,b) => {
      if (a.Date<b.Date) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(typeof announcements);
    var cards = this.state.announcementList.map((announcement) =>
                                          this.AnnouncementCard(announcement));
    return (
      <ul>
          {cards}
      </ul>
    )
  }

  render() {
    return(
      <div>
        {this.state.isLoading ? <Loader active /> : <this.Feed />}
      </div>
    )
  }
}

function getMSTimeDifference(now, cardDate) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(cardDate.getFullYear(),
                        cardDate.getMonth(),
                        cardDate.getDate(),
                        cardDate.getHours(),
                        cardDate.getMinutes());
  const utc2 = Date.UTC(now.getFullYear(),
                        now.getMonth(),
                        now.getDate(),
                        now.getHours(),
                        now.getMinutes());
  const timeDifference = (utc2 - utc1);
  const dayDifference = Math.floor(timeDifference / _MS_PER_DAY);
  var meta = '';
  if (dayDifference < 1) {
    const hourDifference = Math.floor(timeDifference / _MS_PER_HOUR);
    if (hourDifference < 1) {
      const minuteDifference = Math.floor(timeDifference / _MS_PER_MINUTE)
      meta = '' + minuteDifference + ' minutes ago';
    } else {
      meta = '' + hourDifference + ' hours ago';
    }
  } else {
    meta = '' + dayDifference + ' days ago';
  }
  return meta;
}

export default AnnouncementFeed;

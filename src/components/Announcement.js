import {API} from 'aws-amplify';
import React, {Component} from 'react';

class Announcement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPropogating: true,
      isFetchingAnnouncements: false
    }
  }

  componentDidMount() {
    if (typeof this.props.clazz.ClassID !== 'undefined') {
      this.setState({ isPropogating: false, isFetchingAnnouncements: true });
      getAnnouncements()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps
        && typeof this.props.clazz.ClassID !== 'undefined'
        && !this.state.isFetchingAnnouncements) {
      this.setState({ isPropogating: false, isFetchingAnnouncements: true });
      getAnnouncements();
    }
  }
}

export default Announcement;

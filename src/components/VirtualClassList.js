import React, { Component } from 'react';
import { API } from 'aws-amplify';


class VirtualClassList extends Component {
  constructor(props) {
    super(props);

    this.getClassList = this.getClassList.bind(this);
  }

  async getClassList() {
    let apiName = 'genki-vn-beta';
    let username = this.props.username;
    let path = `/classList/${username}`;
    try {
      let classList = await API.get(apiName, path);
      console.log(classList);
      this.setState({ classList: classList });
    } catch (e) {
      console.log(e, e.stack);
    }
  }

  render() {
    this.getClassList();
    return null;
  }
}

export default VirtualClassList;

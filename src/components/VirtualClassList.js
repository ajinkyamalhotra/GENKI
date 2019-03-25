import { Component } from 'react';
import { API } from 'aws-amplify';
import { Card } from 'semantic-ui-react';


class VirtualClassList extends Component {
  constructor(props) {
    super(props);

    this.getClassList = this.getClassList.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps && typeof this.props.username !== 'undefined') {
      console.log(this.props.username);
      this.getClassList();
    }
  }

  async getClassList() {
    let apiName = 'genki-vn-beta';
    let username = this.props.username;
    console.log('Getting class list for: ' + username);
    let path = `/classList/${username}`;
    try {
      let classList = await API.get(apiName, path);
      console.log('class list' + JSON.stringify(classList));
      this.setState({ classList: classList });
    } catch (e) {
      console.log('problem getting class list');
      console.log(e, e.stack);
    }
  }

  VirtualClassCard(class) {
    return(
      <Card key={class.ClassID} color='orange'>
        <Card.Content>
          <Card.Header textAlign='left' className='cardHeader'>
          </Card.Header>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return null;
  }
}

export default VirtualClassList;

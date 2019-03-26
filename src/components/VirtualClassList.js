import React, { Component } from 'react';
import { API } from 'aws-amplify';
import { Card } from 'semantic-ui-react';


class VirtualClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: []
    }

    this.getClassList = this.getClassList.bind(this);
    this.CardGroup = this.CardGroup.bind(this);
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

  handleClick(event) {
    console.log(event);
  }

  VirtualClassCard(clazz) {
    return(
      <Card key={clazz.ClassID}
            classProps={clazz}
            onClick={this.handleClick}
            color='orange'>
        <Card.Content>
          <Card.Header textAlign='left' className='cardHeader'>
            {clazz.ClassName + ' Section: ' + clazz.Section}
          </Card.Header>
          <Card.Meta>
            {clazz.Teacher + '\n' + clazz.Semester}
          </Card.Meta>
        </Card.Content>
      </Card>
    )
  }

  CardGroup() {
    let classes = this.state.classList;
    console.log('In CardGroup: ' + Array.isArray(classes));
    var cards = classes.map((clazz) => this.VirtualClassCard(clazz));
    return (
      <Card.Group centered>
        {cards}
      </Card.Group>
    )
  }

  render() {
    return (
      <div>
      {(this.state.classList.length > 0) &&
          <this.CardGroup />
      }
      </div>
    );
  }
}

export default VirtualClassList;

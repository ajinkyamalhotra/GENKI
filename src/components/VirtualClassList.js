import React, { Component } from 'react';
import { API } from 'aws-amplify';
import { Card } from 'semantic-ui-react';

/**
 * This Component renders a card group of classes for a particular student
 * or teacher.  Each card is clickable and will send the class information
 * back to the StudentTeacherHome.
 */
class VirtualClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classList: []
    }

    this.getClassList = this.getClassList.bind(this);
    this.CardGroup = this.CardGroup.bind(this);
  }

  /**
   * When this component is initially rendered, the username may not have
   * propogated, so we need to wait until it actually gets here.
   * @param prevProps  The previous props before update
   */
  componentDidUpdate(prevProps) {
    // If the new props are different from the old props and the username is
    // not undefined (The username is undefined prior to propogation of props).
    if (this.props !== prevProps
                            && typeof this.props.username !== 'undefined') {
      console.log(this.props.username);
      this.getClassList();
    }
  }

  /**
   * This function fetches the classList corresponding to a given username
   * and adds it to the state of this component.
   */
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

  /**
   * This component is the actual card for the class.
   * The classSelect function comes from the StudentTeacherHome component.
   * @param clazz   The class information
   */
  VirtualClassCard(clazz) {
    return(
      <Card key={clazz.ClassID}
            onClick={(e) => this.props.classSelect(clazz, e)}
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

  /**
   * Creates a card group using all of the classes.
   */
  CardGroup() {
    let classes = this.state.classList;
    var cards = classes.map((clazz) => this.VirtualClassCard(clazz));
    return (
      <Card.Group centered>
        {cards}
      </Card.Group>
    )
  }

  render() {
    return (
      <React.Fragment>
      {(this.state.classList.length > 0) &&
          <this.CardGroup />
      }
      </React.Fragment>
    );
  }
}

export default VirtualClassList;

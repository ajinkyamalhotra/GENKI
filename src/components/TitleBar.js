import React, {Component} from 'react';
import {Table, Image} from 'semantic-ui-react';

const logo= require('../images/logo.png');

class TitleBar extends Component{
  render(){
    return(
      <div className='title-bar'>
        <Table color='black' inverted attached>
          <Table.Header>
            <Table.Row>
              <Image centered size='tiny' src={logo} />
            </Table.Row>
          </Table.Header>
        </Table>
      </div>
    )
  }
}

export default TitleBar;

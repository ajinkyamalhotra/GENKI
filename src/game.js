import React, {Component} from 'react';
import {Image} from 'semantic-ui-react';

class Game extends Component {
  render(){
    return(
      <div className='game' style={{marginLeft: '40%', marginTop: '15%'}}>
        <Image src='./images/logo.png' size='large'/>
      </div>
    )
  }
}

export default Game;

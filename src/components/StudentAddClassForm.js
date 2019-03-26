import React, {Component} from 'react';
import { Button, Header, Form, Grid, Input} from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import { API } from 'aws-amplify';

class StudentAddClassForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      ClassID: ''
    }

  }

  /**
   * Function which invokes the classAdd API to create/update user with the
   * entered classID
   */
  addUserClass(){
    console.log('Adding class to user');
    let apiName = 'genki-vn-beta';
    let path ='/classAdd';
    let params = {
      body: {
        username: this.props.username,
        classID: this.state.secretID
      }
    }
    return API.post(apiName, path, params);
  }

  render(){
    return(
      
    )
  }

}

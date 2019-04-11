import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react';
import FAQs from './Faqs';
import Aboutus from './Aboutus';


export default class BreadCrumbBottomBar extends Component {
  render() {
    return (
      <Segment basic
               style={{position: 'absolute', bottom: '15px', right: '15px'}}>
        <FAQs />
        <Aboutus />
      </Segment>
    )
  }
}

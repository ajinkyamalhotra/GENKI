import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react';
import FAQs from './Faqs';
import Aboutus from './Aboutus';
import ContactAdmin from './ContactAdmin';

export default class BreadCrumbBottomBar extends Component {

  render() {
    return (
      <Segment basic
               style={{position: 'fixed', bottom: '10px', right: '15px'}}>
        <FAQs />
        <Aboutus />
        <ContactAdmin/>
      </Segment>
    )
  }
}

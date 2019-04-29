import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react';
import FAQs from './FooterBarComponents/Faqs';
import AboutUs from './FooterBarComponents/AboutUs';
import ContactAdmin from './FooterBarComponents/ContactAdmin';

export default class BottomFooterBar extends Component {

  render() {
    return (
      <Segment basic
               style={{position: 'fixed', bottom: '10px', right: '15px'}}>
        <FAQs />
        <AboutUs />
        <ContactAdmin/>
      </Segment>
    )
  }
}

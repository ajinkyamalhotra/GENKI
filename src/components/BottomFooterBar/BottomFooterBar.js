import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react';
import FAQs from './FooterBarComponents/Faqs';
import AboutUs from './FooterBarComponents/AboutUs';
import ContactAdmin from './FooterBarComponents/ContactAdmin';

/**
 * BottomBar Component for GENKI VN App.
 * It will contain FAQs, AboutUs and How to Contact Admin information.
 * This component will render all the information by importing other individual
 * modules and displaying them in the bottom right corner of the screen.
 */
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

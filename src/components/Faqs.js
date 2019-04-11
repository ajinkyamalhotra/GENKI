import React, { Component } from 'react'
import {Accordion, Breadcrumb, Modal, Segment} from 'semantic-ui-react';
import _ from 'lodash';
import '../styles/Faqs.css';

let scanResults = [];

const panels = _.times(10, i => ({
  key: `panel-${i}`,
  title: {
    content: 'Question '+(i+1),
  },
  content: {
    content: 'Answer '+(i+1),
  },
}));


export default class Faqs extends Component {
  render() {
    return (
      <Modal trigger={
        <Breadcrumb size="huge" style={{position: 'absolute', bottom: '8px', right: '16px'}}>
          <Breadcrumb.Section link>FAQs</Breadcrumb.Section>
        </Breadcrumb>} closeIcon centered={false}>
        <Modal.Header style={{textAlign: 'center', backgroundColor: 'orange'}}><h1>Frequently Asked Questions</h1></Modal.Header>
        <Modal.Content>
          <Segment size='huge' fluid basic style={{margin: 'auto'}}>
            <Accordion fluid styled exclusive={false} panels={panels} style={{wordWrap: "break-word"}}/>
          </Segment>
        </Modal.Content>
      </Modal>
    )
  }
}

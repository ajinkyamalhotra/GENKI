import React, { Component } from 'react'
import {Accordion, Segment} from 'semantic-ui-react';
import _ from 'lodash';
import '../styles/Faqs.css';


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
      <Segment size='huge' color='orange' compact style={{margin: 'auto'}}>
        <Accordion fluid styled>
          <h1 className={'Custom-header-FAQs'}>Frequently Asked Questions</h1>
        </Accordion>
          <Accordion fluid styled exclusive={false} panels={panels}/>
      </Segment>
    )
  }
}

import React, { Component } from 'react'
import {Accordion, Breadcrumb, Modal, Segment} from 'semantic-ui-react';
import _ from 'lodash';
import '../../../styles/Faqs.css';


/**
 * This variable will contain all the Questions and Answers data that are to be
 * displayed in the FAQs pop up window.
 */
let QuestionsAndAnswers = [
  {Question:"How do I sign up for a new account?",
   Answer:"Click on the sign up button in the top bar," +
      "fill up the required information and click Sign up.\n"+
      "Check your email inbox used to signup for the account and" +
      "enter the received confirmation code to create your account."},

  {Question:"How do I log into an existing account?",
   Answer:"Click on the log in button in the top bar," +
     "enter your credentials and click Submit."},

  ];

/**
 * Loads all the data contained in the QuestionsAndAnswers variable
 */
const panels = _.times(QuestionsAndAnswers.length, i => ({
  key: `panel-${i}`,
  title: {
    content: (i+1)+". "+QuestionsAndAnswers[i].Question,
  },
  content: {
    content: QuestionsAndAnswers[i].Answer,
  },
}));


/**
 * This is the Faqs component for the bottom footer bar.
 * It acts as a Pop-up component to display all the questions and answers.
 */
export default class Faqs extends Component {
  render() {
    return (
        <Modal trigger={
          <Breadcrumb size="large" >
            <Breadcrumb.Section link>FAQs</Breadcrumb.Section>
          </Breadcrumb>} closeIcon centered={false}>
          <Modal.Header
            style={{textAlign: 'center', backgroundColor: 'orange'}}>
            <h1>Frequently Asked Questions</h1>
          </Modal.Header>
          <Modal.Content>
            <Segment size='huge'
                     fluid
                     basic
                     style={{margin: 'auto'}}>
              <Accordion fluid
                         styled
                         exclusive={false}
                         panels={panels}
                         style={{wordWrap: "break-word"}}/>
            </Segment>
          </Modal.Content>
        </Modal>
    )
  }
}

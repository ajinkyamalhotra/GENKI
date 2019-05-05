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
   Answer:"Click on the sign up button in the top bar, " +
      "fill up the required information and click Sign up.\n"+
      "Check your email inbox used to signup for the account and " +
      "enter the received confirmation code to create your account."},

  {Question:"How do I log into an existing account?",
   Answer:"Click on the log in button in the top bar, " +
     "enter your credentials and click Submit."},

  {Question:"How do I enroll in a class?",
    Answer:"From the Home page, click on Enroll In A Class and " +
      "enter the Class ID that your instructor provided to you " +
      "into the form. Only students can enroll in a class."},

  {Question:"How can I contact my professor?",
    Answer:"From the Home page, click on the class of the instructor " +
      "you want to contact. In the Class Information tab, click the button " +
      "next to your instructor's name. This will open your default email " +
      "program with your instructor's email address in the \"To\" box."},

  {Question:"How can I view announcements?",
    Answer:"From the Home page, click on the class whose announcements " +
      "you want to view. Click on the Class Announcements tab to see " +
      "that class' announcements."},

  {Question:"How can I create an announcement?",
    Answer:"From the Home page, click on the class where you want to create " +
      "an announcement. Click on the Class Announcements tab to view that " +
      "class' current announcements. Click the Add Announcement button " +
      "to bring up a form with 2 entries, Title and Announcement. " +
      "Fill out the form and click Create Announcement. "},

  {Question:"What code do I need to give to my students to enroll?",
    Answer:"After creating a class, click on the new class on the Home page. " +
      "In the class information tab, the bottom entry is Class ID. " +
      "Send that code to your students so they can enroll in your class."},
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

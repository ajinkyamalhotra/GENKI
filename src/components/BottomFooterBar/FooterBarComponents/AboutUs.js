import React, { Component } from 'react'
import { Breadcrumb, Modal, Segment } from 'semantic-ui-react';


export default class AboutUs extends Component {
  render() {
    return (
        <Modal trigger={
          <Breadcrumb size="large">
            <Breadcrumb.Divider> | </Breadcrumb.Divider>
            <Breadcrumb.Section link>About Us</Breadcrumb.Section>
          </Breadcrumb>} closeIcon centered={false}>
          <Modal.Header
            style={{textAlign: 'center', backgroundColor: 'orange'}}>
            <h1>About Us</h1>
          </Modal.Header>
          <Modal.Content>
            <Segment size='huge' fluid basic style={{margin: 'auto'}}>

            </Segment>
          </Modal.Content>
        </Modal>
    )
  }
}

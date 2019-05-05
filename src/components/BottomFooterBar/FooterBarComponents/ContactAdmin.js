import React, { Component } from 'react'
import { Breadcrumb } from 'semantic-ui-react';


/**
 * This is ContactAdmin component for the bottom footer bar.
 * On click the default email app open's up with admin's email written in
 * To text box.
 */
export default class ContactAdmin extends Component {
  render() {
    return (
      <Breadcrumb size="large">
        <Breadcrumb.Divider> | </Breadcrumb.Divider>
        <Breadcrumb.Section link href = "mailto:csusgenki@gmail.com">
          Contact Admin
        </Breadcrumb.Section>
      </Breadcrumb>
    )
  }
}

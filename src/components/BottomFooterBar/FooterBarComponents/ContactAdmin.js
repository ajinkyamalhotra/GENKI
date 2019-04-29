import React, { Component } from 'react'
import { Breadcrumb } from 'semantic-ui-react';


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

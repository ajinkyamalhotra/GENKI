import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Menu, Grid} from 'semantic-ui-react';

// Tell Webpack this JS file uses this image
import logo from '../images/logo.png'; 

// logo.84287d09.png
console.log(logo); 

export default class Profile extends Component {
  //Default active item is page1
  state = { activeItem: 'page1' }
  
  //Change the active item to the item that was clicked
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      //Container for that entire page
      <Grid >
          {/*Left bar for navigation between different profile sections*/}
        <Grid.Column width={2} >
          <Menu width={2} fluid vertical tabular style={{height: '90vh'}}>
            
            <Menu.Item name='page1' color='orange'
            active={activeItem === 'page1'} onClick={this.handleItemClick}>
            Page1 </Menu.Item>
            
            <Menu.Item name='page2' color='orange'
            active={activeItem === 'page2'} onClick={this.handleItemClick}>
            Page2 </Menu.Item>
            
            <Menu.Item name='page3' color='orange'
            active={activeItem === 'page3'} onClick={this.handleItemClick}>
            Page3 </Menu.Item>
            
            <Menu.Item name='page4' color='orange'
            active={activeItem === 'page4'} onClick={this.handleItemClick}>
            Page4 </Menu.Item>
          
          </Menu>
        </Grid.Column>
        
        {/*Display active section(currently only displaying GENKI logo)*/}
        <Container>
          <img src={logo} alt="Logo" style={{ width: '80%', margin: 'auto',
          marginLeft: '25%'}}/>
          <h1 style={{ margin: 'auto', marginLeft: '57%'}}>Team GENKI</h1>
        </Container>
      </Grid>
    )
  }
}

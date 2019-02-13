import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Header, Form, Grid, Input} from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import '../styles/Login.css';
import SignUp from './SignUp';

class Login extends Component{

    routeChange(){
    let path = `./SignUp`;
    }

  render(){ 
    return(
        <Router>
             
      <div className='page'> {
        <Grid  padded='vertically'>
            <Grid.Row><br/></Grid.Row>
            <Grid.Row verticalAlign='middle' centered>
                <Grid.Column className='loginForm' widht={5}>
                    <Grid.Row><br/></Grid.Row>
                    <Grid.Row>
                        <Header as='h1' inverted color='orange'>GENKI</Header>
                    </Grid.Row>
                    <Divider /> 
                    <Form inverted>
                        <Form.Field>
                        <label size='huge'><Icon color='orange'
                        name='user circle' />Username</label>
                        <Input fluid size='huge' icon='user circle'
                        color='orange' placeholder='Username'/>
                        </Form.Field>
                        <Grid.Row><br/></Grid.Row>
                        <Form.Field>
                            <label><Icon color='orange'
                            name='lock circle' />Password</label>
                            <Input fluid size='huge' icon='key'
                            color='orange' placeholder='Password'/>
                        </Form.Field>
                        <Grid.Row><br/></Grid.Row>
                        <Button fluid size='huge' color='orange'
                        type='Login'>Login</Button>
                        <Divider />
                        <Link to='/SignUp'>
                        <Button fluid size='huge' color='orange'
                        type='Signup' onClick={this.routeChange}>Signup</Button>
                        </Link>
                    </Form>
                    <Grid.Row><br/></Grid.Row>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        }
        <Route path='/SignUp' exact component={SignUp} />
      </div>
      </Router>
    )
  }
}
export default Login;

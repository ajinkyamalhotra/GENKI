import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Button, Header, Form, Grid, Input} from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';
import '../styles/Login.css';

class Login extends Component{

    handleClick = () => {
        this.props.history.push('/SignUp');
    };

  render(){
    return(
        <Router>
            <div className='page'> {
            <Grid  padded='vertically'>
                <Grid.Row><br/></Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4} className='loginForm'>
                        <Grid.Row><br/></Grid.Row>
                        <Grid.Row>
                            <Header as='h1' inverted color='orange'>
                            GENKI</Header>
                        </Grid.Row>
                        <Divider />
                        <Form inverted>
                            <Form.Field >
                                <label size='huge'><Icon color='orange'
                                name='user circle' />Username</label>
                                <Input  placeholder='Username' />
                            </Form.Field>
                            <Grid.Row><br/></Grid.Row>
                            <Form.Field>
                                <label><Icon color='orange'
                                name='lock circle' />Password</label>
                                <Input placeholder='Password'/>
                            </Form.Field>
                            <Grid.Row><br/></Grid.Row>
                            <Button size='big' compact color='orange'
                            type='Login'>Login</Button>
                            <Button size='big' compact floated='right'
                            color='orange' type='Signup'
                            onClick={this.handleClick}>Signup
                            </Button>
                        </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        }

      </div>
      </Router>
    )
  }
}
export default Login;
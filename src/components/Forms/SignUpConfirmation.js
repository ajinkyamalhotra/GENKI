import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Button, Header, Form, Grid} from 'semantic-ui-react';
import { Divider} from 'semantic-ui-react';
import '../../styles/SignUpConfirmation.css';

class SignUpConfirmation extends Component{

    handleClick = () => {
        this.props.history.push('/Login');
    };

    render(){
        return(
            <Router>
                <div className='page'>
                    <Grid  padded='vertically'>
                        <Grid.Row><br/></Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={4} className='confirmationForm'>
                                <Grid.Row><br/></Grid.Row>
                                <Grid.Row>
                                    <Header as='h1' inverted color='orange'>
                                        GENKI</Header>
                                </Grid.Row>
                                <Divider />
                                <Form inverted className='loginButtonAlignment'>
                                    <Header as='h2' inverted> Congratulations!
                                        You have successfully signed up on
                                        for an account.
                                    </Header>
                                    <Grid.Row><br/></Grid.Row>
                                    <Grid.Row><br/></Grid.Row>
                                    <Button size='big' compact color='orange'
                                             type='Login'
                                            onClick={this.handleClick}>
                                        Login</Button>
                                </Form>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Router>
        )
    }
}
export default SignUpConfirmation;

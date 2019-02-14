import React, {Component} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Button, Header, Form, Grid} from 'semantic-ui-react';
import { Divider} from 'semantic-ui-react';
import '../styles/SignUpConfirmation.css';

const options = [
    { key: 0, text: '', value: 0},
    { key: 1, text: 'Student', value: 1 },
    { key: 2, text: 'Teacher', value: 2 },
    { key: 3, text: 'Admin', value: 3 },
]

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
                            <Grid.Column className='confirmationForm'>
                                <Grid.Row><br/></Grid.Row>
                                <Grid.Row>
                                    <Header as='h1' inverted color='orange'>
                                        GENKI</Header>
                                </Grid.Row>
                                <Divider />
                                <Form inverted>
                                    <Header as='h1' inverted> Congratulations!
                                        You have successfully signed up on
                                        for an account.
                                    </Header>
                                    <Grid.Row><br/></Grid.Row>
                                    <Grid.Row><br/></Grid.Row>
                                    <Button fluid size='huge' color='orange'
                                            type='Login' compact
                                            onClick={this.handleClick}>
                                        Login</Button>

                                </Form>
                                <Grid.Row><br/></Grid.Row>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Router>
        )
    }
}
export default SignUpConfirmation;
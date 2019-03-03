import React, {Component} from 'react';
import { Button, Header, Form, Grid, Input} from 'semantic-ui-react';
import { Icon, Divider} from 'semantic-ui-react';

import '../styles/VirtualClassForm.css';

class VirtualClassForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      ClassName: '',
      Section: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.FormField = this.FormField.bind(this);
    this.ButtonOptions = this.ButtonOptions.bind(this);
  }

  componentWillUnmount() {
    this.setState = {
      ClassName: '',
      Section: ''
    }
  }

  /**
   * Used to make the form a controlled component.
   * Will be called when the user types in the username or password textbox.
   * @param event           Represents the change coming from the form.
   */
  handleChange = (event) => {
    // Getting the name of the state variable which is changing.
    // Corresponds to the name property of the field.
    const key = event.target.name;
    this.setState({[key]: event.target.value});
  }

  handleSubmit = (event) => {

  }
  /**
   * Returns a Form.Field Semantic UI component.
   * @param props       Includes the color, name, and label for the field.
   */
  FormField(props) {
    const stateField = (props.label === 'Class Name') ?
                                    this.state.ClassName : this.state.Section;
    return (
      <Form.Field>
        <this.Label color={props.color}
                    name={props.name}
                    label={props.label}/>

        <Input      value={stateField}
                    name={props.label}
                    onChange={this.handleChange}
                    type={props.type}
                    placeholder={props.placeholder}/>
      </Form.Field>
    )
  }

  /**
   * Returns a custom label.
   * @param props           Includes the color, name, and label.
   */
  Label(props) {
    return (
      <label size='huge'>
        <Icon color={props.color} name={props.name} />
          {props.label}
      </label>
    )
  }

  /**
   * Only one button options for this form, which will use
   * handleSubmit function.
   */
  ButtonOptions() {
      return(
        <div>
          <this.GenkiButton color='orange'
                            type='Submit'
                            id='submit'
                            onClick={this.handleSubmit}/>
        </div>
      )
  }

  /**
   * Buttons specifically for this page.
   * @param props           Color, floated, type, id, and onClick function.
   */
  GenkiButton(props) {
    return (
      <Button
        size='big'
        compact
        color={props.color}
        floated={props.floated}
        type={props.type}
        id={props.id}
        onClick={props.onClick}>
          {props.type}
      </Button>
    )
  }

  render(){
    return(
      <div className='page'> {
        <Grid  padded='vertically'>
            <Divider />
            <Grid.Row>
                <Grid.Column width={4} className='virtualClassForm'>
                    <Divider />
                    <Grid.Row>
                        <Header as='h1' inverted color='orange'>
                        GENKI</Header>
                    </Grid.Row>
                    <Divider />
                    <Form inverted>
                        <this.FormField
                          color='orange'
                          name='user circle'
                          label='Class Name'
                          type='text'
                          placeholder='Class Name'
                        />
                        <Divider />
                        <this.FormField
                          color='orange'
                          name='lock circle'
                          label='Section'
                          type='text'
                          placeholder='Section'
                        />
                        <Divider />
                        <this.ButtonOptions/>
                    </Form>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    }

    </div>
    )
  }

}

export default VirtualClassForm;

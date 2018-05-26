import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class AwayTeamSelector extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


    handleChange = e => {
      this.setState({[e.target.name]: e.target.value})
    }

    async handleSubmit(e) {
      e.preventDefault()
      const  { name } = this.state
      const form = await axios.post('/api/away', {name});
     }





  render() {
    return (
      <div>
              <Form className="emailForm" onSubmit={this.handleSubmit} style={{ width: '600px'}}>
                <FormGroup id="formElement">
                  <Label for="name">Away Team --> </Label>
                  <Input
                    type="text"
                    name="name"
                    onChange={this.handleChange} />
                </FormGroup>
                <Button color="primary">Send</Button>
              </Form>
      </div>
    );
  }



}



export default AwayTeamSelector;

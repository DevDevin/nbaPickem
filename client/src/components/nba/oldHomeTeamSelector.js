import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container } from 'reactstrap';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel1 from './HomeCarousel.js';
import Carousel2 from './AwayCarousel.js';
import './nba.css';





class HomeTeamSelector extends Component {

  constructor(props) {
    super(props)

    this.state = {
      homeTeam: '',
      awayTeam: '',
      awayActiveState: '',
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

async childCall(activeIndex) {
  console.log('this is the active state from the child: ', activeIndex);

  this.setState({
    awayActiveState: activeIndex,
    awayFinalScore: 2,
  })

  // async childCall2 => activeIndex2 {
  //   console.log('this is the active state from the child: ', activeIndex2);
  //
  //   this.setState({
  //     awayActiveState: activeIndex2,
  //     awayFinalScore: 2,
  //   });

  const  { homeTeam } = this.state
  const teams = {
    homeTeam: activeIndex,
    awayTeam: 2,
  }
  console.log('this.away.awayActiveState = ',teams);

const form = await axios.post('/api/form', {teams});

}




    handleChange = e => {
      this.setState({[e.target.name]: e.target.value})
    }

    async handleSubmit(e, activeIndex) {
      e.preventDefault()
      const  { homeTeam } = this.state

      console.log('active index is: ');
      // const teams = {
      //   homeTeam: this.state.homeTeam,
      //   awayTeam: this.state.awayTeam,
      // }

      // const form = await axios.post('/api/form', {teams});


     }





  render() {
    return (
      <div className="pickerDiv">
      <Form className="emailForm" onSubmit={this.handleSubmit} style={{ width: '600px'}}>

        <FormGroup id="formElement">

<div id="test">

<Container>
    <Row>

         <Col xs="6">
         <Label for="name"><h2> Home Team </h2> </Label>
         <Input
           type="text"
           name="awayTeam"
           onChange={this.handleChange} />
           <Carousel2 childCall={this.childCall.bind(this)} />
         </Col>
         <Col xs="6">
         <Label for="name"><h2> Away Team </h2> </Label>
         <Input
           type="text"
           name="homeTeam"
           onChange={this.handleChange} />

<Carousel1 childCall={this.childCall.bind(this)} />

         </Col>
       </Row>
</Container>

</div>

    </FormGroup>



    <Button color="primary">Send</Button>

  </Form>







      </div>
    );
  }



}



export default HomeTeamSelector;

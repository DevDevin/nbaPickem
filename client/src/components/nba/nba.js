import React, { Component } from 'react';
import '../customers/customers.css';
import Img from 'react-image';
import './nba.css';
import { Button } from 'reactstrap';
import axios from 'axios';
import { Container, Row, Col  } from 'reactstrap';





class NBA extends Component {

constructor() {
  super();
  this.state = {
    homeFinalScore: '',
    name: '',
    awayFinalScore: '',
    bothScores: [],
  };


}







play = () => {
  fetch('/api/go')
    .then(res => res.json())
    .then(bothScores => this.setState({bothScores}, () => {

      console.log('bothScores fetched...', bothScores);
      console.log('homeScore: ',bothScores[0].homeScore);
      this.setState({
        homeFinalScore: bothScores[0].homeScore,
        awayFinalScore: bothScores[1].awayScore,
      })
      console.log(this.state.homeFinalScore);
      console.log(this.state.awayFinalScore);
    }
  ));
   }

  render() {
    return (
      <div>



        <Button color="secondary" onClick={this.play}>
          <Img className="ballButton" src='http://www.i2clipart.com/cliparts/d/c/a/7/clipart-vector-basketball-dca7.png' className="byuLogo"></Img>
        </Button>
        <h1 className="score"> {this.state.homeFinalScore} to {this.state.awayFinalScore} </h1>





      </div>


    );
  }



}



export default NBA;

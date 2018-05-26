import React, { Component } from 'react';
import logo from './logo.svg';
import basketball from './basketball.png';
import './App.css';
import Customers from './components/customers/customers';
import NBA from './components/nba/nba';
import Jumbotron from './components/nba/Jumbotron';
import HomeTeamSelector from './components/nba/HomeTeamSelector.js';
import AwayTeamSelector from './components/nba/AwayTeamSelector.js';
import MasterCarousel from './components/nba/Carousel.js';
import TestCarousel from './components/nba/testCarousel.js';
import { Row, Col  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <br/>
        <HomeTeamSelector />
        <br/>
        <br/>
        <br/>




      </div>
    );
  }
}

export default App;

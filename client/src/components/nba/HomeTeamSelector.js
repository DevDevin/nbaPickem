import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactDOM from 'react-dom';
import Img from 'react-image'
import { Carousel } from 'react-responsive-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel1 from './HomeCarousel.js';
import Carousel2 from './AwayCarousel.js';
import './nba.css';
import nbaLogo from '../../images/nbaLogo.jpg';
import boston from '../../images/teams/BostonCeltics.png';
import cleveland from '../../images/teams/ClevelandCavaliers.png';
import goldenState from '../../images/teams/GoldenStateWarriors.png';
import houston from '../../images/teams/HoustonRockets.png';
import utah from '../../images/teams/UtahJazz.png';
import foo from '../../images/nbaLogo.jpg';
import Lightbox from 'react-image-lightbox';
import atlanta from '../../images/teams/AtlantaHawks.webp';
import brooklyn from '../../images/teams/BrooklynNets.jpg';
import charlotte from '../../images/teams/CharlotteHornets.png';
import chicago from '../../images/teams/ChicagoBulls.jpg';
import dallas from '../../images/teams/DallasMavericks.png';
import denver from '../../images/teams/DenverNuggets.png';
import detroit from '../../images/teams/DetroitPistons.png';
import indiana from '../../images/teams/IndianaPacers.png';
import clippers from '../../images/teams/LAClippers.png';
import lakers from '../../images/teams/LALakers.webp';
import memphis from '../../images/teams/MemphisGrizzlies.png';
import miami from '../../images/teams/MiamiHeat.webp';
import milwaukee from '../../images/teams/MilwaukeeBucks.png';
import minnesota from '../../images/teams/MinnesotaTimberwolves.ico';
import newOrleans from '../../images/teams/NewOrleansPelicans.png';
import newYork from '../../images/teams/NewYorkKnicks.png';
import orlando from '../../images/teams/OrlandoMagic.png';
import pheonix from '../../images/teams/PheonixSuns.png';
import philadelphia from '../../images/teams/Philadelphia76ers.png';
import portland from '../../images/teams/PortlandTrailblazers.png';
import sacremento from '../../images/teams/SacramentoKings.png';
import sanAntonio from '../../images/teams/SanAntonioSpurs.png';
import toronto from '../../images/teams/TorontoRaptors.png';
import washington from '../../images/teams/WashingtonWizards.png';





class HomeTeamSelector extends Component {

  constructor(props) {
    super(props)

    this.state = {
      homeTeam: 'Atlanta Falcons',
      awayTeam: 'Atlanta Falcons',
      homeImage: atlanta,
      awayImage: atlanta,
      switchImage: foo,
      teams: [],
      homeFinalScore: '',
      name: '',
      awayFinalScore: '',
      bothScores: [],
      modal: false,
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
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

componentDidMount() {
  fetch('/api/customers')
  .then(res => res.json())
  .then(teams => this.setState({teams}, () => console.log('Customers fetched...', teams)));
}

// handleChangeHome
handleChange = e => {
  this.setState({
    [e.target.name]: e.target.value,
  })

  switch(e.target.value) {
    case 'Atlanta Hawks':
    this.setState({
      homeImage: atlanta,
    })
    break;
    case 'Brooklyn Nets':
    this.setState({
      homeImage: brooklyn,
    })
    break;
    case 'Boston Celtics':
    this.setState({
      homeImage: boston,
    })
    break;
    case 'Charlotte Hornets':
    this.setState({
      homeImage: charlotte,
    })
    break;
    case 'Chicago Bulls':
    this.setState({
      homeImage: chicago,
    })
    break;
    case 'Cleveland Cavaliers':
    this.setState({
      homeImage: cleveland,
    })
    break;
    case 'Dallas Mavericks':
    this.setState({
      homeImage: dallas,
    })
    break;
    case 'Denver Nuggets':
    this.setState({
      homeImage: denver,
    })
    break;
    case 'Detroit Pistons':
    this.setState({
      homeImage: detroit,
    })
    break;
    case 'Golden State Warriors':
    this.setState({
      homeImage: goldenState,
    })
    break;
    case 'Houston Rockets':
    this.setState({
      homeImage: houston,
    })
    break;
    case 'Indiana Pacers':
    this.setState({
      homeImage: indiana,
    })
    break;
    case 'Los Angeles Clippers':
    this.setState({
      homeImage: clippers,
    })
    break;
    case 'Los Angeles Lakers':
    this.setState({
      homeImage: lakers,
    })
    break;
    case 'Memphis Grizzlies':
    this.setState({
      homeImage: memphis,
    })
    break;
    case 'Miami Heat':
    this.setState({
      homeImage: miami,
    })
    break;
    case 'Milwaukee Bucks':
    this.setState({
      homeImage: milwaukee,
    })
    break;
    case 'Minnesota Timberwolves':
    this.setState({
      homeImage: minnesota,
    })
    break;
    case 'New Orleans Pelicans':
    this.setState({
      homeImage: newOrleans,
    })
    break;
    case 'New York Knicks':
    this.setState({
      homeImage: newYork,
    })
    break;
    case 'Oklahoma City Thunder':
    this.setState({
      homeImage: boston,
    })
    break;
    case 'Orlando Magic':
    this.setState({
      homeImage: orlando,
    })
    break;
    case 'Philadelphia 76ers':
    this.setState({
      homeImage: philadelphia,
    })
    break;
    case 'Phoenix Suns':
    this.setState({
      homeImage: pheonix,
    })
    break;
    case 'Portland Trail Blazers':
    this.setState({
      homeImage: portland,
    })
    break;
    case 'San Antonio Spurs':
    this.setState({
      homeImage: sanAntonio,
    })
    break;
    case 'Sacramento Kings':
    this.setState({
      homeImage: sacremento,
    })
    break;
    case 'Toronto Raptors':
    this.setState({
      homeImage: toronto,
    })
    break;
    case 'Utah Jazz':
    this.setState({
      homeImage: utah,
    })
    break;
    case 'Washington Wizards':
    this.setState({
      homeImage: washington,
    })
    break;
    default:
    this.setState({
      homeImage: foo,
    })
  }
}


// hnadleChangeAway
handleChangeAway = e => {
  this.setState({
    [e.target.name]: e.target.value,
  })

  switch(e.target.value) {
    case 'Atlanta Hawks':
    this.setState({
      awayImage: atlanta,
    })
    break;
    case 'Brooklyn Nets':
    this.setState({
      awayImage: brooklyn,
    })
    break;
    case 'Boston Celtics':
    this.setState({
      awayImage: boston,
    })
    break;
    case 'Charlotte Hornets':
    this.setState({
      awayImage: charlotte,
    })
    break;
    case 'Chicago Bulls':
    this.setState({
      awayImage: chicago,
    })
    break;
    case 'Cleveland Cavaliers':
    this.setState({
      awayImage: cleveland,
    })
    break;
    case 'Dallas Mavericks':
    this.setState({
      awayImage: dallas,
    })
    break;
    case 'Denver Nuggets':
    this.setState({
      awayImage: denver,
    })
    break;
    case 'Detroit Pistons':
    this.setState({
      awayImage: detroit,
    })
    break;
    case 'Golden State Warriors':
    this.setState({
      awayImage: goldenState,
    })
    break;
    case 'Houston Rockets':
    this.setState({
      awayImage: houston,
    })
    break;
    case 'Indiana Pacers':
    this.setState({
      awayImage: indiana,
    })
    break;
    case 'Los Angeles Clippers':
    this.setState({
      awayImage: clippers,
    })
    break;
    case 'Los Angeles Lakers':
    this.setState({
      awayImage: lakers,
    })
    break;
    case 'Memphis Grizzlies':
    this.setState({
      awayImage: memphis,
    })
    break;
    case 'Miami Heat':
    this.setState({
      awayImage: miami,
    })
    break;
    case 'Milwaukee Bucks':
    this.setState({
      awayImage: milwaukee,
    })
    break;
    case 'Minnesota Timberwolves':
    this.setState({
      awayImage: minnesota,
    })
    break;
    case 'New Orleans Pelicans':
    this.setState({
      awayImage: newOrleans,
    })
    break;
    case 'New York Knicks':
    this.setState({
      awayImage: newYork,
    })
    break;
    case 'Oklahoma City Thunder':
    this.setState({
      awayImage: boston,
    })
    break;
    case 'Orlando Magic':
    this.setState({
      awayImage: orlando,
    })
    break;
    case 'Philadelphia 76ers':
    this.setState({
      awayImage: philadelphia,
    })
    break;
    case 'Phoenix Suns':
    this.setState({
      awayImage: pheonix,
    })
    break;
    case 'Portland Trail Blazers':
    this.setState({
      awayImage: portland,
    })
    break;
    case 'San Antonio Spurs':
    this.setState({
      awayImage: sanAntonio,
    })
    break;
    case 'Sacramento Kings':
    this.setState({
      awayImage: sacremento,
    })
    break;
    case 'Toronto Raptors':
    this.setState({
      awayImage: toronto,
    })
    break;
    case 'Utah Jazz':
    this.setState({
      awayImage: utah,
    })
    break;
    case 'Washington Wizards':
    this.setState({
      awayImage: washington,
    })
    break;
    default:
    this.setState({
      awayImage: foo,
    })
  }
}

async handleSubmit(e, activeIndex) {
  e.preventDefault()

  // TOGGLES THE MODAL //
  this.setState({
    modal: !this.state.modal
  });

  const teams = {
    homeTeam: this.state.homeTeam,
    awayTeam: this.state.awayTeam,
  }

  const form = await axios.post('/api/form', {teams});


}

toggle() {
  this.setState({
    modal: !this.state.modal,
    homeFinalScore: '',
    awayFinalScore: '',
  });
}


render() {

  const { homeImage } = this.state;

  const imagePassedDown = (switchImage) => {
    console.log('running imagePassedDown');
    if(switchImage){
      return 'foo';

    }
    else if(!switchImage) {
      return 'bar';
    }
    console.log(imagePassedDown);
  };

  return (
    <div className="pickerDiv">



    <Form className="emailForm" onSubmit={this.handleSubmit} style={{ width: '600px'}}>

    <FormGroup id="formElement">

    <div id="test">

    <Container>
    <Row>

    <Col xs="6">
    <center>
    <Label><h2> Home Team </h2> </Label><br/>
    <img src={this.state.homeImage} width="100" height="50" />
    <Input type="select" name="homeTeam" id="exampleSelect" onChange={this.handleChange}>
    {this.state.teams.map(team =>
      <option key={team.id}>{team.name}</option>
    )}
    </Input>
    </center>
    </Col>


    <Col xs="6">
    <center>
    <Label><h2> Away Team </h2> </Label><br/>
    <Img src={this.state.awayImage} width="100" height="50"/>
    <Input type="select" name="awayTeam" id="exampleSelect" onChange={this.handleChangeAway}>
    {this.state.teams.map(team =>
      <option key={team.id}>{team.name}</option>
    )}
    </Input>


    </center>
    </Col>
    </Row>
    <Row>
    <Col>
    <br/><center>  <Button color="primary">Select</Button> </center>
    </Col>
    </Row>
    </Container>

    </div>

    </FormGroup>





    </Form>





    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
    <ModalHeader toggle={this.toggle}>{this.state.homeTeam} vs {this.state.awayTeam}</ModalHeader>
    <ModalBody>
    <Container>

    <Row>

    <Col xs="4">
    <center>
    <img src={this.state.homeImage} width="100" height="50" />
    <h1> {this.state.homeFinalScore} </h1>
    </center>
    </Col>
    <Col xs="4">
    <center>
    <h1>VS</h1>
    <Button color="secondary" onClick={this.play}>Play Ball!</Button>
    </center>
    </Col>
    <Col xs="4">
    <center>
    <Img src={this.state.awayImage} width="100" height="50"/>
    <h1> {this.state.awayFinalScore} </h1>
    </center>
    </Col>

    </Row>

    </Container>


    </ModalBody>
    <ModalFooter>
    <Button color="" onClick={this.toggle}>Close</Button>
    </ModalFooter>
    </Modal>




    </div>
  );
}



}



export default HomeTeamSelector;

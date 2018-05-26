import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container } from 'reactstrap';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators,CarouselCaption} from 'reactstrap';

const awayItems = [
  {
    id: 1,
    src: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/30/logo.png',
    altText: '',
    caption: ''
  },
  {
    id: 2,
    src: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/22/logo.png',
    altText: '',
    caption: ''
  },
  {
    id: 3,
    src: 'https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/9f/a5/0d/9fa50d27-1d0b-e10a-ab0b-185ab8566cc7/source/256x256bb.jpg',
    altText: '',
    caption: ''
  },
  {
    id: 4,
    src: 'https://pbs.twimg.com/profile_images/694271187401248768/uhWmMhx8_400x400.jpg',
    altText: '',
    caption: ''
  },
  {
    id: 5,
    src: 'https://pbs.twimg.com/profile_images/686649285954383872/crw--dDg_400x400.png',
    altText: '',
    caption: ''
  },
  {
    id: 6,
    src: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/28/logo.png',
    altText: '',
    caption: ''
  }
];

class TestCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 1 };
    this.next2 = this.next2.bind(this);
    this.previous2 = this.previous2.bind(this);
    this.goToIndex2 = this.goToIndex2.bind(this);
    this.onExiting2 = this.onExiting2.bind(this);
    this.onExited2 = this.onExited2.bind(this);
  }

  componentDidMount() {
      // console.log('Component DID MOUNT!')
      let testVar = 'hello world';
      // console.log(testVar);
      // let activeIndex = this.refs.testRef.props.activeIndex;
      // // console.log('Active Index is: ',this.state.activeIndex);
      // let activeIndex2 = this.state.activeIndex;

      // this.props.childCall(activeIndex);
   }


  onExiting2() {
    this.animating = true;
  }

  onExited2() {
    this.animating = false;
  }

  next2() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === awayItems.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    let activeIndex = this.refs.testRef.props.activeIndex;
    // console.log('Active Index is: ',activeIndex);
    // console.log('Next index is: ',nextIndex);

  }

  previous2() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? awayItems.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex2(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = awayItems.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>


      );
    });

    return (
      <div>

      <Carousel ref="testRef"
        activeIndex={activeIndex}
        next={this.next2}
        previous={this.previous2}
      >
        <CarouselIndicators items={awayItems} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous2} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next2} />
      </Carousel>

      <Button onClick={()=> this.props.childCall(this.refs.testRef.props.activeIndex)} color="primary">Update Parent</Button>

      </div>
    );
  }
}


export default TestCarousel;

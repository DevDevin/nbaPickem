import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Container } from 'reactstrap';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators,CarouselCaption} from 'reactstrap';

const homeItems = [
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

class MasterCarousel extends Component {
  constructor(props) {
    super(props);
/// home team ///
    // this.state = { activeIndex: 1 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
/// away team ///
    this.state = { activeIndex2: 5 };
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
      let activeIndex = 1;
      // let activeIndex = this.refs.testRef.props.activeIndex;
      let activeIndex2 = this.refs.testRef2.props.activeIndex2;
      console.log('Active Index is: ',activeIndex);
      // let activeIndex2 = this.state.activeIndex;

      // this.props.childCall(activeIndex);
   }


  onExiting() {
    this.animating = true;
  }

  onExiting2() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  onExited2() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === homeItems.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
    let activeIndex = this.refs.testRef.props.activeIndex;
    // console.log('Active Index is: ',activeIndex);
    // console.log('Next index is: ',nextIndex);

  }

  next2() {
    if (this.animating) return;
    const nextIndex2 = this.state.activeIndex2 === awayItems.length - 1 ? 0 : this.state.activeIndex2 + 1;
    this.setState({ activeIndex2: nextIndex2 });
    let activeIndex2 = this.refs.testRef2.props.activeIndex2;
    // console.log('Active Index is: ',activeIndex);
    // console.log('Next index is: ',nextIndex);

  }

  previous() {
    console.log('Previous!!');
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? homeItems.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous2() {
    if (this.animating) return;
    const nextIndex2 = this.state.activeIndex2 === 0 ? awayItems.length - 1 : this.state.activeIndex2 - 1;
    this.setState({ activeIndex2: nextIndex2 });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  goToIndex2(newIndex2) {
    if (this.animating) return;
    this.setState({ activeIndex2: newIndex2 });
  }

  render() {
    const { activeIndex } = this.state;
    const { activeIndex2 } = this.state;

    const slides = homeItems.map((item) => {
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
/// away slide ///
    const slides2 = awayItems.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting2}
          onExited={this.onExited2}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>


      );
    });

    return (
      <div>

<p> Home Carousel </p>
      <Carousel ref="testRef"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={homeItems} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>

<p> Away Carousel </p>
      <Carousel ref="testRef2"
        activeIndex={activeIndex2}
        next={this.next2}
        previous={this.previous2}
      >
        <CarouselIndicators items={awayItems} activeIndex={activeIndex2} onClickHandler={this.goToIndex2} />
        {slides2}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous2} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next2} />
      </Carousel>

      <Button onClick={()=> this.props.childCall(this.refs.testRef.props.activeIndex)} color="primary">Update Parent</Button>

      </div>
    );
  }
}


export default MasterCarousel;

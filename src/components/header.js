import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap'

const items = [
  {
    altText: 'Slide 1',
    caption: 'Chocovitsa',
  },
  {
    altText: 'Slide 2',
    caption: 'Black Chocolate',
  },
  {
    altText: 'Slide 3',
    caption: 'Milk Chocolate',
  },
  {
    altText: 'Slide 3',
    caption: 'White Chocolate',
  },
]

export default class Header extends React.Component {
  state = { activeIndex: 0 }

  onExiting = () => {
    this.animating = true
  }

  onExited = () => {
    this.animating = false
  }

  next = () => {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous = () => {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex = newIndex => {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { images, logo } = this.props
    const { activeIndex } = this.state
    const slides = items.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <Img
            style={{ height: '100vh' }}
            fluid={images[index].childImageSharp.fluid}
          />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      )
    })

    return [
      <header>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </header>,
    ]
  }
}

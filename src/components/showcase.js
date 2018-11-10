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

export default class Header extends React.Component {
  state = { activeIndex: 0, animating: false }

  onExiting = () => {
    this.setState({ animating: true })
  }

  onExited = () => {
    this.setState({ animating: false })
  }

  next = () => {
    if (this.state.animating) return
    const nextIndex =
      this.state.activeIndex === this.props.items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous = () => {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  render() {
    const { activeIndex } = this.state
    const slides = this.props.items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <Img
            style={{ height: '100vh' }}
            fluid={item.image}
            alt={item.altText}
          />
          <CarouselCaption
            captionText={item.summary}
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
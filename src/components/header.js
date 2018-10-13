import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({ image }) => (
  <header className="masthead">
    <Img
      style={{ top: 0, left: 0, right: 0, bottom: 0, position: `absolute` }}
      fluid={image.childImageSharp.fluid}
    />
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Our Studio!</div>
        <div className="intro-heading text-uppercase">
          It's Nice To Meet You
        </div>
        <a
          className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          href="#services"
        >
          Tell Me More
        </a>
      </div>
    </div>
  </header>
)

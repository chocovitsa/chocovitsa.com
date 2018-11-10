import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'flag-icon-css/css/flag-icon.min.css'

import Showcase from './showcase'

import '../scss/agency.scss'
import { graphql } from 'gatsby'

const Header = ({ data }) => (
  <Showcase
    items={[
      {
        image: data.showcase1Background.childImageSharp.fluid,
        altText: data.showcase1Description.edges[0].node.frontmatter.title,
        caption: data.showcase1Description.edges[0].node.frontmatter.title,
        summary: data.showcase1Description.edges[0].node.frontmatter.summary,
      },
      {
        image: data.showcase2Background.childImageSharp.fluid,
        altText: data.showcase2Description.edges[0].node.frontmatter.title,
        caption: data.showcase2Description.edges[0].node.frontmatter.title,
        summary: data.showcase2Description.edges[0].node.frontmatter.summary,
      },
      {
        image: data.showcase3Background.childImageSharp.fluid,
        altText: data.showcase3Description.edges[0].node.frontmatter.title,
        caption: data.showcase3Description.edges[0].node.frontmatter.title,
        summary: data.showcase3Description.edges[0].node.frontmatter.summary,
      },
      {
        image: data.showcase4Background.childImageSharp.fluid,
        altText: data.showcase4Description.edges[0].node.frontmatter.title,
        caption: data.showcase4Description.edges[0].node.frontmatter.title,
        summary: data.showcase4Description.edges[0].node.frontmatter.summary,
      },
    ]}
  />
)

export default Header

export const showcaseQuery = graphql`
  fragment showcaseQuery on Query {
    showcase1Background: file(
      relativePath: { eq: "images/3-choco-on-rosehip-and-pumpkin.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcase1Description: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/bg/about-chocolates/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            summary
          }
        }
      }
    }
    showcase2Background: file(
      relativePath: {
        eq: "images/black-choco-with-spilled-basket-and-rosehip.jpg"
      }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcase2Description: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/bg/chocolate-black/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            summary
          }
        }
      }
    }
    showcase3Background: file(
      relativePath: { eq: "images/white-choco-on-rosehip.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcase3Description: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/bg/chocolate-white/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            summary
          }
        }
      }
    }
    showcase4Background: file(
      relativePath: { eq: "images/milk-choco-on-rosehip.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcase4Description: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/bg/chocolate-milk/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            summary
          }
        }
      }
    }
  }
`

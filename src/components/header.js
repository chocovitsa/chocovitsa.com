import React from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

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
      filter: { fileAbsolutePath: { regex: "/en/about-chocolates/" } }
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
      relativePath: { eq: "images/2-black-choco-in-basket.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcase2Description: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/en/chocolate-black/" } }
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
      relativePath: { eq: "images/2-milk-choco-in-basket.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcase3Description: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/en/chocolate-milk/" } }
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
      relativePath: { eq: "images/2-white-choco-in-basket.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    showcase4Description: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/en/chocolate-white/" } }
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

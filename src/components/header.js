import React from 'react'
import Showcase from './showcase'
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
      ...showcaseImageQuery
    }
    showcase1Description: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/about-chocolates/" }
        frontmatter: { language: { eq: $locale } }
      }
    ) {
      ...showcaseImageQuery
    }
    showcase2Background: file(
      relativePath: {
        eq: "images/black-choco-with-spilled-basket-and-rosehip.jpg"
      }
    ) {
      ...showcaseImageQuery
    }
    showcase2Description: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/bg/chocolate-black/" }
        frontmatter: { language: { eq: $locale } }
      }
    ) {
      ...showcaseImageQuery
    }
    showcase3Background: file(
      relativePath: { eq: "images/white-choco-on-rosehip.jpg" }
    ) {
      ...showcaseImageQuery
    }
    showcase3Description: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/chocolate-white/" }
        frontmatter: { language: { eq: $locale } }
      }
    ) {
      ...showcaseImageQuery
    }
    showcase4Background: file(
      relativePath: { eq: "images/milk-choco-on-rosehip.jpg" }
    ) {
      ...showcaseImageQuery
    }
    showcase4Description: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/bg/chocolate-milk/" }
        frontmatter: { language: { eq: $locale } }
      }
    ) {
      ...showcaseImageQuery
    }
  }
`

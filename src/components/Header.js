import React from 'react'
import { graphql } from 'gatsby'
import Showcase from './Showcase'

const Header = ({ data }) => (
  <Showcase
    items={[
      {
        image: data.showcase1Background.childImageSharp.fluid,
        altText: data.showcase1Description.edges[0].node.frontmatter.title,
        caption: data.showcase1Description.edges[0].node.frontmatter.title,
        summary: data.showcase1Description.edges[0].node.frontmatter.summary,
        key: 'showcase1',
      },
      {
        image: data.showcase2Background.childImageSharp.fluid,
        altText: data.showcase2Description.edges[0].node.frontmatter.title,
        caption: data.showcase2Description.edges[0].node.frontmatter.title,
        summary: data.showcase2Description.edges[0].node.frontmatter.summary,
        key: 'showcase2',
      },
      {
        image: data.showcase3Background.childImageSharp.fluid,
        altText: data.showcase3Description.edges[0].node.frontmatter.title,
        caption: data.showcase3Description.edges[0].node.frontmatter.title,
        summary: data.showcase3Description.edges[0].node.frontmatter.summary,
        key: 'showcase3',
      },
      {
        image: data.showcase4Background.childImageSharp.fluid,
        altText: data.showcase4Description.edges[0].node.frontmatter.title,
        caption: data.showcase4Description.edges[0].node.frontmatter.title,
        summary: data.showcase4Description.edges[0].node.frontmatter.summary,
        key: 'showcase4',
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
      ...showcaseDescrQuery
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
        fileAbsolutePath: { regex: "/chocolate-black/" }
        frontmatter: { language: { eq: $locale } }
      }
    ) {
      ...showcaseDescrQuery
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
      ...showcaseDescrQuery
    }
    showcase4Background: file(
      relativePath: { eq: "images/milk-choco-on-rosehip.jpg" }
    ) {
      ...showcaseImageQuery
    }
    showcase4Description: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/chocolate-milk/" }
        frontmatter: { language: { eq: $locale } }
      }
    ) {
      ...showcaseDescrQuery
    }
  }
`

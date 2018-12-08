import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import Img from 'gatsby-image'
import deviderImg from '../images/square-and-cyrcles.svg'

const Chocolates = ({ data: { chocolateInfos, chocolateImages } }) =>
  chocolateInfos.edges.map(edge => (
    <Col lg={6}>
      <Row>
        <Col lg={3}>
          <Img fluid={chocolateImages.edges[0].node.childImageSharp.fluid} />
        </Col>
        <Col lg={9}>
          <div
            dangerouslySetInnerHTML={{
              __html: edge.node.html,
            }}
          />
        </Col>
      </Row>
    </Col>
  ))

const Products = ({ data }) => [
  <section id="products">
    <Container>
      <Row>
        <Col>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{
              __html: data.aboutChocolates.edges[0].node.html,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Chocolates data={data} />{' '}
      </Row>
    </Container>
  </section>,
  <div
    style={{ backgroundImage: `url(${deviderImg})` }}
    className="section-devider"
  />,
]

export default Products

export const aboutChocolatesQuery = graphql`
  fragment aboutChocolatesQuery on Query {
    aboutChocolates: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/about-chocolates/" }
        frontmatter: { language: { eq: $locale } }
      }
    ) {
      edges {
        node {
          html
        }
      }
    }
    chocolateImages: allFile(
      filter: {
        absolutePath: { regex: "/chocolate-/" }
        extension: { in: ["png", "jpg"] }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
    chocolateInfos: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/chocolate-/" }
        frontmatter: { language: { eq: $locale } }
      }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`

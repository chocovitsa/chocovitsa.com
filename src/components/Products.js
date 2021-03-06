import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import Img from 'gatsby-image'

const Chocolates = ({ data: { chocolateInfos, chocolateImages } }) =>
  chocolateInfos.edges.map((edge, index) => (
    <Col lg={6}>
      <Row>
        <Col lg={3}>
          <Img
            fluid={chocolateImages.edges[index].node.childImageSharp.fluid}
          />
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

const Products = ({ data }) => (
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
  </section>
)

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
        extension: { eq: "jpg" }
      }
    ) {
      edges {
        node {
          absolutePath
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
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
          fileAbsolutePath
          html
        }
      }
    }
  }
`

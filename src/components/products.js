import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import Img from 'gatsby-image'

const Products = ({ data }) => (
  <section id="products">
    <Container>
      <Row>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{
            __html: data.aboutChocolates.edges[0].node.html,
          }}
        />
      </Row>
      <Row>
        <Col xs={3}>
          <Img fluid={data.milkChocoImage.childImageSharp.fluid} />
        </Col>
        <Col xs={9}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.milkChoco.edges[0].node.html,
            }}
          />
        </Col>
      </Row>
    </Container>
  </section>
)

export const aboutChocolatesQuery = graphql`
  fragment aboutChocolatesQuery on Query {
    milkChocoImage: file(
      relativePath: { eq: "images/milk-choco-on-rosehip.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutChocolates: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about-chocolates/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
    milkChoco: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/bg/chocolate-milk/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`

export default Products

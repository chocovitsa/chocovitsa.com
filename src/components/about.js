import React from 'react'
import { Container } from 'reactstrap'

const About = ({ data }) => (
  <section id="about">
    <Container>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{
          __html: data.aboutChocovitsa.edges[0].node.html,
        }}
      />
    </Container>
  </section>
)

export const aboutChocovitsaQuery = graphql`
  fragment aboutChocovitsaQuery on Query {
    aboutChocovitsa: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/about-chocovitsa/" }
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

export default About

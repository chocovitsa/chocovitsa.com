import React from 'react'

const About = ({ data }) => (
  <section id="about">
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{
        __html: data.aboutChocovitsa.edges[0].node.html,
      }}
    />
  </section>
)

export const aboutChocovitsaQuery = graphql`
  fragment aboutChocovitsaQuery on Query {
    aboutChocovitsa: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about-chocovitsa/" } }
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

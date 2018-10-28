import React from 'react'
import Layout from '../components/layout'
import Products from '../components/products'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default ({ data }) => (
  <Layout>
    <div>
      <Products data={data} />
      <About data={data} />
      <Contact />
      <Footer />
    </div>
  </Layout>
)

export const dataQuery = graphql`
  query {
    ...aboutChocolatesQuery
    ...aboutChocovitsaQuery
    milkChoco: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/bg/chocolate-milk.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            wrapColor
          }
          html
        }
      }
    }
    milkChocoImage: file(relativePath: { eq: "images/white-choco-wrrap.png" }) {
      childImageSharp {
        fluid(maxHeight: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

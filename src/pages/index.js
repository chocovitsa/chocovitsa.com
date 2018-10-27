import React from 'react'
import Layout from '../components/layout'
import Products from '../components/products'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default ({ data }) => (
  <Layout>
    <div>
      <Products content={data.chocolates.edges[0].node.html} />
      <About content={data.about.edges[0].node.html} />
      <Contact />
      <Footer />
    </div>
  </Layout>
)

export const aboutQuery = graphql`
  query {
    chocolates: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about-chocolates_bg/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about-chocovitsa_bg/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`

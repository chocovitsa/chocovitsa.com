import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Products from '../components/products'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home = ({ pathContext: { locale }, data }) => (
  <Layout locale={locale} data={data}>
    <Header data={data} />
    <Products data={data} />
    <About data={data} />
    <Contact />
    <Footer />
  </Layout>
)

export default Home

export const dataQuery = graphql`
  query dataQuery($locale: String) {
    ...showcaseQuery
    ...aboutChocolatesQuery
    ...aboutChocovitsaQuery
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/about-chocolates/" }
        frontmatter: { language: { eq: $locale } }
      }
    ) {
      edges {
        node {
          id
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

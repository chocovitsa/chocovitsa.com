import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Products from '../components/products'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

export default ({ data }) => (
  <Layout data={data}>
    <Header data={data} />
    <Products data={data} />
    <About data={data} />
    <Contact />
    <Footer />
  </Layout>
)

export const dataQuery = graphql`
  query {
    ...showcaseQuery
    ...aboutChocolatesQuery
    ...aboutChocovitsaQuery
    site {
      siteMetadata {
        i18n {
          defaultLang
          langs
        }
      }
    }
  }
`

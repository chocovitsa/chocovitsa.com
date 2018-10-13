import React from 'react'
import Layout from '../components/layout'
import Products from '../components/products'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => (
  <Layout>
    <div>
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  </Layout>
)

export default IndexPage

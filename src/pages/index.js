import React from 'react'
import Link from 'gatsby-link'
import Products from '../components/products'
import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => (
  <div>
    <Products />
    <About />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage

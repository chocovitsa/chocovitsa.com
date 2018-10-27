import React from 'react'

const Products = ({ content }) => (
  <section className="bg-light" id="products">
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </section>
)

export default Products

import React from 'react'

const About = ({ content }) => (
  <section id="about">
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  </section>
)

export default About

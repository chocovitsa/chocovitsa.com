import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.png'

const Seo = ({ lang, title, description, keywords }) => (
  <Helmet
    htmlAttributes={{
      lang,
      dir: 'ltr',
    }}
    title={title}
    meta={[
      {
        name: 'title',
        content: title,
      },
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content: keywords,
      },
      {
        name: 'google-site-verification',
        content: 'MQN82vrvPE1iL7uHXMd0IC6vklEjUdrL3RG5HtCg21g',
      },
    ]}
    link={[
      { rel: 'shortcut icon', href: favicon },
      { rel: 'canonical', href: 'https://chocovitsa.com/bg/home' },
    ]}
  />
)

export default Seo

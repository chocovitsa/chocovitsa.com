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
      { name: 'msvalidate.01', content: '0D0715CC1E167883809552DCD2ED1014' },
    ]}
    link={[
      { rel: 'shortcut icon', href: favicon },
      { rel: 'canonical', href: 'https://chocovitsa.com/bg/home' },
    ]}
  />
)

export default Seo

import React from 'react'
import Helmet from 'react-helmet'
import favicon32 from '../images/favicon32.png'
import favicon57 from '../images/favicon57.png'
import favicon72 from '../images/favicon72.png'
import favicon114 from '../images/favicon114.png'
import favicon144 from '../images/favicon144.png'

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
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'google-site-verification',
        content: 'MQN82vrvPE1iL7uHXMd0IC6vklEjUdrL3RG5HtCg21g',
      },
      { name: 'msvalidate.01', content: '0D0715CC1E167883809552DCD2ED1014' },
      {
        name: 'og:title',
        content: title,
      },
      {
        name: 'og:description',
        content: description,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
    ]}
    link={[
      { rel: 'shortcut icon', href: favicon32 },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '144x144',
        href: favicon144,
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '114x114',
        href: favicon114,
      },
      {
        rel: 'apple-touch-icon-precomposed',
        sizes: '72x72',
        href: favicon72,
      },
      {
        rel: 'apple-touch-icon-precomposed',
        href: favicon57,
      },
      { rel: 'canonical', href: 'https://chocovitsa.com/bg/home' },
      {
        rel: 'alternate',
        href: 'https://chocovitsa.com',
        hreflang: 'x-default',
      },
      {
        rel: 'alternate',
        href: 'https://chocovitsa.com/en/home',
        hreflang: 'en',
      },
      {
        rel: 'alternate',
        href: 'https://chocovitsa.com/bg/home',
        hreflang: 'bg',
      },
    ]}
  />
)

export default Seo

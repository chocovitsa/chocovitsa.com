import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.png'

const Seo = ({ title, locale }) => (
  <Helmet
    htmlAttributes={{
      lang: locale,
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
        content:
          'Colourfull and modern chocolates, reshaping Bulgarian traditional embroidery in completely new way!',
      },
      {
        name: 'keywords',
        content:
          'chocovitsa, chocovitsa.com, chocolate, bulgarian traditional embroidery, hand made, rich taste, stylish',
      },
      {
        name: 'google-site-verification',
        content: 'MQN82vrvPE1iL7uHXMd0IC6vklEjUdrL3RG5HtCg21g',
      },
    ]}
    link={[{ rel: 'shortcut icon', href: favicon }]}
  />
)

export default Seo

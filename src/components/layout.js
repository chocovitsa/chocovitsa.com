import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { IntlProvider, addLocaleData } from 'react-intl'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/agency.scss'
import favicon from '../images/favicon.png'

class Layout extends React.Component {
  render() {
    const { locale, data, children } = this.props
    // Good only for SSR
    addLocaleData(require(`react-intl/locale-data/${locale}`))
    const messages = require(`../content/messages.${locale}`)
    return (
      <IntlProvider locale={locale} messages={messages}>
        <div>
          <Helmet
            htmlAttributes={{
              lang: locale,
              dir: 'ltr',
            }}
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'title',
                content:
                  'Colourfull and modern chocolates, reshaping Bulgarian traditional embroidery in completely new way!',
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
          {children}
        </div>
      </IntlProvider>
    )
  }
}

Layout.propTypes = {
  locale: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
}

export default Layout

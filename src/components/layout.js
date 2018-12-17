import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { IntlProvider, addLocaleData } from 'react-intl'
import Navigation from './Navigation'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '../scss/agency.scss'

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
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Chovitsa' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Navigation />
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

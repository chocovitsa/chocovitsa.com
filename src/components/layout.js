import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData } from 'react-intl'
import Seo from '../components/Seo'

import 'bootstrap/dist/css/bootstrap.min.css'
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
          <Seo title={data.site.siteMetadata.title} lang={locale} />
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

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import bg from 'react-intl/locale-data/bg'
import enMessages from '../content/messages.en'
import bgMessages from '../content/messages.bg'

import Navigation from './navigation'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'react-widgets/dist/css/react-widgets.css'
import 'flag-icon-css/css/flag-icon.min.css'
import '../scss/agency.scss'

const messages = { en: enMessages, bg: bgMessages }

addLocaleData([...en, ...bg])
class Layout extends React.Component {
  chose
  render() {
    const { locale, data, children } = this.props

    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
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

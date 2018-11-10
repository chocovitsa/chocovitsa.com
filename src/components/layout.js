import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import bg from 'react-intl/locale-data/bg'
import locale from 'browser-locale'

import Navigation from './navigation'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'react-widgets/dist/css/react-widgets.css'
import 'flag-icon-css/css/flag-icon.min.css'
import '../scss/agency.scss'

addLocaleData([...en, ...bg])
class Layout extends React.Component {
  render() {
    const { data, children } = this.props

    return (
      <IntlProvider locale="bg">
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
  data: PropTypes.object,
  children: PropTypes.func,
}

export default Layout

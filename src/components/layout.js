import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Header from './header'
import Navigation from './navigation'

import '../scss/agency.scss'

class Layout extends React.Component {
  state = {
    sticky: false,
  }

  onEnter = () => {
    this.setState({ sticky: false })
  }

  onLeave = () => {
    this.setState({ sticky: true })
  }

  render() {
    let { children } = this.props

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
            headerBackground: file(
              relativePath: { eq: "images/header-bg.png" }
            ) {
              childImageSharp {
                fluid(maxHeight: 1280) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            headerLogo: file(relativePath: { eq: "images/header-logo.png" }) {
              childImageSharp {
                fluid(maxHeight: 400) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        `}
        render={data => (
          <div>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Chovitsa' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            />
            <Header background={data.headerBackground} logo={data.headerLogo} />
            <Waypoint onEnter={this.onEnter} onLeave={this.onLeave} />
            <Navigation />

            <div
              style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '0px 1.0875rem 1.45rem',
                paddingTop: 0,
              }}
            >
              {children}
            </div>
          </div>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

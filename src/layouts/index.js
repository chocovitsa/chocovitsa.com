import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Header from '../components/header'
import Navbar from '../components/navbar'

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
    let { children, data } = this.props

    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Waypoint onEnter={this.onEnter} onLeave={this.onLeave} />
        <Navbar sticky={this.state.sticky} />

        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children()}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

import React from 'react'
import browserLang from 'browser-lang'
import { Link, navigate } from 'gatsby'
import locales from '../content/locales'
import Layout from '../components/layout'

class Index extends React.Component {
  constructor(props) {
    super(props)

    const languages = Object.keys(locales.available)
    const fallback = locales.default

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const detected =
        (window.localStorage && window.localStorage.getItem('language')) ||
        browserLang({
          languages,
          fallback,
        })

      navigate(`/${detected}/home`, { replace: true })
    }
  }

  render() {
    const languages = Object.keys(locales.available)
    return (
      <Layout locale={locales.default}>
        {languages.map(locale => (
          <Link to={`${locale}/home`} />
        ))}
      </Layout>
    )
  }
}

export default Index

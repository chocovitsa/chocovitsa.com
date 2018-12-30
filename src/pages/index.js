import React from 'react'
import browserLang from 'browser-lang'
import { navigate } from 'gatsby'
import locales from '../content/locales'
import Seo from '../components/Seo'

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
    return (
      <Seo
        locale={locales.default}
        title="Chockovitsa - Chocolates in Bulgarian embroidery"
      />
    )
  }
}

export default Index

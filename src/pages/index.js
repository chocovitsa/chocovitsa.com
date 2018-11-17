import React from 'react'
import browserLang from 'browser-lang'
import { navigate } from 'gatsby'
import locales from '../content/locales'

class Index extends React.Component {
  constructor(props) {
    super(props)

    const langKeys = Object.keys(locales)
    const fallback = langKeys.find(langKey => locales[langKey].default)

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const detected =
        window.localStorage.getItem('language') ||
        browserLang({
          languages: langKeys,
          fallback,
        })

      navigate(`/${detected}/home`, { replace: true })
    }
  }

  render() {
    return <div />
  }
}

export default Index

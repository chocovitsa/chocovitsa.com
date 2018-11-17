import React from 'react'
import browserLang from 'browser-lang'
import { withPrefix } from 'gatsby-link'
import locales from '../content/locales'

class Index extends React.Component {
  constructor(props) {
    super(props)

    const langKeys = Object.keys(locales)
    const fallback = Object.entries(locales).find(entry => entry[1].default)[0]

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const detected =
        window.localStorage.getItem('language') ||
        browserLang({
          languages: langKeys,
          fallback,
        })

      const homeUrl = withPrefix(`/${detected}/home`)
      window.___replace(homeUrl)
    }
  }

  render() {
    return <div />
  }
}

export default Index

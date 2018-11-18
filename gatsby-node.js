const locales = require('./src/content/locales')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    if (page.path === '/') {
      resolve()
      return
    }

    deletePage(page)
    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
        },
      })
    })

    resolve()
  })
}

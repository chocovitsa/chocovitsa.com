const locales = require('./src/content/locales')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    if (page.path === '/') {
      resolve()
      return
    }

    deletePage(page)
    Object.keys(locales.available).map(locale => {
      const localizedPath = locale + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale,
        },
      })
    })

    resolve()
  })
}

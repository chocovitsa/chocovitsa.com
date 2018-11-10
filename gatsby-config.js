module.exports = {
  siteMetadata: {
    title: 'Chockovitsa - Chocolates in Bulgarian embroidery',
    author: 'chocovitsa.com',
    description: 'Chockovitsa web site',
    i18n: {
      langs: ['bg', 'en'],
      defaultLang: 'bg',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Open Sans Condensed:300',
            subsets: ['latin', 'cyrillic'],
          },
        ],
      },
    },
  ],
}

export default [
  {
    image: data.showcase1Background.childImageSharp.fluid,
    altText: data.showcase1Description.edges[0].node.frontmatter.title,
    caption: data.showcase1Description.edges[0].node.frontmatter.title,
    summary: data.showcase1Description.edges[0].node.frontmatter.summary,
    key: 'showcase1',
  },
  {
    image: data.showcase2Background.childImageSharp.fluid,
    altText: data.showcase2Description.edges[0].node.frontmatter.title,
    caption: data.showcase2Description.edges[0].node.frontmatter.title,
    summary: data.showcase2Description.edges[0].node.frontmatter.summary,
    key: 'showcase2',
  },
  {
    image: data.showcase3Background.childImageSharp.fluid,
    altText: data.showcase3Description.edges[0].node.frontmatter.title,
    caption: data.showcase3Description.edges[0].node.frontmatter.title,
    summary: data.showcase3Description.edges[0].node.frontmatter.summary,
    key: 'showcase3',
  },
  {
    image: data.showcase4Background.childImageSharp.fluid,
    altText: data.showcase4Description.edges[0].node.frontmatter.title,
    caption: data.showcase4Description.edges[0].node.frontmatter.title,
    summary: data.showcase4Description.edges[0].node.frontmatter.summary,
    key: 'showcase4',
  },
]

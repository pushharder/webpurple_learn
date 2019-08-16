const splitPath = path => path.split('/');

const pageQuery = `{
  allMarkdownRemark {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          tags
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}`

const navQuery = `{
  allMarkdownRemark {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          order
        }
        fields {
          slug
        }
      }
    }
  }
}`

const navDataTransformer = ({ data: { allMarkdownRemark: { edges } } }) => edges
  .map(({ node: { frontmatter: { title, order }, fields: { slug } } }) => ({ title, slug, order }))
  .reduce((result, { slug, title, order }, i, arr) => {
    const splittedSlug = splitPath(slug);
    const relativePath = `${splittedSlug.splice(-2, 1)}/`;

    if (splittedSlug.length < 2) {
      return result;
    }

    const navRootPath = splittedSlug.join('/');
    const navName = `nav--${navRootPath}--nav`;
    const { title: rootTitle } = arr.find(({ slug }) => `${navRootPath}` === slug) || {}
    const link = { relativePath, title, order };

    const hasNoName = result.every(({ name, links }) => {
      if (name === navName) {
        links.push(link);

        return false;
      }

      return true;
    });

    if (hasNoName) {
      result.push({ name: navName, rootTitle, links: [link] })
    }

    return result;
  }, [])
  .map((item) => {
    const links = Array.from(item.links)
      .sort(({ order }, { order: order1 }) => order - order1)
      .map(({ order, ...rest }) => rest);

    return { ...item, links };
  })

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.allMarkdownRemark.edges
      .map(({ node: { frontmatter: { title, tags }, fields: { slug }, excerpt } }) =>({
        title,
        tags,
        slug,
        excerpt,
      })),
      indexName: 'webpurpleLearn',
  },
  {
    query: navQuery,
    transformer: navDataTransformer,
    indexName: 'webpurple_learn_navigation',
  }
]

module.exports = queries
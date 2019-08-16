const nodePath = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              isNavRoot
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pages = result.data.allMarkdownRemark.edges

    pages.forEach(({ node }, i, arr) => {
      const { id, fields: { slug: path } } = node;
      
      const navRoots = pages
        .filter(({ node: { frontmatter: { isNavRoot } } }) => isNavRoot)
        .sort(({ node: { fields: { slug: path1 } } }, { node: { fields: { slug: path2 } } }) => {
          const { length: length1 } = path1.split('/');
          const { length: length2 } = path2.split('/');

          return length2 - length1;
        });
        
      const { node: { fields: { slug: navRootPath } } } = navRoots.find(({ node: { fields: { slug } } }) => path.match(slug)) || { node: { fields: { slug: null } } }
     
      const isNavDeep = !arr.some(({ node: { fields: { slug } } }) => slug !== path && slug.match(new RegExp(`^${path}`)))
      // *for dynamical navigation with RegExp
      
      /*const navRoots = pages
        .filter(({ node: { frontmatter: { isNavRoot } } }) => isNavRoot)
        .sort(({ node: { fields: { slug: path1 } } }, { node: { fields: { slug: path2 } } }) => {
          const { length: length1 } = path1.split('/');
          const { length: length2 } = path2.split('/');

          if (length1 > length2) {
            return -1;
          }

          if (length1 < length2) {
            return 1;
          }

          return 0;
        });

      const currentPageNavRoot = navRoots.find(({ node: { fields: { slug } } }) =>  path.match(slug));
      const { node: { fields: { slug: currentPageNavRootPath } } } = currentPageNavRoot ? currentPageNavRoot : { node: { fields: { slug: null } } };

      const getNodeRegExp = base => `/^${base}[^/]+/$/`;
      const baseRegExp = currentPageNavRootPath && `/^${currentPageNavRootPath}$|${getNodeRegExp(currentPageNavRootPath).slice(1)}`;

      const { regExp: navRegExp } = currentPageNavRootPath 
      ? path
          .replace(currentPageNavRootPath, '')
          .split('/')
          .reduce(({ path: resultPath, regExp: resultRegExp }, currentItem) => 
        {
          let path = resultPath;
          let regExp = resultRegExp;

          if (currentItem) {
            path = `${resultPath}${currentItem}/`;
            regExp = `${resultRegExp.slice(0, -1)}|${getNodeRegExp(path).slice(1)}`;
          }

          return { path, regExp };
        },
        {
          path: currentPageNavRootPath,
          regExp: baseRegExp,
        })
      : { regExp: null };*/

      createPage({
        path,
        component: nodePath.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.tsx`
        ),
        // additional data can be passed via context
        context: { 
          id,
          isNavDeep,
          // *for dynamical navigation with RegExp
          // navRegExp,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {


    createNodeField({
      name: `slug`,
      node,
      value: createFilePath({ node, getNode }),
    });
  }
}
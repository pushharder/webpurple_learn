import { graphql, useStaticQuery } from 'gatsby'
import { NavigationDataItem, NavigationNode } from '../../plugins/gatsby-plugin-dynamical-navigation';

interface Data {
  allSiteNavigation: {
    edges: {
      node: NavigationNode
    }[]
  }
}

const useSiteNavigation = (setNavigation: React.Dispatch<React.SetStateAction<NavigationNode[]>>) => {
  const { allSiteNavigation: { edges } } = useStaticQuery<Data>(graphql`
    query SITE_NAVIGATION {
      allSiteNavigation(filter: {fields: {isRoot: {eq: true}}}) {
        edges {
          node {
            title
            path
            childrenSiteNavigation {
              title
              path
              order
            }
          }
        }
      }
    }
  `)

  const reducedData = edges.map(({ node }) => node)
  setNavigation(reducedData)
}


export default useSiteNavigation
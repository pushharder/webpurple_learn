import matter from 'gray-matter'
import dirTree from 'directory-tree';
import readFile from './utils/readFile'
import getNormalPath from './utils/getNormalPath'
import { NavigationNode } from './'
import fs from 'fs'

interface Actions {
  createNode(
    node: NodeInput,
  ): void

  createParentChildLink(
    args: { parent: Node; child: Node },
  ): void

  createNodeField(
    args: {
      node: Node
      fieldName?: string
      fieldValue?: string
      name?: string
      value: any
    }
  ): void
}

interface LinkObject {
  path: string
  title: string
  order?: number
}

interface NodeInput {
  id: string
  internal: {
    type: string
    content?: string
    contentDigest: string
    description?: string
  }
  [key: string]: unknown
}

interface Node extends NodeInput {
  parent: string
  children: string[]
  internal: NodeInput["internal"] & {
    owner: string
  }
  [key: string]: unknown
}

declare function createContentDigest(input: any): string

interface SourceNodesArgs {
  actions: Actions
  createNodeId: Function
  createContentDigest: typeof createContentDigest
  getNode(id: string): Node | undefined
  getNodes(): Node[]
}

interface Frontmatter {
  [key: string]: any
}

interface RequeredFrontmatter extends Frontmatter {
  title?: string
  navTitle?: string
  order?: number
}

const getPageAttrs = (path: string) => {
  const content = readFile(path);
  const { data: frontmatter }: {data: RequeredFrontmatter} = matter(content)

  if (frontmatter) {
    const { title: pageTitle, navTitle, order } = frontmatter
    const title = navTitle || pageTitle

    return title ? { title, order } : undefined
  }
}

const getLinks = (
  tree: directoryTree.DirectoryTree,
  links: LinkObject[] = []
) => {
  const { path, type, children: treeChildren = [] } = tree;

  if (type === 'directory' && treeChildren) {
    treeChildren.forEach((child) => {
      getLinks(child, links)
    })

    return links
  }

  const pageAttrs = getPageAttrs(path)
  if (pageAttrs) {
    const { title, order } = pageAttrs
    
    links.push({
      path: getNormalPath(path),
      title,
      order,
    })
  }
  return links
}

const sortLinks = (links: LinkObject[]) => Array.from(links)
  .sort(({ path: path1 }, { path: path2 }) => {
    const { length: length1 } = path1.split('/')
    const { length: length2 } = path2.split('/')

    return length1 - length2
  })

export const sourceNodes = (
  { actions, createContentDigest, getNode, getNodes }: SourceNodesArgs
) => {
  const { createNode, createParentChildLink, createNodeField } = actions

  const tree = dirTree('src/pages', {
    extensions: /\.(md|mdx)$/,
  })

  const links = getLinks(tree)
  const sortedLinks = sortLinks(links)
  const nodesIDs: string[] = []
  
  sortedLinks.forEach(link => {
    const nodeContent = JSON.stringify(link)
    const id = `dynamical-nav-${link.path}`
    const parentId = `${id.split('/').slice(0, -2).join('/')}/`
    const parent = getNode(parentId)

    nodesIDs.push(id)

    const nodeMeta = {
      id,
      parent: parent && parentId,
      internal: {
        type: `SiteNavigation`,
        content: nodeContent,
        contentDigest: createContentDigest(link)
      }
    }
    const node = Object.assign({}, link, nodeMeta)
    
    createNode(node)

    if (parent) {
      const child = getNode(id)

      if (child) {
        createParentChildLink({ parent, child })
      }
    }


  })

  getNodes()
    .filter(({ internal: { type } }) => 'SiteNavigation' === type)
    .forEach((node) => {
      if (!node.parent || node.children.length) {
        createNodeField({
          node,
          name: 'isRoot',
          value: true
        })
      }
    })
}

interface SiteNavigationNode extends Node, NavigationNode {}

interface AllSiteNavigationData {
  allSiteNavigation: {
    edges: {
      node: SiteNavigationNode
    }[]
  }
}

interface QueryResult {
  errors?: any[]
  data: AllSiteNavigationData
}

export const createPages = ({
  graphql
}: { graphql: (query: string) => Promise<QueryResult> }) => {
  graphql(`{
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
  }`)
  .then(({ errors, data: { allSiteNavigation: { edges } } }) => {
    if (errors) {
      errors.forEach(e => console.error(e.toString()))
      return errors
    }

    const reducedData = edges.map(({ node }) => node)

    fs.writeFileSync(
      'public/site-navigation.json',
      JSON.stringify(reducedData))
  })
}
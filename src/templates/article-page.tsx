import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Aside from '../components/Aside';
import MarkdownPageProps from '../types/MarkdownPageProps';
import Article from '../types/Article';
import Main from '../components/Main';

interface Props  {
  __html: string;
}

export const ArticlePageTemplate: React.FC<Props> = ({ __html }) => (
  <Main dangerouslySetInnerHTML={{ __html }}>
  </Main>
)


const ArticlePage: React.FC<MarkdownPageProps<Article>> = ({ 
  pageContext: {
    navRootPath,
    isNavDeep,
  },
  data: {
    markdownRemark: {
      html,
      fields: {
        slug: targetPath
      },
      frontmatter: {
        title,
      },
    },
  }
}) => (   
  <Layout pageTitle={title}>
    <Aside { ...{navRootPath, targetPath, isNavDeep} }/>
    <ArticlePageTemplate __html={html} />
  </Layout>
);

export default ArticlePage

export const pageQuery = graphql`
  query articlePageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

//*for dynamical navigation with RegExp

/*export const pageQuery = graphql`
  query articlePageTemplate($navRegExp: String!, $id: String!) {
    nav: allMarkdownRemark(
      filter: { fields: { slug: { regex: $navRegExp } } }
      sort: { fields: [frontmatter___order] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
    article: markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`*/
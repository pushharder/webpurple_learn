import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Aside from '../components/Aside';
import MarkdownPageProps from '../types/MarkdownPageProps';
import Article from '../types/Article';
import Main from '../components/Main';

type Props = {
  title: string;
 }

export const SectionPageTemplate: React.FC<Props> = ({ title }) => {
  return (
    <Main>
      <h1>{title}</h1>
    </Main>
  )
}

const SectionPage: React.FC<MarkdownPageProps<Article>> = ({ 
  pageContext: {
    navRootPath = '/',
  },
  data: {
    markdownRemark: {
      fields: {
        slug: targetPath,
      },
      frontmatter: {
        title,
      },
    },
  }
}) => {
  return (  
    <Layout pageTitle={title}>
      <Aside { ...{navRootPath, targetPath} }/>
      <SectionPageTemplate { ...{ title } }/>
    </Layout>
  )
}

export default SectionPage

export const pageQuery = graphql`
  query sectionPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { IHTML } from '../constants/types/commonTypes';

interface MarkDown extends IHTML {
  frontmatter: {
    title: string;
  };
}

interface Data {
  data: {
    markdownRemark: MarkDown;
  }
}

export const IndexPageTemplate: React.FC<IHTML> = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

const IndexPage: React.FC<Data> = ({ data: { markdownRemark: { frontmatter: { title }, html } } }) => (
  <Layout pageTitle={title}>
    <IndexPageTemplate html={html} />
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
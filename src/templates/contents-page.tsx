import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import rehypeReact from 'rehype-react'
import MarkdownPageProps from '../types/MarkdownPageProps';
import Aside from '../components/Aside';
import ArticleHTMLAST from '../types/ArticleHTMLAST';
import Main from '../components/Main';

type MarkdownLinkProps = {
  to: string;
  title: string;
}

const MarkdownLink: React.FC<MarkdownLinkProps> = ({ title, to }) => (<Link to={to}>{title}</Link>)

//import NavLink from '../types/NavLink';
//import NavLinksList from '../components/NavLinksList';
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "link": MarkdownLink }
}).Compiler

type Props = {
  htmlAst: {},
  // links: NavLink[],
  // title: string,
  // pathToTasks?: string,
}

export const IndexPageTemplate: React.FC<Props> = ({ htmlAst }) => (
  <Main>
    {console.log(htmlAst)}
    {renderAst(htmlAst)}
    {/* <h1>{title}</h1>
    <h2>Содержание</h2>
    <NavLinksList links={links} />
    {pathToTasks 
      ? (<Link to={pathToTasks}>Задания</Link>)
      : null} */}
  </Main>
);

const IndexPage: React.FC<MarkdownPageProps<ArticleHTMLAST>> = ({
  pageContext: {
    navRootPath,
    isNavDeep,
  },
  data: {
    markdownRemark: {
      htmlAst,
      frontmatter: {
        title,
      },
      fields: {
        slug: targetPath,
      },
    },
  } 
}) => {
  return (<Layout pageTitle={title}>
    <Aside { ...{targetPath, navRootPath, isNavDeep} }/>
    <IndexPageTemplate htmlAst={htmlAst} />
  </Layout>
)}

export default IndexPage;

export const pageQuery = graphql`
query contentsPageTemplate($id: String!) {
  markdownRemark(id: { eq: $id }) {
    htmlAst
    fields {
      slug
    }
    frontmatter {
      title
    }
  }
}
`
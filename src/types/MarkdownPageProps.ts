interface MarkdownPageProps<Article> {
  pageContext: { 
    navRootPath?: string;
    isNavDeep?: boolean;
  };
  data: { 
    markdownRemark: Article;
   };
};

/*interface MarkdownPageProps<Article> {
  data: {
    nav: {
      edges: Navigation;
    };
    article: Article;
  };
};*/

export default MarkdownPageProps;
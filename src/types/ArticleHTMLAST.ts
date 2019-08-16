import CommonPageQueryResult from "./CommonPageQueryResult";

interface ArticleHTMLAST extends CommonPageQueryResult {
  html?: string;
  htmlAst: any;
}

export default ArticleHTMLAST
import CommonPageQueryResult from './CommonPageQueryResult';

interface Article extends CommonPageQueryResult {
  html: string;
}

export default Article;
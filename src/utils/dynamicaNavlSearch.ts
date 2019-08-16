import splitPath from './splitPath';
import algoliasearch from 'algoliasearch/lite';
import { NavigationHit } from '../types/Hits';

export const getQuery = (path: string) => (
  { 
    indexName: `webpurple_learn_navigation`,
    query: `nav--${path}--nav`,
    params: {
      hitsPerPage: 100,
    },
  }
)

export const getQueries = (targetPath: string, navRootPath: string) => {
  const relativeTargetPath = targetPath.replace(navRootPath, '');
  const splittedRelativeTargetPath = splitPath(relativeTargetPath);
  
  return splittedRelativeTargetPath.reduce((result, current) => {
    if (current) {
      const [{ query }] = result.slice(-1);
      const nextQuery = getQuery(query.replace('--nav', `${current}/`).replace('nav--', ''));
  
      result.push(nextQuery);
    }

    return result;
  }, [getQuery(navRootPath)]).reverse();
}

export type Navigation = algoliasearch.MultiResponse<NavigationHit>[] | undefined;

export const getNavigationInfo = (
  targetPath: string,
  navRootPath = '/',
  searchClient: algoliasearch.Client,
  setNavigation: React.Dispatch<React.SetStateAction<Navigation>>,
) => {
  const queries = getQueries(targetPath, navRootPath);
  const promisses = queries.map(query => searchClient.search([query]))
  Promise.all(promisses)
  .then((results) => {
    setNavigation(results);
  })
}

export const searchClient = algoliasearch('TXJDWW9E6F','fdf88d473be66ebb368a750117c60056');
export const initialNav: Navigation = undefined;
export const getRootPath = (query: string) => query.replace(/^nav--|--nav/g,'');
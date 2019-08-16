export const indexName = 'webpurpleLearn';
export const searchDelay = 300;

export const getQuery = (query: string) => (
  { 
    indexName,
    query,
    params: {},
  }
)
type CommonPageQueryResult = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    order?: number;
  };
};

export default CommonPageQueryResult;
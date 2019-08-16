import { graphql, useStaticQuery } from 'gatsby'

const useSiteMatadata = () => {
  const { site: { siteMetadata } } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return siteMetadata;
}

export default useSiteMatadata
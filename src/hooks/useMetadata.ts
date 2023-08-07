import {graphql, useStaticQuery} from "gatsby"

const useMetadata = () => {
    return useStaticQuery(graphql`
    query {
        page: allSitePage {
            nodes {
                pageContext
                path
            }
        }
        markdown: allMarkdownRemark {
            nodes {
                id
                excerpt            
                frontmatter {
                    title
                    period
                    author
                    company_name
                    category
                }   
            }
        }
    }
  `)
}
export default useMetadata

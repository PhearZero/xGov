import {graphql, useStaticQuery} from "gatsby"

const useMetadata = () => {
    const res = useStaticQuery(graphql`
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

    return res
}
export default useMetadata

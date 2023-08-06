import * as React from "react"
import {graphql, Link} from "gatsby";
import Layout from "../components/Layout";

const IndexPage = ({data}) => {
    const pages = data.markdown.nodes.map((mdNode) => ({
        path: data.page.nodes.find((pageNode) => pageNode.pageContext.id === mdNode.id).path,
        // TODO: parse socials
        // twitter: mdNode.frontmatter.author.replace(')', '').split('@')[1],
        ...mdNode,
    }))
    return (
        <Layout>
            <main>
                {pages.map(page => (
                    <article key={page.path}>
                        <header>
                            <Link href={page.path}>{page.frontmatter.title}</Link>
                        </header>
                        {page.excerpt}
                        <footer>
                            {page.frontmatter.author}
                        </footer>
                    </article>

                ))}
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head = () => (
    <>
        <title>xGov Voting</title>
    </>
)

export const pageQuery = graphql`
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
`

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
                            <Link to={page.path}>{page.frontmatter.title}</Link>
                        </header>
                        {page.excerpt.replace('Abstract ', '')}
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
        <html lang="en" />
        <meta name="description" content="Algorand xGov Portal" />
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

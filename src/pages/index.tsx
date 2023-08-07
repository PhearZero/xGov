import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import {graphql, Link} from "gatsby";
import Layout from "../components/Layout";
import useGovs from "../hooks/useGovs";
import useProposals from "../hooks/useProposals";

type MarkdownNode = {
    id: string
    excerpt: string
    frontmatter: {
        title: string
        period: number
        author: string
        company_name: string
        category: string
    }
}
type PageNode = {
    pageContext: {
        id?: string
        frontmatter__title?: string
        __params?: {
            frontmatter__title?: string
        }
    }
    path: string
}
type QueryProps = {
    markdown: {
        nodes: MarkdownNode[]
    }
    page: {
        nodes: PageNode[]
    }
}

const IndexPage = ({data: {markdown, page}}: PageProps<QueryProps>) => {
    const govs = useGovs()
    const proposals = useProposals()

    if(!page?.nodes || !Array.isArray(page?.nodes) || page.nodes.length === 0 ){
        return (
            <Layout>
                <main>
                    <div>Error, no pages found</div>
                </main>
            </Layout>
        )
    }

    const pages = markdown.nodes.map((mdNode) => ({
        path: page.nodes.find((pageNode) => pageNode.pageContext.id === mdNode.id)?.path || '/',
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

export const Head: HeadFC<QueryProps> = () => (
    <>
        <html lang="en"/>
        <meta name="description" content="Algorand xGov Portal"/>
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

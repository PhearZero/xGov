import * as React from "react"
import {graphql} from "gatsby"
import Layout from "../../components/Layout";

export default function BlogPostTemplate({data}) {
    const {markdownRemark} = data
    const {frontmatter, html} = markdownRemark
    return (
        <Layout>
            <main>
                <article>
                    <header>
                        <hgroup>
                            <h1>{frontmatter.title}</h1>
                            <h2>{frontmatter.date}</h2>
                        </hgroup>
                    </header>
                    <div
                        dangerouslySetInnerHTML={{__html: html}}
                    />
                </article>
            </main>
        </Layout>
    )
}
export const Head = ({data}) => {
    const {markdownRemark} = data
    const {frontmatter, excerpt} = markdownRemark
    console.log(data)
    return (
        <>
            <html lang="en" />
            <title>xGov | {frontmatter.title}</title>
            <meta name="description" content={excerpt.replace('Abstract ', '')} />
        </>
    )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`

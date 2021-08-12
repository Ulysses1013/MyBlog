import React from 'react'
import Seo from '../components/SEO'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import Pagenation from '../components/Pagenation'

const IndexPage = ({ data, pageContext }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <Seo title="Home" description="ホーム"/>
      <Posts posts={posts} title="recently posts" />
      <Pagenation pageContext={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!,$limit: Int!) {
    allMdx(
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "YYYY.MM.DD")
          slug
          readTime
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`

export default IndexPage

import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const CategoryTemplate = props => {
  const {
    data: {
      categories: { nodes: posts },
    },
  } = props
  const {
    pageContext: { category },
  } = props
  return (
    <Layout>
      <Seo title="Category" />
      <Posts posts={posts} title={`category / ${category}`} />
    </Layout>
  )
}

export const query = graphql`
  query GetCategories($category: String) {
    categories: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          readTime
          date(formatString: "YYYY.MM.DD")
          slug
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

export default CategoryTemplate

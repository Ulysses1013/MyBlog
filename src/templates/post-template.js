import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Banner from '../components/Banner'
import { graphql,Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Toc from '../components/Toc'
import Tags from '../components/Posts/Tags'

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image, date, embeddedImages },
      body,
      excerpt
    },
  } = data
  const {previous, next } = data

  return (
    <Layout>
      <Seo title={title} description={excerpt}/>
      <Wrapper>
        
        <article>
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className="main-img"
          />
          <div className="post-info">
            <Tags category={category} />
            <h2>{title}</h2>
            <p>{date}</p>
            <div className="underline"></div>
          </div>
          <div className="toc">
            <h4 className="toc__title">目次</h4>
            <Toc items={data.mdx.tableOfContents.items} />
          </div>
          <MDXRenderer embeddedImages={embeddedImages}>{body}</MDXRenderer>
        

        
          <div className="mycontainer">
            
            <div className="prev"> 
            {previous && (
              <>
                <span>前の記事</span>
                <Link to={`/posts/${previous.frontmatter.slug}`} className="link-color">
                  ←{previous.frontmatter.title}
                </Link>
              </>
            )}
            </div>
            <br/>
            
            <div className="next">
            {next && (
              <>
                <span> 次の記事</span>
                <Link to={`/posts/${next.frontmatter.slug}`} className="link-color">
                  {next.frontmatter.title}→
                </Link>
              </>
            )}
            </div>
          </div>
        </article>

        
        <article>
          <Banner />
        </article>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetSinglePost(
    $slug: String
    
    $prev: String
    $next: String
    ) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date(formatString: "YYYY.MM.DD")
        readTime
        slug
        embeddedImages {
          childImageSharp {
            gatsbyImageData
          }
        }
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      excerpt
      id
      tableOfContents
    }
    previous: mdx(id: { eq: $prev }) {
      
      frontmatter {
        title
        slug
      }
    }
    next: mdx(id: { eq: $next }) {
      
      frontmatter {
        title
        slug
      }
    }
  }
`

const Wrapper = styled.section`
  width: 85vw;
  max-width: 1100px;
  margin: 0 auto;
  margin-bottom: 4rem;

  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
    span {
      background: #cbd2d7;
      color: black;
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      margin-right: 5px;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 400;
    }
    p {
      color: var(--clr-grey-5);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-grey-9);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  
  .prev {
    text-align: left;
    display: grid;
    margin-top: 20px;
  }
  .next {
    text-align: right;
    display: grid;
    margin-bottom: 10px;
  }
  .next-span {
    text-align: right;
  }
  .link-color {
    color: #1a0dab;
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
    .main-img {
      width: 75%;
      display: block;
      margin: 0 auto;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 300px;
      column-gap: 4rem;
    }
  }
`

export default PostTemplate

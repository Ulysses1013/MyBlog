import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FaRegClock } from 'react-icons/fa'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Tags from './Tags'

const Post = ({ frontmatter }) => {
  const { title, image, slug, date, category, readTime } = frontmatter
  return (
    <Wrapper>
      <GatsbyImage image={getImage(image)} alt={title} className="img" />
      <div className="info">
        <Tags category={category} />
        
        <Link to={`/posts/${slug}`} className="link"><h3>{title}</h3></Link>
        
        
        <Link to={`/posts/${slug}`} className="more-link">
          READ MORE <IoMdArrowRoundForward />
        </Link>
        <footer>
          <span className="date">
            <FaRegClock className="icon" />
            {date}
          </span>
          <span>{readTime} 分で読めます</span>
        </footer>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin-bottom: 2rem;
  .info {
    text-align: center;
  }
  .img {
    margin-bottom: 1rem;
    border-radius: var(--radius);
    height: 15rem;
  }
  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: #cbd2d7;
    padding: 0.25rem 0.5rem;
    margin-right: 5px;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    color: #5a6876;
  }
  h3 {
    font-weight: 400;
    margin-bottom: 1rem;
    text-transform: initial;
  }
  .underline {
    width: 5rem;
    height: 1px;
    background: var(--clr-grey-9);
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  p {
    color: #202124;
    line-height: 1.8;
  }
  .link {
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    font-weight: 700;
    color: #1a73e8;
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .link:hover {
    border-color: var(--clr-primary-8);
    color: #0515dd;
  }
  .more-link {
    color: var(--clr-black);
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    svg {
      margin-left: 0.25rem;
      font-size: 1.2rem;
    }
  }
  .more-link:hover {
    color: #5a6876;
  }
  footer {
    margin-top: 1rem;
    padding-top: 0.5rem;
    border-top: 1px solid #74787e;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #58616a;

    & .date {
      display: flex;
      align-items: center;
      & .icon {
        
        margin-right: 0.5rem;
      }
    }
  }
  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }
  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }
  @media (min-width: 992px) {
    & {
      display: grid;
      grid-template-columns: 20rem 1fr;
      column-gap: 1.5rem;
      .info {
        text-align: left;
      }
      .img {
        height: 80%;
        max-height: 15rem;
      }
      .underline {
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
`

export default Post

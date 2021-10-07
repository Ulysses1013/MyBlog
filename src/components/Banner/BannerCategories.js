import React from 'react'
import styled from 'styled-components'
import Categories from '../Categories'
import Title from './Title'
const BannerCategories = () => {
  return (
    <Wrapper>
      <Title title="カテゴリー"></Title>
      <Categories />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .category {
    font-size: 1rem;
    color: #172CCA;
    text-transform: capitalize;
    display: block;
    padding: 0.5rem 0 0.5rem 1rem;
    letter-spacing: var(--spacing);
    transition: var(--transition);
    border-radius: var(--radius);
  }
  .category:hover {
    background: var(--clr-grey-10);
  }
  .categories {
    list-style-type: none;
  }
`
export default BannerCategories

import React from 'react'
import styled from 'styled-components'
import About from './About'
import Recent from './Recent'
import BannerCategories from './BannerCategories'

const Banner = () => {
  return (
    
    <Wrapper>
      <div>
        <p>\在宅ワークを快適に!/</p>
        <a href="//af.moshimo.com/af/c/click?a_id=2751507&amp;p_id=54&amp;pc_id=54&amp;pl_id=616&amp;url=https%3A%2F%2Fitem.rakuten.co.jp%2F3rwebshop%2F3r-abk02%2F&amp;m=http%3A%2F%2Fm.rakuten.co.jp%2F3rwebshop%2Fi%2F10009093%2F" rel="nofollow" referrerpolicy="no-referrer-when-downgrade">
          <img src="//thumbnail.image.rakuten.co.jp/@0_mall/3rwebshop/cabinet/other02/3r-abk02-item01.jpg?_ex=200x200" alt="ads" style={{border: "none"}} width="200px" height="200px"/>
        </a><img src="//i.moshimo.com/af/i/impression?a_id=2751507&amp;p_id=54&amp;pc_id=54&amp;pl_id=616" alt="" width="1" height="1" style={{border: 0}} />
        <p>Qurra ツクエアロ２</p>
      </div>
      <About />
      <Recent />
      <BannerCategories />
    </Wrapper>
    
  )
}

const Wrapper = styled.aside`
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  row-gap: 1rem;

  p {
    text-align: center;
    color: black;
  }
  
  @media (min-width: 576px) {
    & {
      grid-template-columns: repeat(auto-fit, 200px);
      column-gap: 3rem;
    }
  }
`

export default Banner

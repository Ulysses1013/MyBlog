import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import { StaticImage } from 'gatsby-plugin-image'
import Title from './Title'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <Title title="about me" />
      <StaticImage
        src="../../assets/MyIcon.jpg"
        layout="fixed"
        width={100}
        height={100}
        alt="author"
        className="img"
      />
      <p>
        カニヤです。日々のプログラミングの学習を記録していきます。
      </p>
      <SocialLinks styleClass="banner-icons"></SocialLinks>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: #41484f;
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`
export default About

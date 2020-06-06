import React from 'react'
import styled from 'styled-components'
import { FeatureGrid } from 'components/FeaturedGrid'
import { Button } from 'components/Button'
import { Link } from 'react-router-dom'

const Container = styled.div`
  a {
    text-decoration: none;
  }
`
const HeroImage = styled.div`
  background-image: url('https://res.cloudinary.com/everlane/image/upload/c_scale/dpr_1.5,f_auto,q_65/v1/i/f52990bb_f4e3.jpg');
  height: 20vh;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    height: 30vh;
  }

  @media (min-width: 1025px) {
    height: 70vh;
  }
`
const HeroTextContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
`
const HeroTitle = styled.h2``
const SubTitle = styled.p``

export const LandingPage = () => {
  return (
    <Container>
      <HeroImage>
        <HeroTextContainer>
          <HeroTitle>Curated collection</HeroTitle>
          <SubTitle>Give clothes new life</SubTitle>
        </HeroTextContainer>
      </HeroImage>
      <FeatureGrid />
      <Link to='/products'>
        <Button title='All products' />
      </Link>
    </Container>
  )
}
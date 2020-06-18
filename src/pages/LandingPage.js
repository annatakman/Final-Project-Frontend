import React from 'react'
import styled from 'styled-components/macro'
import { FeatureGrid } from 'components/FeaturedGrid'
import { Button } from 'lib/Button'
import { Link } from 'react-router-dom'

const Container = styled.div`
  a {
    text-decoration: none;
  }
`
const HeroImage = styled.div`
  position: relative;
  height: 80vh;
  background-image: url('https://res.cloudinary.com/dciqrlzem/image/upload/v1591728323/products/karina-tess-H14pfhlfr24-unsplash_rn9vow.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    height: 70vh;
  }
`
const HeroTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  transform: translate(-50%, -50%);

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (min-width: 1025px) {
    left: 80%;
    align-items: flex-end;
  }
`
const HeroTitle = styled.h2`
  text-align: center;
`
const SubTitle = styled.p``

export const LandingPage = () => {
  return (
    <Container>
      <HeroImage>
        <HeroTextContainer>
          <HeroTitle>Curated collection</HeroTitle>
          <SubTitle>Give clothes new life</SubTitle>
          <Link to="/products">
            <Button title="All products" />
          </Link>
        </HeroTextContainer>
      </HeroImage>
      <FeatureGrid />
    </Container>
  )
}
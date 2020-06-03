import React from 'react'
import styled from 'styled-components'
import { FeatureGrid } from 'components/FeaturedGrid'

const Container = styled.div`
   
`
const HeroImage = styled.div`
  background-image: url('https://res.cloudinary.com/everlane/image/upload/c_scale/dpr_1.5,f_auto,q_65/v1/i/f52990bb_f4e3.jpg');
  height: 70vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
    </Container>
  )
}
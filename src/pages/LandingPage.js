import React from 'react'
import styled from 'styled-components/macro'
import { FeatureGrid } from 'components/FeaturedGrid'
import { Button } from 'lib/Button'
import { useHistory } from 'react-router-dom'

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
`
const HeroTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff4d;
  
  transform: translate(-50%, -50%);

 /*  @media (max-width: 1024px) { */
    width: 100%;
    height: 100%;
  /* } */

  /* @media (min-width: 1025px) {
    left: 80%;
    align-items: flex-end;
  } */
`
const HeroTitle = styled.h2`
  margin: 10px 0;
  font-size: 30px;
  font-weight: 400;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 51px;
  }
`
const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    margin-top: 30px;
    margin-bottom: 0;
  }
`

export const LandingPage = () => {
  const history = useHistory()

  const toAllProducts = () => {
    history.push('/products')
  }

  const toMarket = () => {
    history.push('/market')
  }

  return (
    <Container>
      <HeroImage>
        <HeroTextContainer>
          <HeroTitle>BUY, SELL, SHARE</HeroTitle>
          <SubTitle>Pre-loved fashion sold by us and our community</SubTitle>
          <ButtonWrapper>
            <Button onClick={toAllProducts} title="All products" background="transparent" />
            <Button onClick={toMarket} title="Market" background="transparent" />
          </ButtonWrapper>
        </HeroTextContainer>
      </HeroImage>
      <FeatureGrid />
    </Container>
  )
}
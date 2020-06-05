import React from 'react'
import styled from 'styled-components'
import { ProductsGrid } from 'components/ProductsGrid'

const Container = styled.div`
   
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

export const ProductPage = () => {
  return (
    <Container>
      <ProductsGrid />
    </Container>
  )
}
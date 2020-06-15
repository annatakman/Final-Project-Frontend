import React from 'react'
import styled from 'styled-components/macro'
import { UserProductsGrid } from 'components/UserProductsGrid'

const Container = styled.div``

export const Market = () => {
  return (
    <Container>
      <UserProductsGrid />
    </Container>
  )
}
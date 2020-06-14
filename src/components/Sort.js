import React from 'react'
import styled from 'styled-components/macro'

const SortContainer = styled.div`
  display: flex;
  
  margin: 0 20px 20px 20px;
  padding: 1px 15px;
  border: 1px solid #000;
  background: #ffe6e6;
`
const SortTitle = styled.h4`
  margin: 0 5px;
`

export const Sort = ({ onChange }) => {

  return (
    <SortContainer>
      <SortTitle>Sort by</SortTitle>
      <select onChange={onChange}>
        <option value="newest">New in</option>
        <option value="high">Price high to low</option>
        <option value="low">Price low to high</option>
      </select>
    </SortContainer>
  )
}
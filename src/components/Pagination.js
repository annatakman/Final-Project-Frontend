import React from 'react'
import styled from 'styled-components/macro'

const Pages = styled.p`
  padding: 15px 0 0 0;
  text-align: center;
`
const Arrow = styled.button`
margin: 0 5px;
background: none;
border: none;
font-size: 18px;
cursor: pointer;
`

export const Pagination = ({ page, totalPages, back, next }) => {
  return (
    <Pages>
      <Arrow
        disabled={page === 1 ? true : false}
        onClick={back}>
        &lt;
      </Arrow>
      {page} / {totalPages}
      <Arrow
        disabled={page === totalPages ? true : false}
        onClick={next}>
        &gt;
      </Arrow>
    </Pages>
  )
}
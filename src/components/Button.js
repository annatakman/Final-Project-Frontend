import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  font-family: 'Nunito Sans', sans-serif;
  border: 1px solid #1a1a1a;
  cursor: pointer;
  margin-top: 15px;
  padding: 8px 14px;
  background: ${(props) => props.background || '#fff'};
  color: ${(props) => props.color || '#1a1a1a'};
  font-size: 16px;
  text-transform: uppercase;
  display: block;
`

export const Button = ({ background, color, title, onClick }) => (
  <StyledButton onClick={onClick} background={background} color={color}>
    {title}
  </StyledButton>
)

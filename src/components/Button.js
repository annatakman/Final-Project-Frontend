import React from 'react'
import styled from 'styled-components/macro'

const StyledButton = styled.button`
  display: block;
  margin-top: 15px;
  padding: 8px 14px;
  border: 1px solid ${(props) => (props.border || '#1a1a1a')};
  background: ${(props) => (props.background || '#fff')};
  color: ${(props) => (props.color || '#1a1a1a')};
  font-family: 'Nunito Sans', sans-serif;
  font-size: ${(props) => (props.fontSize || '16px')};
  text-transform: uppercase;
  cursor: pointer;

  @media (max-width: 400px) {
    font-size: 12px;
  }
`

export const Button = ({ border, background, color, title, onClick, fontSize }) => (
  <StyledButton
    onClick={onClick}
    border={border}
    background={background}
    color={color}
    fontSize={fontSize}
  >
    {title}
  </StyledButton>
)
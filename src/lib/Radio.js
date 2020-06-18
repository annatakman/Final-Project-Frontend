import React from 'react'
import styled from 'styled-components/macro'

const RadioContainer = styled.label`
  position: relative;
  display: block;
  margin: 12px 0 12px 9px;
  padding-left: 20px;
  padding-top: 4px;
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;

  @media (min-width: 400px) {
    margin: 12px 0 12px 20px;
    font-size: 12px;
  }
`
const NewRadio = styled.span`
  position: absolute;
  top: 3px;
  left: 0;
  width: 15px;
  height: 15px;
  border: 1px solid #1a1a1a;
  background: #fff;

  &::after {
    content: "✕";
    position: absolute;
    display: none;
    top: -4px;
    left: 1px;
    width: 15px;
    height: 15px;
    font-size: 16px;
    color: #fff;
  }
`
const HiddenRadio = styled.input`
  position: absolute;
  opacity: 0;

  &:checked ~ ${NewRadio} {
    background: #1a1a1a;
  }

  &:checked ~ ${NewRadio}:after {
    display: block;
  }
`

export const Radio = ({ setState, state, value, text }) => {
  return (
    <RadioContainer htmlFor={value} className="radio-container">
      <HiddenRadio
        type="radio"
        id={value}
        name="radio"
        value={value}
        onChange={(event) => setState(event.target.value)}
        checked={state === value} />
      {text}
      <NewRadio className="radio-bttn" />
    </RadioContainer>
  )
}

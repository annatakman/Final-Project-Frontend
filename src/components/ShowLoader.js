import React from 'react'
import styled, { keyframes } from 'styled-components'

const Section = styled.section`
  display: grid;
  justify-content: center;
  padding-top: 10px;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  width: 46px;
  height: 46px;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  border-radius: 50%;
  background: transparent;

  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
`

export const ShowLoader = () => {
  return (
    <Section>
      <Spinner />
    </Section>
  )
}

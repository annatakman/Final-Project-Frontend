import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
`
const Form = styled.div`
  display: grid;
  margin: 10px;
  width: 100%;

  @media (min-width: 1025px) {
    max-width: 40vw;
  }
`
const Label = styled.p`
  margin: 0;
  font-size: 10px;
  text-transform: uppercase;
`
const Input = styled.input`
  margin: 5px 0 5px 0;
  padding: 10px 15px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d3d3d3;
  outline: none;

  &:focus {
    border: 1px solid #1a1a1a;
  }

  ::-webkit-input-placeholder { 
    color: #747474;
    font-size: 8px;
  }
  ::-moz-placeholder {
    color: #747474;
    font-size: 8px;
  }
  :-ms-input-placeholder {
    color: #747474;
    font-size: 8px;
  }
  :-moz-placeholder {
    color: #747474;
    font-size: 8px;
  }
`
const Text = styled.p`
  margin-top: 40px;
  font-size: 10px;
  text-transform: uppercase;

  a {
    font-weight: 700;
  }
`

export const ShippingInfo = ({ name, setName, street, setStreet, postcode, setPostcode, city, setCity, telephone, setTelephone }) => {

  return (
    <Section>
      <Form>
        <label htmlFor="name">
          <Label>Name</Label>
          <Input
            placeholder="NAME"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label htmlFor="street">
          <Label>Street</Label>
          <Input
            placeholder="STREET"
            required
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </label>
        <label htmlFor="postcode">
          <Label>Postal code</Label>
          <Input
            placeholder="POSTAL CODE"
            required
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)}
          />
        </label>
        <label htmlFor="city">
          <Label>City</Label>
          <Input
            placeholder="CITY"
            required
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </label>
        <label htmlFor="telephone">
          <Label>Telephone</Label>
          <Input
            placeholder="TELEPHONE"
            required
            value={telephone}
            onChange={(event) => setTelephone(event.target.value)}
          />
        </label>
      </Form>
    </Section>
  )
}
